import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components";

const App = () => {
  const [state, setState] = useState(0);
  return (
    <MainView>
      <MainText>You clicked {state} times</MainText>
      <MainButton onPress={() => setState(state + 1)}>
        <ButtonText>Click Me</ButtonText>
      </MainButton>
      <MainButton
        onPress={() =>
          Alert.alert("Title", "Body", [
            {
              text: "Yes",
              onPress: () => {
                console.log("Yes");
              },
            },
            { text: "No" },
          ])
        }
      >
        <ButtonText>Alert</ButtonText>
      </MainButton>
      {state >= 2 ? (
        <MainImage
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200",
          }}
        ></MainImage>
      ) : (
        <MainText>Click 2 times to activate image</MainText>
      )}
    </MainView>
  );
};

export default App;

const MainView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const MainText = styled.Text`
  font-size: 20px;
  color: black;
  margin: 10px;
`;

const MainButton = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  padding: 8px;
  border-radius: 10px;
  background-color: #4caf50;
  margin: 10px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: white;
`;

const MainImage = styled.Image`
  margin: 10px;
`;
