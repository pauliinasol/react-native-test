import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { RouteProp } from "@react-navigation/core";
import { AppStackParamList } from "../App";

const Wrapper = styled.View`
  flex: 1;
  background-color: mistyrose;
  align-items: center;
  justify-content: center;
`;

// export const ProfileScreen = () => {
//   return (
//     <Wrapper>
//       <Text>Hello profile</Text>
//     </Wrapper>
//   );
// };

interface Props {
  route: RouteProp<AppStackParamList, "Profile">;
}

export const ProfileScreen = ({ route }: Props) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
