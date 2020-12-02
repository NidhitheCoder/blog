import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, TextInput,Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [content, SetContent] = useState("");

  return (
    <View>
      <Text style={styles.labelStyle}>Enter Title:</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChange={text => setTitle(text)}
      />
      <Text style={styles.labelStyle}>Enter Content:</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChange={text => SetContent(text)}
      />
      <Button title="Add blog post"/>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom:15,
    padding:5,
    margin:5
  },
  labelStyle: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft:5
  }
});

export default CreateScreen;
