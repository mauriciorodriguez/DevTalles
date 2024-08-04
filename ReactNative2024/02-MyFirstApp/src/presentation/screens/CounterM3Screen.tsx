import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../theme';

export const CounterM3Screen = () => {

  const [count, setCount] = useState<number>(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <FAB
        icon="add"
        style={globalStyles.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  )
}