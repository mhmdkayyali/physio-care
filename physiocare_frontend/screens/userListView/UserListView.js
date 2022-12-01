import { useEffect, useState } from "react";
import axios from "axios";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import UserCard from "../../components/userCard/UserCard";
import SearchingBar from "../../components/searchBar/SearchBar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserListView = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState("");
  const [storageData, setStorageData] = useState();
  const [enteredSearchText, setEnteredSearchText] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setStorageData(JSON.parse(res));
      })
      .catch((error) => console.log(error));
  }, []);

  const searchBarInputHandler = (enteredText) => {
    setEnteredSearchText(enteredText);
  };

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const filteredData = data.filter((item) => {
      return item.first_name
        .toLowerCase()
        .includes(enteredSearchText.toLowerCase());
    });
    setFilteredData(filteredData);
  }, [enteredSearchText]);

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    const url =
      storageData?.user_type === "PATIENT"
        ? `${process.env.BASE_URL}therapist`
        : `${process.env.BASE_URL}patient`;
    axios
      .get(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res) {
          setData(res.data);
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [storageData]);

  return (
    <View style={styles.appContainer}>
      <View style={styles.searchBarContainer}>
        <SearchingBar
          onChangeHandler={searchBarInputHandler}
          placeHolder={"Search bar"}
        />
      </View>
      <ScrollView>
        {filteredData.length === 0
          ? data.map((item) => (
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
                image={item?.therapist_additional_informations?.profile_picture}
              />
            ))
          : filteredData.map((item) => (
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
                image={item?.therapist_additional_informations?.profile_picture}
              />
            ))}
      </ScrollView>
    </View>
  );
};

export default UserListView;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchBarContainer: {
    marginBottom: 5,
    marginTop: 10,
  },
});
