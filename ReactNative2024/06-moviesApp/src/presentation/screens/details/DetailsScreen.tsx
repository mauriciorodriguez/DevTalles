import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { useMovie } from '../../hooks/useMovie';
import { RootStackParams } from '../../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, "Details"> {

}

export const DetailsCreeen = ({
  route
}: Props) => {

  const { movieId } = route.params;

  const { isLoading, movie, cast } = useMovie(movieId);

  if (isLoading) {
    return (<FullScreenLoader />)
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />
      <MovieDetails movie={movie!} cast={cast!} />
    </ScrollView>
  )
}