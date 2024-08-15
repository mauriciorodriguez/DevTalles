import { FullMovie, Movie } from "../../core/entities/movie.entity";
import { FullMovieResponse, Result } from "../interfaces/movie-db.responses";

export class MovieMapper {
  static fromMovieDBResultToEntity(result: Result): Movie {
    const movie: Movie = {
      id: result.id,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      description: result.overview,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      rating: result.vote_average,
      releaseDate: new Date(result.release_date),
      title: result.title,
    }
    return movie;
  }

  static fromMovieDBToEntity(result: FullMovieResponse): FullMovie {
    return {
      id: result.id,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      description: result.overview,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      rating: result.vote_average,
      releaseDate: new Date(result.release_date),
      title: result.title,
      budget: result.budget,
      duration: result.runtime,
      genres: result.genres.map(g => g.name),
      originalTitle: result.original_title,
      productionCompanies: result.production_companies.map(pc => pc.name),
    }
  }
}