import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { Button } from '../../components/ui/Button'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { ThemeContext } from '../../context/ThemeContext'

export const ChangeThemeScreen = () => {

  const { setTheme, currentTheme, colors } = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title text={`Cambiar el tema: ${currentTheme}`} safe />
      <Button
        text='Light'
        onPress={() => setTheme('light')}
      />
      <View style={{ height: 10 }} />
      <Button
        text='Dark'
        onPress={() => setTheme('dark')}
      />
      <View style={{ height: 10 }} />
      <Button
        text='Ocean'
        onPress={() => setTheme('ocean')}
      />
      <View style={{ height: 10 }} />
      <Button
        text='Sunset'
        onPress={() => setTheme('sunset')}
      />
      <View style={{ height: 10 }} />
      <Button
        text='Forest'
        onPress={() => setTheme('forest')}
      />
      <View style={{ height: 10 }} />
      <Text style={{ color: colors.text }}>{JSON.stringify(colors, null, 2)}</Text>
    </CustomView>
  )
}
