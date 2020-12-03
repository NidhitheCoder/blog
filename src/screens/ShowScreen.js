import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);
  return (
    <View>
      <Text style={styles.titleStyle}>Title :</Text>
      <Text style={styles.textStyle}>{blogPost.title}</Text>
      <Text style={styles.titleStyle}>Content :</Text>
      <Text style={styles.textStyle}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={styles.headerIcon}
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  headerIcon: {
    marginRight: 10,
    color: "green"
  },
  textStyle:{
    width:250,
    alignSelf:"center",
    marginVertical:10,
    color:"green",
    fontSize:18,
    fontWeight:"bold"
  },
  titleStyle:{
    marginLeft:10,
    marginTop:10,

  }
});

export default ShowScreen;
