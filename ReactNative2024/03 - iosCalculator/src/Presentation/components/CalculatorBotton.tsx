import { Pressable, Text } from "react-native";
import { colors, globalStyles } from "../../config/theme/app-theme";

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorBotton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        width: (doubleSize) ? 180 : 80,
        opacity: (pressed) ? 0.8 : 1
      })}>
      <Text style={{
        ...globalStyles.buttonText,
        color: (blackText) ? "black" : "white"
      }}>{label}</Text>
    </Pressable>
  )
}
