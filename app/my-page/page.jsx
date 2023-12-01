import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import HeaderButton from "@/components/HeaderButton";
import AuthButton from "@/components/AuthButton";
import Footer from "@/components/Footer";
import { getMovieDetails } from "../movie-requests/requests";
import { Carousel } from "@/components/movie-components/Carousel";

export default async function Account() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userid = user.id.toString();
  var errorMessage = "";
  const WatchLaterMovieDetailsArray = [];

  const { data, select_error } = await supabase
    .from("WatchLater")
    .select("id, user_id, movie_id")
    .eq("user_id", userid);

  if (select_error) {
    errorMessage = select_error.message;
  }

  for (let i = 0; i < data.length; i++) {
    const movieDetails = await getMovieDetails(data[i].movie_id);
    WatchLaterMovieDetailsArray.push(movieDetails);
  }

  console.log(WatchLaterMovieDetailsArray);

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm">
          <HeaderButton />
          <AuthButton />
        </div>
      </nav>

      <div className="animate-in flex-1 w-full max-w-7xl flex flex-col gap-10 items-center text-2xl">
        <h1>{user.email}'s page</h1>
        <div className="flex flex-col self-center">
          <h1 className="ml-10 mb-4">Watch Later</h1>
          <Carousel movies={WatchLaterMovieDetailsArray}></Carousel>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </div>

      <footer className="w-full border-t border-t-foreground/10">
        <div className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm">
            <Footer />
          </div>
        </div>
      </footer>
    </div>
  );
}
