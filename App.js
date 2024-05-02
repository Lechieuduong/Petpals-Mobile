const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import StartScreen from "./screens/StartScreen";
import LoginScreen from "./screens/LoginScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./screens/RegisterScreen";
import ForgotPassScreen from "./screens/ForgotPassScreen";
import BookingStep1Screen from "./screens/BookingStep1Screen";
import BookingStep2Screen from "./screens/BookingStep2Screen";
import BookingStep3Screen from "./screens/BookingStep3Screen";
import BookingStep4Screen from "./screens/BookingStep4Screen";
import BookingListScreen from "./screens/BookingListScreen";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="StartScreen"
              component={StartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassScreen"
              component={ForgotPassScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingStep1Screen"
              component={BookingStep1Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingStep2Screen"
              component={BookingStep2Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingStep3Screen"
              component={BookingStep3Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingStep4Screen"
              component={BookingStep4Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingListScreen"
              component={BookingListScreen}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="HomepageScreen"
              component={HomePageScreen}
              options={{ headerShown: false }}
            /> */}
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
