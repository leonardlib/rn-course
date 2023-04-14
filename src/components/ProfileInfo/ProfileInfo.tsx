import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { QrCode } from 'phosphor-react-native';

export default function ProfileInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.mainInfo}>
        <Image
          source={require('../../../assets/profile.jpeg')}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.name}>Leonardo Lira</Text>
          <Text style={styles.status}>Ocupado</Text>
        </View>
      </View>
      <QrCode />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  mainInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
  },
  info: {
    marginLeft: 14,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: 'gray',
  },
});
