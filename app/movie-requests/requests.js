export const getPopularMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1$",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_AUTH}`,
      },
    }
  );
  const data = await res.json();

  return data.results;
};

export const getTopMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1$",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_AUTH}`,
      },
    }
  );
  const data = await res.json();

  return data.results;
};

export const getUpcomingMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1$",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_AUTH}`,
      },
    }
  );
  const data = await res.json();

  return data.results;
};

export const getMovies = async (query) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_AUTH}`,
      },
    }
  );
  const data = await res.json();

  return data.results;
};

export const getMovieDetails = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_AUTH}`,
    },
  });
  const data = await res.json();

  return data;
};

export const getMovieCredits = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_AUTH}`,
      },
    }
  );
  const data = await res.json();

  return data;
};

export const getSimilarMovies = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_AUTH}`,
    },
  });
  const data = await res.json();

  return data.results;
};
