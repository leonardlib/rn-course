import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  PostDetail,
  Posts,
  ResetPassword,
  Settings,
  SignIn,
  SignUp,
} from './src/components';
import { RootStackParamList } from './types';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerTransparent: true }}
      >
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ title: 'Reset Password' }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen
          name="PostDetail"
          component={PostDetail}
          options={{ title: 'Post Detail' }}
        />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
