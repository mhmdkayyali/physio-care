import { useEffect, useState } from "react";
import axios from "axios";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import UserCard from "../../components/UserCard";
import SearchingBar from "../../components/SearchingBar";
import AsyncStorage from "@react-native-async-storage/async-storage";

function UserListView() {
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
