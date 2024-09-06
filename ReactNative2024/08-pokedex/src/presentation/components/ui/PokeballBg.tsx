import React, {useContext} from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ImageStyle>;
}

export const PokeballBg = ({style}: Props) => {
  const {isDarkTheme} = useContext(ThemeContext);

  const pokeballImage = isDarkTheme
    ? require('./../../../assets/pokeball-light.png')
    : require('./../../../assets/pokeball-dark.png');

  return (
    <Image
      source={pokeballImage}
      style={[{width: 300, height: 300, opacity: 0.3}, style]}
    />
  );
};
