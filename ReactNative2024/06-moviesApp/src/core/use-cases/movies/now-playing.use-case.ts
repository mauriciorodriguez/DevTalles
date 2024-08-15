import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

interface Options {
  page?: number;
  limit?: number;
}

export const moviesNowPLayingUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>("/now_playing", {
      params: {
        page: options?.page ?? 1
      }
    });
    return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity)
  } catch (error) {
    throw new Error("Error fetching movies - NowPlaying");
  }
}