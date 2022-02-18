import React from "react";
import { Text, StyleSheet, View } from "react-native";

const UserProfile = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>User Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default UserProfile;
