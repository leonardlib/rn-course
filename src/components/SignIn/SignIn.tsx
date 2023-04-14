import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../types';
import { TextInput } from '../TextInput';
import { Pressable } from '../Pressable';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export default function SignIn({ navigation }: SignInProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.email}>
          <TextInput
            label="Email"
            inputMode="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
        </View>
        <TextInput
          label="Password"
          inputMode="text"
          textContentType="password"
          secureTextEntry
        />
        <Pressable
          text="Forgot password?"
          style={styles.forgotPassword}
          contentStyle={styles.forgotPasswordText}
          onPress={() => navigation.navigate('ResetPassword')}
        />
        <View style={styles.buttons}>
          <Pressable text="Sign in" style={styles.signIn} />
          <Pressable
            kind="secondary"
            text="Register"
            onPress={() => navigation.navigate('Settings')}
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
