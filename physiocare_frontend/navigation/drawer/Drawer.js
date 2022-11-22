import * as React from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
      }}
    ></Drawer.Navigator>
  );
};
