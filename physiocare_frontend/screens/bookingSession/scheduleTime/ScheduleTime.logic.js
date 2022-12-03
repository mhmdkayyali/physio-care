import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import sendRequest from "../../../config/axios";

const useLogic = (navigation, route) => {
  const selectedDate = JSON.parse(route.params.date);
  const selectedUser = JSON.parse(route.params.user);
  const currentDate = new Date(selectedDate).getDay();

  const [selectedSlot, setSelectedSlot] = useState();
  const [canChoose, setCanChoose] = useState(true);
  const [selectedTime, setSelectedTime] = useState();

  const availableSlots = [];
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const createAppointment = async () => {
      if (canChoose === false) {
        const user = await AsyncStorage.getItem("user");
        const patient_id = JSON.parse(user).id;

        const payload = {
          time: selectedTime,
          date_time: selectedDate,
          therapist_id: selectedUser.id,
          patient_id: patient_id,
          meeting_link: `https://7741-91-197-46-156.eu.ngrok.io/video?meetingId=${uuid.v4()}&name=${
            JSON.parse(user).first_name
          }`,
        };
        sendRequest({
          method: "post",
          url: "patient",
          data: payload,
        })
          .then((res) => {
            console.log(res.data);
            navigation.navigate("DrawerNavigator", {
              screen: "Appointment",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    createAppointment();
  }, [canChoose]);

  for (
    let i = parseInt(selectedUser.therapist_additional_informations.start_time);
    i < parseInt(selectedUser.therapist_additional_informations.end_time);
    i++
  ) {
    availableSlots.push(`${i}:00`);
  }

  const onTimeSlotPress = (index) => {
    setSelectedSlot(index);
  };
  return {
    selectedDate,
    selectedUser,
    currentDate,
    selectedSlot,
    setSelectedSlot,
    canChoose,
    setCanChoose,
    selectedTime,
    setSelectedTime,
    availableSlots,
    weekDays,
    onTimeSlotPress,
  };
};

export default useLogic;
