import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function SettingsItem({ title, subtitle, icon }) {
  return (
    <View style={styles.container}>
      {icon}
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
  },
  info: {
    marginLeft: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 12,
    color: 'gray',
  },
});
