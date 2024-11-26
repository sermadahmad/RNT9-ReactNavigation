import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "../styles.js";

export default HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home Screen</Text>
      <Button
        title="Go to Details Screen"
        onPress={() =>
          navigation.navigate("Details", { id: "1", name: "SERMAD" })
        }
      />
    </View>
  );
};
