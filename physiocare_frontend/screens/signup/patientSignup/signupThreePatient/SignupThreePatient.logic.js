import { useState } from "react";

const useLogic = (navigation, route) => {
  const user = route.params.user;
  const [enteredInfo, setEnteredInfo] = useState({
    gender: "",
    dob: "",
    diagnosis: "",
    case_date: "",
    treating_doctor: "",
  });

  const handleInputChange = (value, key) => {
    setEnteredInfo((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const nextButtonHandler = () => {
    navigation.navigate("SignupFourPatient", {
      user: {
        ...user,
        gender: enteredInfo.gender,
        dob: enteredInfo.dob,
        diagnosis: enteredInfo.diagnosis,
        case_date: enteredInfo.case_date,
        treating_doctor: enteredInfo.treating_doctor,
      },
    });
  };
  return { handleInputChange, nextButtonHandler };
};

export default useLogic;
