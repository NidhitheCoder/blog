import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import {Context} from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <Text>Index screen</Text>
      <Button title="Add Blog Post" onPress={addBlogPost} />
      <FlatList
        keyExtractor={blogPost => blogPost.title}
        data={state}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
