import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieCreditsResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";
import { Cast } from "../../entities/cast.entity";

export const GetMovieCastUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<Cast[]> => {
  try {
    const { cast } = await fetcher.get<MovieCreditsResponse>(`/${movieId}/credits`);
    return cast.map(CastMapper.fromMovieDBCastToEntity)
  } catch (error) {
    throw new Error(`Cannot get movie cast ${movieId}`);
  }
}