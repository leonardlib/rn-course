import React from 'react';
import { SafeAreaView, View, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../types';
import { TextInput } from '../TextInput';
import { Pressable } from '../Pressable';

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
type FormData = {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export default function SignUp({ navigation }: SignUpProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const onSubmit = (data: FormData) => {
    fetch('https://my-json-server.typicode.com/typicode/demo/profile', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status !== 201) {
          Alert.alert(
            'User not created',
            'There is an error with the endpoint, try later',
            [{ text: 'OK' }],
          );
          return;
        }

        Alert.alert('User created', `The user ${data.email} has been created`, [
          { text: 'OK' },
        ]);
        reset();
        navigation.goBack();
      })
      .catch(() => {
        Alert.alert(
          'User not created',
          'There is an error with the endpoint, try later',
          [{ text: 'OK' }],
        );
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.input}>
          <Controller
            name="username"
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Username"
                inputMode="text"
                textContentType="username"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.username?.message}
                autoCapitalize="none"
                autoComplete="username"
                autoCorrect={false}
              />
            )}
          />
        </View>
        <View style={styles.input}>
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
        <View style={styles.input}>
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Password"
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
        </View>
        <Controller
          name="passwordConfirmation"
          control={control}
          rules={{
            required: 'This field is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Confirm password"
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
          text="Sign up"
          style={styles.button}
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
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 50,
  },
});
