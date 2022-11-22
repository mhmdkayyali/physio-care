import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "../drawer/Drawer";

import Login from "../../screens/login/Login";

import SignupOne from "../../screens/signup/signupOne/SignupOne";

import SignupTwoPatient from "../../screens/signup/patientSignup/signupTwoPatient/SignupTwoPatient";
import SignupThreePatient from "../../screens/signup/patientSignup/signupThreePatient/SignupThreePatient";
import SignupFourPatient from "../../screens/signup/patientSignup/signupFourPatient/SignupFourPatient";

import SignupTwoTherapist from "../../screens/signup/therapistSignup/signupTwoTherapist/SignupTwoTherapist";
import SignupThreeTherapist from "../../screens/signup/therapistSignup/signupThreeTherapist/SignupThreeTherapist";
import SignupFourTherapist from "../../screens/signup/therapistSignup/signupFourTherapist/SignupFourTherapist";

import UserDetails from "../../screens/userDetails/UserDetails";
import ScheduleTime from "../../screens/bookingSession/scheduleTime/ScheduleTime";
import ScheduleDay from "../../screens/bookingSession/scheduleDay/ScheduleDay";
import UserListView from "../../screens/userListView/UserListView";

const Stack = createNativeStackNavigator();

const NativeStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "#1A7C6B" },
          headerTitleAlign: "center",
          headerTintColor: "#FFFFFF",
        }}
      >
        <Stack.Screen name="Login" component={Login} ini />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="UserListView" component={UserListView} />
        <Stack.Screen name="SignupOne" component={SignupOne} />
        <Stack.Screen name="SignupTwoPatient" component={SignupTwoPatient} />
        <Stack.Screen
          name="SignupThreePatient"
          component={SignupThreePatient}
        />
        <Stack.Screen name="SignupFourPatient" component={SignupFourPatient} />
        <Stack.Screen
          name="SignupTwoTherapist"
          component={SignupTwoTherapist}
        />
        <Stack.Screen
          name="SignupThreeTherapist"
          component={SignupThreeTherapist}
        />
        <Stack.Screen
          name="SignupFourTherapist"
          component={SignupFourTherapist}
        />
        <Stack.Screen name="UserDetails" component={UserDetails} />
        <Stack.Screen name="ScheduleDay" component={ScheduleDay} />
        <Stack.Screen name="ScheduleTime" component={ScheduleTime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
