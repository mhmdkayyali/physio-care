import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MapView, { Marker } from "react-native-maps";

const useLogic = (navigation) => {
  const [data, setData] = useState();
  const [pin, setPin] = useState({
    latitude: 33.8912434,
    longitude: 35.5059952,
  });

  const storeData = async (value) => {
    await AsyncStorage.setItem("user", JSON.stringify(value));
  };

  const nextButtonHandler = () => {
    const data2 = {
      ...data,
      ...pin,
    };
    storeData(data2);
    navigation.navigate("SignupFourTherapist");
  };

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((res) => {
        setData(JSON.parse(res));
      })
      .catch((error) => console.log(error));
  }, []);
  return { nextButtonHandler, pin, setPin };
};

export default useLogic;
