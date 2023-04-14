import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../types';

type PostDetailProps = NativeStackScreenProps<RootStackParamList, 'PostDetail'>;

export default function PostDetail({ route }: PostDetailProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.userId}>User ID: {route.params.post.userId}</Text>
        <Text style={styles.title}>{route.params.post.title}</Text>
        <Text style={styles.body}>{route.params.post.body}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  userId: {
    color: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textTransform: 'capitalize',
    marginTop: 8,
  },
  body: {
    marginTop: 26,
    textAlign: 'justify',
  },
});
