import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import sendRequest from "../../config/axios";

const useLogic = (navigation, route) => {
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
    sendRequest({
      method: "GET",
      url: storageData?.user_type === "PATIENT" ? "therapist" : "patient",
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
  return { searchBarInputHandler, filteredData, data };
};

export default useLogic;
