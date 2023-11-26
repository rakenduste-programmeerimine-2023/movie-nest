import React from 'react'
import HeaderButton from "@/components/HeaderButton";
import Footer from "@/components/Footer";
import { getMovies } from '@/app/movie-requests/requests';
import Card from '@/components/movie-components/Card'
import AuthButton from '@/components/AuthButton';


async function SearchPage({params}) {
  const searchText = params.query;
  const movies = await getMovies(searchText);
 
return (
  <div className="flex-1 w-full flex flex-col gap-20 items-center">
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <HeaderButton />
        <AuthButton />
      </div>
    </nav>
    <div className="container my-3">
      <h1>Search Results</h1>
      <div className="d-flex flexwrap gap-3">
        {movies && Array.isArray(movies) ? (
          movies.map((movie) => <Card key={movie.id} movie={movie} />)
        ) : (
          <div>No movies found</div>
        )}
      </div>
    </div>
    <footer className="w-full border-t border-t-foreground/10">
      <div className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <Footer />
        </div>
      </div>
    </footer>
  </div>
);}

export default SearchPage
