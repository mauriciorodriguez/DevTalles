import React, { useContext } from 'react'
import { Alert, View } from 'react-native'
import { showPrompt } from '../../../config/theme/adapters/prompt.adapter'
import { Button } from '../../components/ui/Button'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { ThemeContext } from '../../context/ThemeContext'

export const AlertScreen = () => {

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
      {
        userInterfaceStyle: isDark ? "dark" : "light",
      });

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
      {
        userInterfaceStyle: isDark ? "dark" : "light",
      });

  const onShowPrompt = () => {
    //   ! Codigo Nativo
    //   Alert.prompt(
    //     "title",
    //     "message",
    //     (valor: string) => {
    //       console.log(valor);
    //     },
    //     "secure-text",
    //     "defaultValue",
    //     "number-pad"
    //   );

    showPrompt({
      title: 'Enter password',
      message: 'Enter your password to claim your $1.5B in lottery winnings',
      callbackOrButtons: [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
      ],
      options: {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder'
      }
    });
  }

  const { isDark } = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title safe text='Alertas' />
      <Button
        text='Alerta - 2 botones'
        onPress={createTwoButtonAlert}
      />
      <View style={{ height: 10 }} />
      <Button
        text='Alerta - 3 botones'
        onPress={createThreeButtonAlert}
      />
      <View style={{ height: 10 }} />
      <Button
        text='Prompt - Input'
        onPress={onShowPrompt}
      />
    </CustomView>
  )
}
