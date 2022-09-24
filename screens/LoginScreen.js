import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { Button, Center } from "native-base";
import AppScreen from "../components/AppScreen";

const LoginScreen = ({ setIsLogin }) => {
  const [textInputValue, setTextInputValue] = React.useState("");
  return (
    // <View style={styles.mainB}>
    <ImageBackground
      source={require("../assets/Images/onboarding.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <AppScreen>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.container}>
            <Center marginTop={150}>
              <Image
                source={require("../assets/Images/logo.png")}
                alt="Retwho"
                size="xl"
              />
            </Center>

            <View style={styles.container_Input}>
              <TextInput
                style={[
                  {
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    backgroundColor: "white",
                    // placeholderTextColor: "gray",
                  },
                  styles.input,
                ]}
                onChangeText={(text) => setTextInputValue(text)}
                value={textInputValue}
                placeholder="Email/ phone number"
              />
              <TextInput
                style={[
                  {
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginTop: 16,
                    backgroundColor: "white",
                    // placeholderTextColor: "gray",
                  },
                  styles.input,
                ]}
                onChangeText={(text) => setTextInputValue(text)}
                value={textInputValue}
                placeholder="Password"
              />

              <TouchableOpacity onPress={() => navigation.navigate("MainHome")}>
                <Button
                  onPress={() => setIsLogin(true)}
                  style={[styles.primary_btn]}
                >
                  Sign in
                </Button>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </AppScreen>
      {/* </View> */}
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainB: {
    backgroundColor: "#F9CCD4",
    height: "100%",
  },
  container: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 100,
  },
  main_title: {
    marginTop: 20,
  },
  main_titleSecondery: {
    marginTop: 60,
  },
  title_margin_Secondery: {
    marginTop: 16,
  },
  main_Font: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  main_Font_secondary: {
    fontSize: 14,
    fontWeight: "400",
    color: "#9D9D9D",
  },
  main_Font_align: { textAlign: "center" },
  main_Font_Signup: { textAlign: "center" },
  container_Input: {
    marginTop: 30,
  },

  input: {
    borderWidth: 0,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 14,

    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 10,
  },
  primary_btn: {
    backgroundColor: "#7879F1",
    borderRadius: 20,
    marginTop: 48,
  },
  main_Font_signup: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff0000",
  },
  signContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  main_Font_secondary1: {
    color: "#000",
    marginRight: 10,
  },
});
