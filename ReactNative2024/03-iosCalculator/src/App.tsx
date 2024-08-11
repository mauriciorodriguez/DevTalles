import { StatusBar, View } from "react-native";
import { CalculatorScreen } from "./Presentation/screens/CalculatorScreen";
import { globalStyles } from "./config/theme/app-theme";


function App() {

  return (
    <View style={globalStyles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={"black"}
      />
      <CalculatorScreen />
    </View>
  );
}

export default App;
