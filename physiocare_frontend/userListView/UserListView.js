import { useEffect, useState } from "react";
import axios from "axios";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import UserCard from "../../components/UserCard";
import SearchingBar from "../../components/SearchingBar";
import AsyncStorage from "@react-native-async-storage/async-storage";

function UserListView() {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  const [storageData, setStorageData] = useState();
  const [enteredSearchText, setEnteredSearchText] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setStorageData(JSON.parse(res));
      })
      .catch((error) => console.log(error));
  }, []);

  function searchBarInputHandler(enteredText) {
    setEnteredSearchText(enteredText);
  }

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.searchBarContainer}>
        <SearchingBar
          onChangeHandler={searchBarInputHandler}
          placeHolder={"Search bar"}
        />
      </View>
    </View>
  );
}
