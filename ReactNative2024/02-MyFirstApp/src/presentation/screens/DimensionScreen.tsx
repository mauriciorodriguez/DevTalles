import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Text } from 'react-native-paper';

export const DimensionScreen = () => {

  const { height, width } = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{ ...styles.purpleBox, width: width * 0.5 }}></View>
      </View>
      <Text style={styles.title}>w:{width}, h:{height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 300,
  },
  purpleBox: {
    backgroundColor: "#5856D6",
    height: "50%",
    width: "50%",
  },
  title: {
    textAlign: "center",
    fontSize: 40
  }
});