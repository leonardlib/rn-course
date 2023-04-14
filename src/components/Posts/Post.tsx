import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CaretRight } from 'phosphor-react-native';

import { PostType } from '../../hooks/usePosts/usePosts';

type PostProps = PostType & {
  onPress: () => void;
};

export default function Post({ title, userId, onPress }: PostProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.userId}>User ID: {userId}</Text>
      </View>
      <CaretRight />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  userId: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
});
