import * as React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Buttons from "../../components/button/Buttons";

function HomeMap({ navigation }) {
  return (
    <View style={styles.appContainer}>
      <View style={styles.viewBtnSearchBarContainer}>
        <Buttons />
      </View>
    </View>
  );
}
