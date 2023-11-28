import HeaderButton from "@/components/HeaderButton";
import Footer from "@/components/Footer";
import { getMovieDetails } from "../../movie-requests/requests";
import { getMovieCredits } from "../../movie-requests/requests";
import AuthButton from "@/components/AuthButton";

async function MovieDetailsPage({ params }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  const movieDetails = await getMovieDetails(params.id);
  const movieCredits = await getMovieCredits(params.id);

  return (
    <div className="w-full flex flex-col min-h-screen gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm">
          <HeaderButton />
          <AuthButton />
        </div>
      </nav>
      <div className="flex flex-col w-fit items-center">
        <div className="animate-in flex flex-row gap-8 items-center pb-10">
          <h1 className="text-2xl mr-10 font-bold">{movieDetails.title}</h1>
          <button className="mt-2 bg-gray-600 hover:bg-gray-400 text-white font-bold py-1 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
          <button className="mt-2 bg-gray-600 hover:bg-gray-400 text-white font-bold py-2 px-4">
            Add to watched
          </button>
        </div>
        <div className="flex flex-row justify-end gap-10">
          <div>
            <img src={IMAGE_BASE_URL + movieDetails.backdrop_path} />
          </div>
          <div className="animate-in w-2/4 flex flex-col gap-10">
            <div className="flex flex-row w-full gap-6">
              <h4 className="text-xl">Genres:</h4>
              <div className="w-1/2 mt-1">
                {movieDetails.genres &&
                  movieDetails.genres
                    .reduce((acc, genre, index) => {
                      if (index % 2 === 0) {
                        acc.push([genre.name]);
                      } else {
                        acc[acc.length - 1].push(genre.name);
                      }
                      return acc;
                    }, [])
                    .map((group, index) => (
                      <p key={index}>{group.join(", ")}</p>
                    ))}
              </div>
            </div>
            <div className="flex flex-col w-2/3 min-w-fit pr-20 gap-5">
              <h4 className="text-xl">Description:</h4>
              <p>{movieDetails.overview}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row w-full gap-6">
                <h4 className="text-xl">Director:</h4>
                <div className="w-1/2 mt-1">
                  {movieCredits.crew &&
                    movieCredits.crew.map((person) => {
                      if (person.job === "Director") {
                        return <p key={person.id}>{person.name}</p>;
                      }
                      return null;
                    })}
                </div>
              </div>
              <div className="flex flex-row w-full gap-6">
                <h4 className="text-xl">Writer:</h4>
                <div className="w-1/2 mt-1">
                  {movieCredits.crew &&
                    movieCredits.crew.map((person) => {
                      if (person.job === "Writer") {
                        return <p key={person.id}>{person.name}</p>;
                      }
                      return null;
                    })}
                </div>
              </div>
              <div className="flex flex-row w-full gap-6">
                <h4 className="text-xl">Cast:</h4>
                <div className="w-1/2 mt-1">
                  {movieCredits.cast &&
                    movieCredits.cast
                      .filter(
                        (person) => person.order >= 0 && person.order <= 9
                      )
                      .reduce((acc, person, index) => {
                        if (index % 2 === 0) {
                          acc.push([person.name]);
                        } else {
                          acc[acc.length - 1].push(person.name);
                        }
                        return acc;
                      }, [])
                      .map((group, index) => (
                        <p key={index}>{group.join(", ")}</p>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-t-foreground/10 mt-auto">
        <div className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm">
            <Footer />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MovieDetailsPage;
