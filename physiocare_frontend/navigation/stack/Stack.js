import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "../drawer/Drawer";

import Login from "../../screens/login/Login";

import SignupOne from "../../screens/signup/signupOne/SignupOne";

import SignupTwoPatient from "../../screens/signup/patientSignup/signupTwoPatient/SignupTwoPatient";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
