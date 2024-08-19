import React, { useContext } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import { Button } from '../../components/ui/Button';
import { CustomView } from '../../components/ui/CustomView';
import { ThemeContext } from '../../context/ThemeContext';
import { useAnimation } from '../../hooks/useAnimation';

export const Animation101Screen = () => {

  const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTopPosition } = useAnimation();

  const { colors } = useContext(ThemeContext);

  return (
    <CustomView style={styles.container}>
      <Animated.View style={[
        styles.purpleBox,
        {
          backgroundColor: colors.primary
        },
        {
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop,
          }]
        }
      ]} />
      <Button
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({ initialPosition: -100, easing: Easing.bounce, duration: 700 });
        }}
        styles={{ marginTop: 10 }}
        text='FadeIn'
      />
      <Button
        onPress={() => fadeOut({})}
        styles={{ marginTop: 10 }}
        text='FadeOut'
      />
    </CustomView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  purpleBox: {
    width: 150,
    height: 150,
  }
});