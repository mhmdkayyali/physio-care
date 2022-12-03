import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import sendRequest from "../../../../config/axios";

const useLogic = (navigation) => {
  const [data, setData] = useState();
  const [select, setSelect] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });

  const [enteredInfo, setEnteredInfo] = useState({
    start_time: "",
    end_time: "",
  });

  const storeData = async (value) => {
    await AsyncStorage.setItem("user", JSON.stringify(value));
    console.log(value);
  };
  const onPressHandler = (value, key) => {
    setSelect((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const handleInputChange = (value, key) => {
    setEnteredInfo((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const signupButtonHandler = () => {
    const data2 = {
      ...data,
      ...select,
      ...enteredInfo,
    };
    storeData(data2);
    sendRequest({
      method: "post",
      url: "auth/therapist",
      data: {
        ...data,
        ...select,
        ...enteredInfo,
      },
    })
      .then((res) => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setData(JSON.parse(res));
      })
      .catch((error) => console.log(error));
  }, []);
  return { select, onPressHandler, handleInputChange, signupButtonHandler };
};

export default useLogic;
