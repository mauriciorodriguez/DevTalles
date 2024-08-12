import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  size?: number;
  color?: string;
  name: string;
}

export const IonIcon = ({
  size = 40,
  color = "#000",
  name,
}: Props) => {
  return (
    <Icon name={name} size={size} color={color} />
  )
}
