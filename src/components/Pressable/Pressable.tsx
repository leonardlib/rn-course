import React from 'react';
import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  Text,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
} from 'react-native';

type PressableProps = RNPressableProps & {
  text: string;
  kind?: 'primary' | 'secondary' | 'link';
  style?: ViewStyle;
  contentStyle?: TextStyle;
};

export default function Pressable({
  text,
  kind = 'primary',
  style,
  contentStyle,
  ...props
}: PressableProps) {
  const kindStyle =
    kind === 'primary' ? styles.buttonPrimary : styles.buttonSecondary;
  const textStyle =
    kind === 'primary' ? styles.textPrimary : styles.textSecondary;

  return (
    <RNPressable style={[styles.button, kindStyle, style]} {...props}>
      <Text style={[styles.text, textStyle, contentStyle]}>{text}</Text>
    </RNPressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: 'black',
  },
  buttonSecondary: {
    backgroundColor: 'lightgray',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  textPrimary: {
    color: 'white',
  },
  textSecondary: {
    color: 'black',
  },
});
