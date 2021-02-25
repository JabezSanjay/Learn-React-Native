import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import COLORS from "../assets/colors";
import DIMENSIONS from "../assets/dimensions";

const SigninScreen = ({ navigation }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/signin.png")}
      />
      <Text style={styles.mainText}>Sign In</Text>

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor={COLORS.mediumGrey}
        autoCapitalize="none"
        onChangeText={(email) => setValues({ ...values, email })}
        value={values.email}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor={COLORS.mediumGrey}
        autoCapitalize="none"
        onChangeText={(password) => setValues({ ...values, password })}
        value={values.password}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <Text style={{ color: "#C2C2C1" }}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{ color: "#0A6DD6" }}> Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.whiteColor,
  },
  image: {
    height: DIMENSIONS.height / 4,
    width: DIMENSIONS.width - 100,
    marginVertical: 10,
  },
  mainText: {
    color: COLORS.mainBlueColor,
    fontSize: 24,
    fontWeight: "bold",
    width: DIMENSIONS.width - 100,
    marginVertical: 10,
    letterSpacing: 1,
  },
  input: {
    marginVertical: 10,
    height: 40,
    borderColor: COLORS.mediumGrey,
    borderBottomWidth: 1,
    width: DIMENSIONS.width - 100,
  },
  submitButton: {
    backgroundColor: COLORS.mainBlueColor,
    padding: 12.5,
    marginVertical: 20,
    height: 50,
    width: DIMENSIONS.width - 100,
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
    position: "absolute",
    bottom: 0,
    backgroundColor: COLORS.lightGrey,
    width: DIMENSIONS.width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 75,
  },
});
