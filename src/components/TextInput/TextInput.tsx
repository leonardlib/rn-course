import React from 'react';
import {
  View,
  Text,
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
  StyleSheet,
} from 'react-native';

type TextInputProps = RNTextInputProps & {
  label: string;
  error?: string;
};

export default function TextInput({ label, error, ...props }: TextInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        style={styles.textInput}
        selectionColor="black"
        cursorColor="black"
        {...props}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
  },
  textInput: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 10,
    padding: 5,
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginTop: 4,
  },
});
