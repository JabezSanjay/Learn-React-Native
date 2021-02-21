import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/signup.png")}
      />
      <Text style={styles.mainText}>Sign Up</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Name"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width - 150,
  },
  mainText: {
    color: "#7a42f4",
    fontSize: 20,
  },
  input: {
    padding: 10,
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    width: Dimensions.get("window").width - 150,
    borderRadius: 99,
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
    width: Dimensions.get("window").width - 150,
    borderRadius: 100,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
  },
});
