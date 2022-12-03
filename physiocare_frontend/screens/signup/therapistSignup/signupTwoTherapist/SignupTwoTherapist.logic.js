import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useLogic = (navigation) => {
  const [data, setData] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState(true);
  const [enteredInfo, setEnteredInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
  });

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (value, key) => {
    setEnteredInfo((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const nextButtonHandler = () => {
    const data2 = {
      ...data,
      first_name: enteredInfo.first_name,
      last_name: enteredInfo.last_name,
      email: enteredInfo.email,
      password: enteredInfo.password,
      phone_number: enteredInfo.phone_number,
      gender: enteredInfo.gender,
      dob: enteredInfo.dob,
      specialty: enteredInfo.specialty,
      location: enteredInfo.location,
      rate: enteredInfo.rate,
    };
    storeData(data2);
    navigation.navigate("SignupThreeTherapist");
  };

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setData(JSON.parse(res));
      })
      .catch((error) => console.log(error));
  }, []);
  return {
    handleInputChange,
    nextButtonHandler,
    confirmedPassword,
    enteredInfo,
    setConfirmedPassword,
  };
};

export default useLogic;
