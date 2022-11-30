import * as React from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeMap from "../../screens/homeMap/HomeMap";
import Appointment from "../../screens/appointment/Appointment";
import Profile from "../../screens/profile/Profile";

import { Ionicons } from "@expo/vector-icons";
import CustomDrawer from "../../components/customDrawer/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: 160,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../assets/images/white-logo.png")}
                style={{
                  height: 150,
                  width: 150,
                  resizeMode: "contain",
                  marginTop: 60,
                }}
              />
            </View>
            <CustomDrawer {...props} />
          </View>
        );
      }}
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
      <Drawer.Screen
        name="HomeMap"
        component={HomeMap}
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name={"home"} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: "Profile",
          title: "Profile",
          drawerIcon: ({ color, size }) => (
            <Ionicons name={"person"} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Appointment"
        component={Appointment}
        options={{
          drawerLabel: "Appointments",
          title: "Appointments",
          drawerIcon: ({ color, size }) => (
            <Ionicons name={"calendar"} color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
