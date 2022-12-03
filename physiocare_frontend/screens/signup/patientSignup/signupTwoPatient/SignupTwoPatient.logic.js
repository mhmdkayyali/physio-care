import { useState } from "react";

const useLogic = (navigation, route) => {
  const user = route.params;
  const [enteredInfo, setEnteredInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    location: "",
  });

  const handleInputChange = (value, key) => {
    setEnteredInfo((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const nextButtonHandler = () => {
    navigation.navigate("SignupThreePatient", {
      user: {
        ...user,
        first_name: enteredInfo.first_name,
        last_name: enteredInfo.last_name,
        email: enteredInfo.email,
        password: enteredInfo.password,
        phone_number: enteredInfo.phone_number,
        location: enteredInfo.location,
      },
    });
  };
  return { handleInputChange, nextButtonHandler };
};

export default useLogic;
