import React, { useContext, useRef } from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { ThemeContext } from '../../context/ThemeContext';

export const Animation102Screen = () => {

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 }, useNativeDriver: false }, // Back to zero
      ).start();
    },
  });

  const { colors } = useContext(ThemeContext);

  return (
    <CustomView style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box, { backgroundColor: colors.primary }]}
      />
    </CustomView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});