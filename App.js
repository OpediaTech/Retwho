import * as React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/Home";
import AboutScreen from "./screens/About";
import { DrawerContent } from "./components/DrawerContent";
import LogoTitle from "./components/LogoTitle";
import Tab from "./components/tab";
import { NativeBaseProvider } from "native-base";
import LoginScreen from "./screens/LoginScreen";

const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//         drawerContent={props => <DrawerContent {...props} />} >
//         <Drawer.Screen name="Home" component={HomeScreen}

//         />
//         <Drawer.Screen name="About" component={AboutScreen} options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {isLogin ? <Tab /> : <LoginScreen setIsLogin={setIsLogin} />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
