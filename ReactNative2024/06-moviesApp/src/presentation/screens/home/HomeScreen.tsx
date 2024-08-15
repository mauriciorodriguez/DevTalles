import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { useMovies } from '../../hooks/useMovies';

export const HomeScreen = () => {
  const { isLoading, nowPlaying, popular, upcoming, topRated, popularNextPage, nowPlayingNextPage, upcomingNextPage, topRatedNextPage } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (<FullScreenLoader />);
  }

  return (
    <ScrollView>
      <View
        style={{
          marginTop: top + 20,
          paddingTop: 30,
        }}>
        <PosterCarousel movies={nowPlaying} loadNextPage={nowPlayingNextPage} />
        <HorizontalCarousel movies={popular} title='Popular' loadNextPage={popularNextPage} />
        <HorizontalCarousel movies={topRated} title='Mejor valorados' loadNextPage={topRatedNextPage} />
        <HorizontalCarousel movies={upcoming} title='Proximamente' loadNextPage={upcomingNextPage} />
      </View>
    </ScrollView>
  )
}
