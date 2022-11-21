import * as React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Buttons from "../../components/button/Buttons";

function HomeMap({ navigation }) {
  const [therapists, setTherapists] = useState([]);
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };
  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      setUser(JSON.parse(user));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.viewBtnSearchBarContainer}>
        <Buttons />
      </View>
    </View>
  );
}
