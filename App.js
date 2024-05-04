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
import BookingStep5Screen from "./screens/BookingStep5Screen";
import HomePageScreen from "./screens/HomepageScreen";
import ServiceListScreen from "./screens/ServiceListScreen";
import DoctorListScreen from "./screens/DoctorListScreen";
import BookingStep6Screen from "./screens/BookingStep6Screen";
import BookingConfirmScreen from "./screens/BookingConfirmScreen";
import ChatScreen from "./screens/ChatScreen";
import BookingDetailScreen from "./screens/BookingDetailScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BookingDetail1Screen from "./screens/BookingDetailScreen1";
import BookingDetail2Screen from "./screens/BookingDetailScreen2";
import BlogListScreen from "./screens/BlogListScreen";
import BlogDetailScreen from "./screens/BlogDetailScreen";
import HospitalListScreen from "./screens/HospitalListScreen";
import HospitalDetailSreen from "./screens/HospitalDetailScreen";
import PetListScreen from "./screens/PetListScreen";
import ProfileDetailScreen from "./screens/ProfileDetailScreen";
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
              name="BookingStep5Screen"
              component={BookingStep5Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingListScreen"
              component={BookingListScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePageScreen"
              component={HomePageScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ServiceListScreen"
              component={ServiceListScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoctorListScreen"
              component={DoctorListScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingStep6Screen"
              component={BookingStep6Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingConfirmScreen"
              component={BookingConfirmScreen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="ChatScreen"
              component={ChatScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingDetailScreen"
              component={BookingDetailScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingDetail1Screen"
              component={BookingDetail1Screen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="BookingDetail2Screen"
              component={BookingDetail2Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BlogListScreen"
              component={BlogListScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BlogDetailScreen"
              component={BlogDetailScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HospitalListScreen"
              component={HospitalListScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HospitalDetailSreen"
              component={HospitalDetailSreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PetListScreen"
              component={PetListScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileDetailScreen"
              component={ProfileDetailScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>

          
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
