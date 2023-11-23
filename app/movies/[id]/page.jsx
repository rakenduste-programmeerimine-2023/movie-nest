import HeaderButton from "@/components/HeaderButton";
import Footer from "@/components/Footer";
import { getMovieDetails } from "../../movie-requests/requests";
import { getMovieCredits } from "../../movie-requests/requests";

async function MovieDetailsPage({ params }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  const movieDetails = await getMovieDetails(params.id);
  const movieCredits = await getMovieCredits(params.id);

  return (
    <div className="w-full flex flex-col min-h-screen gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <HeaderButton />
        </div>
      </nav>
      <div className="flex flex-col w-screen items-center">
        <div className="animate-in text-left text-2xl">
          <h1 className="pb-10">{movieDetails.title}</h1>
        </div>
        <div className="flex flex-row justify-end gap-10">
          <div className="">
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
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <Footer />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MovieDetailsPage;
