import { View, StyleSheet, TouchableOpacity } from "react-native";
import * as React from "react";
import AppScreen from "../components/AppScreen";
import { Box, Center, Text, HStack, VStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Statistic from "../components/Chart";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../components/Header";

export default function App({ navigation }) {
  return (
    <AppScreen>
      <Box bg="#7879F1">
        <Header />

        <HStack mb={5} mx={5} mt={5} space={3} justifyContent="space-between">
          <VStack>
            <FontAwesome5 name="cart-plus" size={24} color="white" />
            <Text color="white">Orders</Text>
          </VStack>

          <VStack>
            <FontAwesome5 name="store" size={24} color="white" />
            <Text color="white">plaza</Text>
          </VStack>

          <VStack>
            <MaterialIcons name="date-range" size={24} color="white" />
            <Text color="white">Filter</Text>
          </VStack>
        </HStack>
      </Box>

      <Box bg="#e6e6e6">
        <HStack
          space={1}
          mx={2}
          mt={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <TouchableOpacity onPress={() => navigation.navigate("Product")}>
            <Center h="20" w="20" bg="white" rounded="md" shadow={3}>
              <VStack justifyContent="center" alignItems="center">
                <Text color="black">Total Buy</Text>
                <Text color="black">Today</Text>
                <Text bold color="black">
                  $50,000
                </Text>
              </VStack>
            </Center>
          </TouchableOpacity>
          <Center h="20" w="20" bg="white" rounded="md" shadow={3}>
            <VStack alignItems="center">
              <Text color="black">Total Buy</Text>
              <Text color="black">Today</Text>
              <Text bold color="black">
                $50,000
              </Text>
            </VStack>
          </Center>
          <Center h="20" w="20" bg="white" rounded="md" shadow={3}>
            <VStack alignItems="center">
              <Text color="black">Total Buy</Text>
              <Text color="black">Today</Text>
              <Text bold color="black">
                $50,000
              </Text>
            </VStack>
          </Center>
          <Center h="20" w="20" bg="white" rounded="md" shadow={3}>
            <VStack alignItems="center">
              <Text color="black">Total Buy</Text>
              <Text color="black">Today</Text>
              <Text bold color="black">
                $50,000
              </Text>
            </VStack>
          </Center>
        </HStack>

        <HStack>{/* <Statistic /> */}</HStack>
      </Box>
    </AppScreen>
  );
}

const styles = StyleSheet.create({});
