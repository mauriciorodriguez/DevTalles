import React from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  label: string;
  onPress?: () => void,
  onLongPress?: () => void,
}

export const PrimaryButton = ({ label, onPress, onLongPress }: Props) => {
  return (
    <Pressable
      onPress={() => { onPress && onPress() }}
      onLongPress={() => onLongPress && onLongPress()}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed
      ]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? "#5856D6" : "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: Platform.OS === 'android' ? "white" : "black"
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? "#4746ab" : "white",
  }
});
