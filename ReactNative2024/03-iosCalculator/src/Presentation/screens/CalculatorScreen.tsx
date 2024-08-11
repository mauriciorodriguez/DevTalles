import React from 'react';
import { Text, View } from 'react-native';
import { colors, globalStyles } from '../../config/theme/app-theme';
import { CalculatorBotton } from '../components/CalculatorBotton';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

  const { number, buildNumber, toggleSign, clean, deleteOperation, addOperation, subtractOperation, multiplyOperation, divideOperation, previousNumber, calculateResult, formula } = useCalculator();


  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text style={globalStyles.mainResult} adjustsFontSizeToFit numberOfLines={1}>{formula}</Text>
        {
          (formula === previousNumber)
            ? <Text style={globalStyles.subResult}></Text>
            : (
              <Text adjustsFontSizeToFit numberOfLines={1} style={globalStyles.subResult}>{previousNumber}</Text>
            )
        }
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={clean} label='C' color={colors.lightGray} blackText />
        <CalculatorBotton onPress={toggleSign} label='+/-' color={colors.lightGray} blackText />
        <CalculatorBotton onPress={deleteOperation} label='del' color={colors.lightGray} blackText />
        <CalculatorBotton onPress={divideOperation} label='÷' color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={() => buildNumber("7")} label='7' />
        <CalculatorBotton onPress={() => buildNumber("8")} label='8' />
        <CalculatorBotton onPress={() => buildNumber("9")} label='9' />
        <CalculatorBotton onPress={multiplyOperation} label='×' color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={() => buildNumber("4")} label='4' />
        <CalculatorBotton onPress={() => buildNumber("5")} label='5' />
        <CalculatorBotton onPress={() => buildNumber("6")} label='6' />
        <CalculatorBotton onPress={subtractOperation} label='-' color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={() => buildNumber("1")} label='1' />
        <CalculatorBotton onPress={() => buildNumber("2")} label='2' />
        <CalculatorBotton onPress={() => buildNumber("3")} label='3' />
        <CalculatorBotton onPress={addOperation} label='+' color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={() => buildNumber("0")} label='0' doubleSize />
        <CalculatorBotton onPress={() => buildNumber(".")} label='.' />
        <CalculatorBotton onPress={calculateResult} label='=' color={colors.orange} />
      </View>
    </View>
  )
}
