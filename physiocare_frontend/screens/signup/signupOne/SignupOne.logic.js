import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useLogic = (navigation) => {
  const [userType, setUserType] = useState();
  const storeData = async (value) => {
    try {
      if (value) {
        await AsyncStorage.setItem(
          "user",
          JSON.stringify({ user_type: value })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userTypeHandler = () => {
    userType === "PATIENT"
      ? navigation.navigate("SignupTwoPatient", { user_type: userType })
      : navigation.navigate("SignupTwoTherapist", { user_type: userType });
  };

  useEffect(() => {
    if (userType) {
      storeData(userType);
    }
  }, [userType]);
  return { storeData, userType, setUserType, userTypeHandler };
};

export default useLogic;
