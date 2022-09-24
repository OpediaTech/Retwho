import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import HomeScreen from "../screens/Home";
import AboutScreen from "../screens/About";
import MainScreen from "../screens/Main";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LoginScreen from "../screens/LoginScreen";
import Products from "../screens/Products";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
        },
      }}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialCommunityIcons
                name="home"
                style={{ fontSize: 30, color: focused ? "#e32f45" : "#748c94" }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="login"
        component={LoginScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="plus"
              color={focused ? "#fff" : "#748c94"}
              size={50}
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                shadowColor: "green",
                shadowOffset: {
                  width: 15,
                  height: 15,
                },
                shadowOpacity: 0.5,
                shadowRadius: 3.5,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Products}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialCommunityIcons
                name="details"
                style={{ fontSize: 30, color: focused ? "#e32f45" : "#748c94" }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                About
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
