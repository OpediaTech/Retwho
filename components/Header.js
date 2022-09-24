import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Center, HStack, Input, Text, VStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <HStack mx={5} mt={5} space={3} justifyContent="space-between">
      <VStack>
        <MaterialCommunityIcons name="line-scan" size={24} color="white" />
      </VStack>
      {/* <Center h="10"  bg="white" rounded="md" shadow={3}></Center> */}
      <Input w="190" bgColor="white" size="md" placeholder="Search products" />
      <TouchableOpacity onPress={() => navigation.navigate("Product")}>
        <VStack alignItems="center">
          <FontAwesome name="list-alt" size={24} color="white" />
          <Text color="white">Products</Text>
        </VStack>
      </TouchableOpacity>
    </HStack>
  );
};

export default Header;

const styles = StyleSheet.create({});
