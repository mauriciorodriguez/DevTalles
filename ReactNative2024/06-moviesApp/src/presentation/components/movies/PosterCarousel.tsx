import React, { useRef } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Movie } from '../../../core/entities/movie.entity';
import { MoviePoster } from './MoviePoster';

interface Props {
  movies: Movie[];
  height?: number;

  loadNextPage?: () => void;
}

export const PosterCarousel = ({
  movies,
  height = 440,
  loadNextPage
}: Props) => {

  const isLoading = useRef(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached = (contentOffset.x + layoutMeasurement.width + 1000) >= contentSize.width;
    if (!isEndReached) return;
    isLoading.current = true;
    loadNextPage && loadNextPage();
  }

  return (
    <View style={{ height }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      >
        {
          movies.map((movie) => (
            <MoviePoster key={movie.id} movie={movie} />
          ))
        }
      </ScrollView>
    </View>
  )
}
