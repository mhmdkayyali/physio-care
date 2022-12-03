import { useState, useEffect } from "react";
import sendRequest from "../../config/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useLogic = (navigation) => {
  const [token, setToken] = useState();
  const [data, setData] = useState();
  const [enteredInfo, setEnteredInfo] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (token) {
      navigation.navigate("DrawerNavigator", {
        screen: "HomeMap",
      });
    }
  }, []);

  useEffect(() => {
    getToken();
  }, []);

  const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };

  const storeUser = async (user) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setData(user);
    } catch (error) {
      console.log(error);
    }
  };

  const getToken = async (token) => {
    try {
      const token = await AsyncStorage.getItem("token");
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (value, key) => {
    setEnteredInfo((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const loginButtonHandler = () => {
    sendRequest({
      method: "post",
      url: "auth/login",
      data: {
        email: enteredInfo.email,
        password: enteredInfo.password,
      },
    })
      .then(async (res) => {
        await storeToken(res.data.token);
        await storeUser(res.data.user);
        console.log(res.data);
        if (res.data.user.user_type === "PATIENT") {
          navigation.navigate("DrawerNavigator", {
            screen: "HomeMap",
          });
        } else if (res.data.user.user_type === "THERAPIST") {
          navigation.navigate("DrawerNavigator", {
            screen: "HomeMap",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return {
    handleInputChange,
    loginButtonHandler,
  };
};

export default useLogic;
