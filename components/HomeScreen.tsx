import React from "react";
import styled from "styled-components/native";
import { Text, View, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { AppStackParamList } from "../App";

const Wrapper = styled.View`
  flex: 1;
  background-color: silver;
  align-items: center;
  justify-content: center;
`;

// export const HomeScreen = () => {
//   return (
//     <Wrapper>
//       <Text>Hello home</Text>
//     </Wrapper>
//   );
// };

interface Props {
  navigation: NavigationProp<AppStackParamList, "Home">;
}

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <Wrapper>
      <Button
        title="Go to Jane's profile"
        onPress={() => {
          navigation.navigate("Profile", {
            name: "Jane",
            email: "jave@test.com"
          });
          // navigation.navigate("Profile", { name: "Jane" })
        }}
      />
    </Wrapper>
  );
};
