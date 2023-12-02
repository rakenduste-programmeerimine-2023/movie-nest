import {
  getMovieDetails,
  getSimilarMovies,
} from "../../app/movie-requests/requests";
import { Carousel } from "@/components/movie-components/Carousel";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function ManageMyPage({ user }) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const userId = user.id.toString();
  var errorMessage = "";
  const watchLaterMovieDetailsArray = [];
  const watchedMovieDetailsArray = [];
  const favoriteMovieDetailsArray = [];
  var lastFavorite = undefined;

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

  const { data: favoriteData, error: favoriteError } = await supabase
    .from("Favorite")
    .select("id, user_id, movie_id")
    .eq("user_id", userId);

  if (favoriteError) {
    errorMessage = favoriteError.message;
  }

  for (let i = 0; i < favoriteData.length; i++) {
    const movieDetails = await getMovieDetails(favoriteData[i].movie_id);
    favoriteMovieDetailsArray.push(movieDetails);
    if (i === favoriteData.length - 1) {
      lastFavorite = favoriteData[i].movie_id;
    }
  }

  const lastFavoriteMovieDetails = await getSimilarMovies(lastFavorite);

  return (
    <div className="flex flex-col self-center w-full">
      <div className="flex flex-col w-full">
        <h1 className="mb-4 self-center">Watch Later</h1>

        <Carousel movies={watchLaterMovieDetailsArray}></Carousel>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="mb-4 mt-8 self-center">Already Watched</h1>
        <Carousel movies={watchedMovieDetailsArray}></Carousel>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="mb-4 mt-8 self-center">Favorites</h1>
        <Carousel movies={favoriteMovieDetailsArray}></Carousel>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="mb-4 mt-8 self-center">Recommended</h1>
        <Carousel movies={lastFavoriteMovieDetails}></Carousel>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
