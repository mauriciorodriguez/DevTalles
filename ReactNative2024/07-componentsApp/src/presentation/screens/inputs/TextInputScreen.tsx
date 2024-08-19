import React, { useContext, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';
import { Card } from '../../components/ui/Card';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { ThemeContext } from '../../context/ThemeContext';

export const TextInputScreen = () => {

  const [form, setForm] = useState<{
    name: string;
    email: string;
    phone: string;
  }>({
    name: "",
    email: "",
    phone: "",
  })

  const { colors } = useContext(ThemeContext);

  return (
    <ScrollView>
      <CustomView margin>
        <Title safe text='Text Inputs' />
        <Card>
          <TextInput
            style={{ ...globalStyles.input, color: colors.text, borderColor: colors.primary }}
            placeholder='Nombre completo'
            placeholderTextColor={colors.text}
            autoCapitalize={"words"}
            autoCorrect={false}
            onChangeText={(text) => setForm({ ...form, name: text })}
          />
          <TextInput
            style={{ ...globalStyles.input, color: colors.text, borderColor: colors.primary }}
            placeholder='Correo electronico'
            placeholderTextColor={colors.text}
            autoCapitalize={"none"}
            autoCorrect={false}
            keyboardType={"email-address"}
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
          <TextInput
            style={{ ...globalStyles.input, color: colors.text, borderColor: colors.primary }}
            placeholder='Telefono'
            placeholderTextColor={colors.text}
            onChangeText={(text) => setForm({ ...form, phone: text })}
            keyboardType={"phone-pad"}
          />

        </Card>
        <View style={{ height: 10 }} />
        <Card>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
          <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
        </Card>
        <View style={{ height: 10 }} />
        <Card>
          <TextInput
            style={{ ...globalStyles.input, color: colors.text, borderColor: colors.primary }}
            placeholder='Nombre completo'
            placeholderTextColor={colors.text}
            autoCapitalize={"words"}
            autoCorrect={false}
            onChangeText={(text) => setForm({ ...form, name: text })}
          />
        </Card>
      </CustomView>
      <View style={{ height: 20 }} />
    </ScrollView>
  )
}
