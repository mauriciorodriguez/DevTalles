import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { PrimaryButton } from '../components';

export const CounterScreen = () => {

  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{count}</Text>
      <PrimaryButton
        label='+1'
        onPress={() => { setCount(count + 1) }}
        onLongPress={() => { setCount(0) }}
      />
      <Button
        mode='contained'
        onPress={() => { setCount(count + 1) }}
        onLongPress={() => { setCount(0) }}
      >
        +1(paper)
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16
  },
  number: {
    fontSize: 80,
    color: "black",
    fontWeight: "300",
  },
});