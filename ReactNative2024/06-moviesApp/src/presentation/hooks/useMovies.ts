import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';

import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import * as UseCases from "./../../core/use-cases";

let popularPageNumber = 1;
let upcomingPageNumber = 1;
let topRatedPageNumber = 1;
let nowPlayingPageNumber = 1;

export const useMovies = () => {

  const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
  const [upcoming, setUpcoming] = useState<Movie[]>([])
  const [popular, setPopular] = useState<Movie[]>([])
  const [topRated, setTopRated] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    initialLoad();
  }, [])

  const initialLoad = async () => {
    setIsLoading(true);
    const [nowPlayingMovies, upcomingMovies, popularMovies, topRatedMovies] = await Promise.all([UseCases.moviesNowPLayingUseCase(movieDBFetcher), UseCases.moviesUpcomingUseCase(movieDBFetcher), UseCases.moviesPopularUseCase(movieDBFetcher), UseCases.moviesTopRatedUseCase(movieDBFetcher)]);
    setNowPlaying(nowPlayingMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);
    setPopular(popularMovies);
    setIsLoading(false);
  }



  return {
    isLoading,
    nowPlaying,
    upcoming,
    popular,
    topRated,
    popularNextPage: async () => {
      popularPageNumber++;
      const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, { page: popularPageNumber });
      setPopular(prev => [...prev, ...popularMovies])
    },
    upcomingNextPage: async () => {
      upcomingPageNumber++;
      const upcomingMovies = await UseCases.moviesUpcomingUseCase(movieDBFetcher, { page: upcomingPageNumber });
      setUpcoming(prev => [...prev, ...upcomingMovies])
    },
    nowPlayingNextPage: async () => {
      nowPlayingPageNumber++;
      const nowPlayingMovies = await UseCases.moviesNowPLayingUseCase(movieDBFetcher, { page: nowPlayingPageNumber });
      setNowPlaying(prev => [...prev, ...nowPlayingMovies])
    },
    topRatedNextPage: async () => {
      topRatedPageNumber++;
      const topRatedMovies = await UseCases.moviesTopRatedUseCase(movieDBFetcher, { page: topRatedPageNumber });
      setTopRated(prev => [...prev, ...topRatedMovies])
    },
  }
}
