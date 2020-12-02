import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

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
          return (
            <View style={styles.rowStyle}>
              <Text style={styles.titleStyle}>{item.title}</Text>
              <Feather style={styles.iconStyle} name="trash" />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  titleStyle: {
    fontSize: 18
  },
  iconStyle: {
    fontSize: 24
  }
});

export default IndexScreen;
