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
        placeholderTextColor="#CFCFD0"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor="#CFCFD0"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="#CFCFD0"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Create Account</Text>
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <Text style={styles.subText}>Already have an account?</Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width - 100,
    marginVertical: 10,
  },
  mainText: {
    color: "#0A6DD6",
    fontSize: 24,
    fontWeight: "bold",
    width: Dimensions.get("window").width - 100,
    marginVertical: 10,
    letterSpacing: 1,
  },
  input: {
    marginVertical: 10,
    height: 40,
    borderColor: "#BBBBBB",
    borderBottomWidth: 1,
    width: Dimensions.get("window").width - 100,
  },
  submitButton: {
    backgroundColor: "#0A6DD6",
    padding: 12.5,
    marginVertical: 20,
    height: 50,
    width: Dimensions.get("window").width - 100,
    borderRadius: 100,
  },
  submitButtonText: {
    color: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  subContainer: {
    backgroundColor: "#BBBBBB",
    height: 75,
    width: Dimensions.get("window").width,
    position: "absolute",
    bottom: 0,
  },
});
