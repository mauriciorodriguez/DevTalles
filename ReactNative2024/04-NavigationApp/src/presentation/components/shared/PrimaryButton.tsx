import React from 'react';
import { Pressable, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface Props {
  label: string;
  onPress: () => void;
}

export const PrimaryButton = ({
  label,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={globalStyles.primaryButton}
      onPress={onPress}
    >
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  )
}
