import React from "react";
import styled from "styled-components";

const WelcomeScreen = () => {
  return (
    <WelcomeBackground source={require("../assets/background.jpg")}>
      <WelcomeLogoView>
        <WelcomeLogo source={require("../assets/logo-red.png")} />
        <WelcomeText>Hello</WelcomeText>
      </WelcomeLogoView>
      <WelcomeSignup
        onPress={() => console.log("Signup Pressed")}
      ></WelcomeSignup>
      <WelcomeSignin
        onPress={() => console.log("Signin Pressed")}
      ></WelcomeSignin>
    </WelcomeBackground>
  );
};

export default WelcomeScreen;

const WelcomeBackground = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
const WelcomeLogoView = styled.SafeAreaView`
  position: absolute;
  top: 70px;
  align-items: center;
`;

const WelcomeLogo = styled.Image`
  width: 100px;
  height: 100px;
`;

const WelcomeText = styled.Text`
  font-size: 20px;
`;

const WelcomeSignin = styled.TouchableOpacity`
  background-color: #fc5c65;
  height: 70px;
  width: 100%;
`;

const WelcomeSignup = styled.TouchableOpacity`
  background-color: #4ecdc4;
  height: 70px;
  width: 100%;
`;
