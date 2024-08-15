import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

interface Options {
  page?: number;
  limit?: number;
}

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MovieDBMoviesResponse>("/top_rated", {
      params: {
        page: options?.page ?? 1
      }
    });
    return topRated.results.map(MovieMapper.fromMovieDBResultToEntity)
  } catch (error) {
    throw new Error("Error fetching movies - TopRated");
  }
}