import { useEffect, useState } from 'react';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { Cast } from '../../core/entities/cast.entity';
import { FullMovie } from '../../core/entities/movie.entity';
import * as UseCases from "./../../core/use-cases";

export const useMovie = (movieId: number) => {

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>()
  const [cast, setCast] = useState<Cast[]>()

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const [movieResponse, castResponse] = await Promise.all([UseCases.GetMovieByIdUseCase(movieDBFetcher, movieId), UseCases.GetMovieCastUseCase(movieDBFetcher, movieId)]);
    setMovie(movieResponse);
    setCast(castResponse);
    setIsLoading(false);
  }

  return {
    isLoading,
    movie,
    cast,
  }
}
