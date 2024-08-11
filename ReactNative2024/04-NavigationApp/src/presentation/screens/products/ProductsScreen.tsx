import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { RootStackParams } from '../../routes/StackNavigator'
import { globalStyles } from '../../theme/theme'

const products = [
  { id: 1, name: "Producto 1" },
  { id: 2, name: "Producto 2" },
  { id: 3, name: "Producto 3" },
  { id: 4, name: "Producto 4" },
]

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10, fontSize: 30 }}>Productos</Text>
      <FlatList
        data={products}
        renderItem={(data) => (
          <PrimaryButton
            label={data.item.name}
            onPress={() => navigation.navigate("Product", { id: data.item.id, name: data.item.name })}
          />
        )}
      />
      <Text style={{ marginBottom: 10, fontSize: 30 }}>Ajustes</Text>
      <PrimaryButton
        onPress={() => navigation.navigate("Settings")}
        label='Ajustes'
      />
    </View>
  )
}
