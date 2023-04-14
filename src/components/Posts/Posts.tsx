import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Post from './Post';
import usePosts from '../../hooks/usePosts/usePosts';
import { PostType, RootStackParamList } from '../../../types';

type PostsProps = NativeStackScreenProps<RootStackParamList, 'Posts'>;

export default function Posts({ navigation }: PostsProps) {
  const { posts, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostPressed = (post: PostType) => {
    navigation.navigate('PostDetail', { post });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Post {...item} onPress={() => handlePostPressed(item)} />
        )}
        keyExtractor={(post) => `${post.userId}-${post.title}`}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
