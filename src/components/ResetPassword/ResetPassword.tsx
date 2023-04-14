import React from 'react';
import { SafeAreaView, View, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../types';
import { TextInput } from '../TextInput';
import { Pressable } from '../Pressable';

type ResetPasswordProps = NativeStackScreenProps<
  RootStackParamList,
  'ResetPassword'
>;
type FormData = {
  email: string;
  password: string;
};

export default function ResetPassword({ navigation }: ResetPasswordProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = ({ email }) => {
    Alert.alert(
      'Password changed',
      `The password of ${email} has been changed`,
      [{ text: 'OK' }],
    );
    reset();
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.email}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Email"
                inputMode="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.email?.message}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
              />
            )}
          />
        </View>
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'This field is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="New password"
              inputMode="text"
              textContentType="password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.password?.message}
              autoCapitalize="none"
              autoCorrect={false}
            />
          )}
        />
        <Pressable
          text="Reset"
          style={styles.reset}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    padding: 20,
  },
  email: {
    marginBottom: 20,
  },
  reset: {
    marginTop: 50,
  },
});
