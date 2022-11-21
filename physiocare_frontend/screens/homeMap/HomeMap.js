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

  useEffect(() => {
    getToken();
    getUser();
  }, []);

  useEffect(() => {
    axios
      .get("http://192.168.43.32:8000/therapist", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTherapists(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  const listViewBtnHandler = () => {
    navigation.navigate("ListView");
  };

  if (!user || !therapists) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.viewBtnSearchBarContainer}>
        <Buttons />
      </View>
    </View>
  );
}

export default HomeMap;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "#EFEFEF",
  },
  viewBtnSearchBarContainer: {
    zIndex: 1,
    width: "100%",
    height: 90,
    justifyContent: "space-between",
  },
  filterByTextBtnsContainer: {
    flexDirection: "row",
    marginBottom: 60,
    zIndex: 1,
  },
  filterParagraphContainer: {
    height: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: "rgba(131, 131, 131, 0.3)",
    marginTop: 5,
  },
  filterParagraph: {
    fontSize: 13,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 7,
    color: "#383838",
  },
});
