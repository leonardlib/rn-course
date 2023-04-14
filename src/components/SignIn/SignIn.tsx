import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Alert } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm, Controller } from 'react-hook-form';

import { RootStackParamList } from '../../../types';
import { TextInput } from '../TextInput';
import { Pressable } from '../Pressable';
import { useUsers } from '../../hooks';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
type FormData = {
  email: string;
  password: string;
};

export default function SignIn({ navigation }: SignInProps) {
  const { users, fetchUsers } = useUsers();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const onSubmit = ({ email: inputEmail, password }) => {
    const thereIsUser = users.some(
      ({ email, username }) => inputEmail === email && username === password,
    );

    if (!thereIsUser) {
      Alert.alert(
        'Incorrect email or password',
        'There is no user with that information',
        [{ text: 'OK' }],
      );
      return;
    }

    navigation.navigate('Posts');
  };

  console.log(users);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sign In</Text>
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
        <Pressable
          text="Forgot password?"
          style={styles.forgotPassword}
          contentStyle={styles.forgotPasswordText}
          onPress={() => navigation.navigate('ResetPassword')}
        />
        <View style={styles.buttons}>
          <Pressable
            text="Sign in"
            style={styles.signIn}
            onPress={handleSubmit(onSubmit)}
          />
          <Pressable
            kind="secondary"
            text="Register"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
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
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 50,
  },
  email: {
    marginBottom: 20,
  },
  buttons: {
    marginTop: 50,
  },
  signIn: {
    marginBottom: 20,
  },
  forgotPassword: {
    height: 'auto',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  forgotPasswordText: {
    color: 'black',
    textDecorationLine: 'underline',
    fontSize: 12,
    marginTop: 4,
  },
});
