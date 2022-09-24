import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import Header from "../components/Header";
import { Box } from "native-base";

const Products = () => {
  return (
    <AppScreen>
      <Text>Products</Text>
      <Box pb={5} bg="#7879F1">
        <Header />
      </Box>
    </AppScreen>
  );
};

export default Products;

const styles = StyleSheet.create({});
