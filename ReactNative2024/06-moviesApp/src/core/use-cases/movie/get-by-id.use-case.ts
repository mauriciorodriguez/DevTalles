import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { FullMovieResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { FullMovie } from '../../entities/movie.entity';

export const GetMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<FullMovieResponse>(`/${movieId}`);
    return MovieMapper.fromMovieDBToEntity(movie);
  } catch (error) {
    throw new Error(`Cannot get movie by id: ${movieId}`);
  }
}
