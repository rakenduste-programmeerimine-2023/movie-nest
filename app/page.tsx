import HeaderButton from "../components/HeaderButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import Footer from "@/components/Footer";
import { getPopularMovies } from "./movie-requests/requests";
import { getTopMovies } from "./movie-requests/requests";
import { getUpcomingMovies } from "./movie-requests/requests";
import { Carousel } from "@/components/movie-components/Carousel";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  const popularMovies = await getPopularMovies();
  const topMovies = await getTopMovies();
  const upcomingMovies = await getUpcomingMovies();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <HeaderButton />
          {isSupabaseConnected }
        </div>
      </nav>

      <div className="animate-in flex-1 w-full max-w-7xl flex flex-col justify-around gap-20 items-start text-3xl">
        <h1 className="ml-12">Popular Movies</h1>
        <Carousel movies={popularMovies}></Carousel>
        <h1 className="ml-12">Top rated Movies</h1>
        <Carousel movies={topMovies}></Carousel>
        <h1 className="ml-12">Upcoming Movies</h1>
        <Carousel movies={upcomingMovies}></Carousel>
      </div>

      <footer className="w-full border-t border-t-foreground/10">
        <div className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <Footer />
          </div>
        </div>
      </footer>
    </div>
  );
}
