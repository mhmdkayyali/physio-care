import { useEffect, useState } from "react";
import sendRequest from "../../../../config/axios";

const useLogic = (navigation, route) => {
  const user = route.params.user;
  const [pin, setPin] = useState({
    latitude: 33.8912434,
    longitude: 35.5059952,
  });

  const [lastInfo, setLastInfo] = useState({});

  const signupButtonHandler = () => {
    sendRequest({
      method: "post",
      url: "auth/patient",
      data: lastInfo,
    })
      .then((res) => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setLastInfo({
      ...user,
      ...pin,
    });
  }, [pin]);
  return { signupButtonHandler, pin, setPin };
};

export default useLogic;
