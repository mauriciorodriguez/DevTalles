import { StyleSheet, useWindowDimensions, View } from "react-native";


export const HomeworkScreen9 = () => {

  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox, { left: width / 2 - 50, top: height / 2 - 50 }]} />
      <View style={[styles.box, styles.orangeBox, { left: width / 2 + 50, top: height / 2 - 50 }]} />
      <View style={[styles.box, styles.blueBox, { left: width / 2 - 50, top: height / 2 + 50 }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28425B",
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
  },
  purpleBox: {
    backgroundColor: "#5856D6",
    position: "absolute",
  },
  orangeBox: {
    backgroundColor: "#F0A23B",
    position: "absolute",
  },
  blueBox: {
    backgroundColor: "#28C4D9",
    position: "absolute",
  },
});