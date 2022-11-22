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
        headerTintColor: "#FFFFFF",
      }}
    ></Drawer.Navigator>
  );
};
