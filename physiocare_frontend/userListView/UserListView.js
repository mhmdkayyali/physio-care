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

  useEffect(() => {
    getToken();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    const url =
      storageData?.user_type === "PATIENT"
        ? "http://192.168.43.32:8000/therapist"
        : "http://192.168.43.32:8000/patient";
    axios
      .get(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res) {
          setData(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  return (
    <View style={styles.appContainer}>
      <View style={styles.searchBarContainer}>
        <SearchingBar
          onChangeHandler={searchBarInputHandler}
          placeHolder={"Search bar"}
        />
      </View>
      <ScrollView>
        {data.map((item) => (
          <UserCard
            userType={item.user_type}
            key={item.id}
            userName={`${item.first_name} ${item.last_name}`}
            conditionSpecialty={
              item.user_type === "THERAPIST"
                ? item?.therapist_additional_informations?.specialty
                : item?.pt_additional_informations?.diagnosis
            }
            gender={item.gender}
            location={item.location}
            user={item}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default UserListView;
