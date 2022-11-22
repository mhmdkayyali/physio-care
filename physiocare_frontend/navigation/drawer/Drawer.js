import * as React from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeMap from "../../screens/homeMap/HomeMap";
import Appointment from "../../screens/appointment/Appointment";
import Profile from "../../screens/profile/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        drawerActiveTintColor: "#35DB9F",
        headerStyle: { backgroundColor: "#1A7C6B" },
        headerTintColor: "#FFFFFF",
        drawerStyle: { backgroundColor: "#1A7C6B" },
        drawerInactiveBackgroundColor: "rgba(255, 255, 255, 0.25)",
        drawerActiveBackgroundColor: "#35DB9F",
        drawerActiveTintColor: "#FFFFFF",
        drawerInactiveTintColor: "#C9C9C9",
        swipeEnabled: true,
      }}
    >
      <Drawer.Screen name="HomeMap" component={HomeMap} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Appointment" component={Appointment} />
    </Drawer.Navigator>
  );
};
