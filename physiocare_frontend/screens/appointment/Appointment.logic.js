import sendRequest from "../../config/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const useLogic = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState();
  const [cancelled, setCancelled] = useState();
  const [cancelledId, setCancelledId] = useState();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem("user");
      setUser(JSON.parse(user));
    };
    getUser();
  }, []);

  useEffect(() => {
    if (user != null) {
      getAppointments();
    }
  }, [user]);

  const getAppointments = async () => {
    sendRequest({
      method: "GET",
      url:
        user?.user_type === "PATIENT"
          ? `patient/appointment/${user.id}/PATIENT`
          : `patient/appointment/${user.id}/THERAPIST`,
    })
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cancelSessionBtnHandler = () => {
    setModalVisible(true);
  };
  return {
    modalVisible,
    user,
    setUser,
    cancelled,
    setCancelled,
    cancelledId,
    setCancelledId,
    appointments,
    cancelSessionBtnHandler,
    getAppointments,
  };
};

export default useLogic;
