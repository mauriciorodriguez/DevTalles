import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectModelScreen</Text> */}
      <Text style={styles.purpleBox}>PurpleBox</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  title: {
    fontSize: 30,
    borderWidth: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  purpleBox: {
    backgroundColor: "purple",
    height: 30,
    margin: 20,
    padding: 5,
  }
});