import { StyleSheet } from "react-native";

export interface ThemeColors {
  primary: string;
  text: string;
  background: string;
  cardBackground: string;
  buttonTextColor: string;
}

// export const colors: ThemeColors = {
//   primary: "#5856D6",
//   text: "black",

//   background: "#F3F2F7",
//   cardBackground: "white",
//   buttonTextColor: "white",
// };

export const lightColors: ThemeColors = {
  primary: "#5856D6",
  text: "black",

  background: "#F3F2F7",
  cardBackground: "white",
  buttonTextColor: "white",
};

export const darkColors: ThemeColors = {
  primary: "#5856D6",
  text: "white",

  background: "#090909",
  cardBackground: "#2d2d2d",
  buttonTextColor: "white",
};

export const forestColors: ThemeColors = {
  primary: "#2E8B57", // Sea Green
  text: "#2F4F4F", // Dark Slate Gray

  background: "#F0FFF0", // Honeydew
  cardBackground: "#8FBC8F", // Dark Sea Green
  buttonTextColor: "#FFFFFF", // White
};

export const sunsetColors: ThemeColors = {
  primary: "#FF4500", // Orange Red
  text: "#8B0000", // Dark Red

  background: "#FFF5EE", // Seashell
  cardBackground: "#FFD700", // Gold
  buttonTextColor: "#FFFFFF", // White
};

export const oceanColors: ThemeColors = {
  primary: "#4682B4", // Steel Blue
  text: "#2F4F4F", // Dark Slate Gray

  background: "#E0FFFF", // Light Cyan
  cardBackground: "#B0C4DE", // Light Steel Blue
  buttonTextColor: "#000000", // Black
};

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    // color: colors.text,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    // color: colors.text,
  },

  mainContainer: {
    flex: 1,
    // backgroundColor: colors.background,
  },
  globalMargin: {
    paddingHorizontal: 20,
    flex: 1,
  },

  btnPrimary: {
    // backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  btnPrimaryText: {
    // color: colors.text,
    fontSize: 16,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 10,
    // color: colors.text,
  }
});