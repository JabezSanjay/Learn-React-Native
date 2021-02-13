import React, { useState } from "react";
import WelcomeScreen from "./app/pages/WelcomeScreen";
// import { Alert, Platform, StatusBar } from "react-native";
// import styled from "styled-components";
// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";

const App = () => {
  return (
    // const [state, setState] = useState(0);
    <WelcomeScreen />
    // <MainView>
    //   <MainText>You clicked {state} times</MainText>
    //   <MainButton onPress={() => setState(state + 1)}>
    //     <ButtonText>Click Me</ButtonText>
    //   </MainButton>
    //   <MainButton
    //     onPress={() =>
    //       Alert.alert("Title", "Body", [
    //         {
    //           text: "Yes",
    //           onPress: () => {
    //             console.log("Yes");
    //           },
    //         },
    //         {
    //           text: "No",
    //           onPress: () => {
    //             console.log("No");
    //           },
    //         },
    //       ])
    //     }
    //   >
    //     <ButtonText>Alert</ButtonText>
    //   </MainButton>
    //   {state >= 2 ? (
    //     <MainImage
    //       source={{
    //         width: 200,
    //         height: 200,
    //         uri: "https://picsum.photos/200",
    //       }}
    //     ></MainImage>
    //   ) : (
    //     <MainText>Click 2 times to activate image</MainText>
    //   )}
    // </MainView>
  );
};

export default App;

// const MainView = styled.SafeAreaView`
//   padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
//   flex: 1;
//   align-items: center;
//   justify-content: space-evenly;
//   background-color: dodgerblue;
// `;

// const MainText = styled.Text`
//   font-size: 20px;
//   color: black;
// `;

// const MainButton = styled.TouchableOpacity`
//   width: 120px;
//   height: 40px;
//   padding: 8px;
//   border-radius: 10px;
//   background-color: #4caf50;
// `;

// const ButtonText = styled.Text`
//   font-size: 16px;
//   text-align: center;
//   color: white;
// `;

// const MainImage = styled.Image``;
