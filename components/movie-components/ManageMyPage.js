import { getMovieDetails } from "../../app/movie-requests/requests";
import { Carousel } from "@/components/movie-components/Carousel";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import "@/components/movie-components/Carousel.css";

export default async function ManageMyPage({ user }) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const userId = user.id.toString();
  var errorMessage = "";
  const watchLaterMovieDetailsArray = [];
  const watchedMovieDetailsArray = [];

  const { data: watchLaterData, error: watchLaterError } = await supabase
    .from("WatchLater")
    .select("id, user_id, movie_id")
    .eq("user_id", userId);

  if (watchLaterError) {
    errorMessage = watchLaterError.message;
  }

  for (let i = 0; i < watchLaterData.length; i++) {
    const movieDetails = await getMovieDetails(watchLaterData[i].movie_id);
    watchLaterMovieDetailsArray.push(movieDetails);
  }

  const { data: watchedData, error: watchedError } = await supabase
    .from("Watched")
    .select("id, user_id, movie_id")
    .eq("user_id", userId);

  if (watchedError) {
    errorMessage = watchedError.message;
  }

  for (let i = 0; i < watchedData.length; i++) {
    const movieDetails = await getMovieDetails(watchedData[i].movie_id);
    watchedMovieDetailsArray.push(movieDetails);
  }
  return (
    <div className="flex flex-col self-center w-full">
      <div className="flex flex-col w-full">
        <h1 className="mb-4 self-start custom-margin">Watch Later</h1>

        <Carousel movies={watchLaterMovieDetailsArray}></Carousel>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="mb-4 mt-8 self-start custom-margin">Already Watched</h1>
        <Carousel movies={watchedMovieDetailsArray}></Carousel>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
