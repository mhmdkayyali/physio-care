import { StyleSheet, View, Text } from "react-native";
import { useState, useEffect } from "react";
import Btn from "../../components/Btn";
import ProfilePicture from "../../components/ProfilePicture";
import PressedTime from "../../components/PressedTime";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import uuid from "react-native-uuid";

function SchedulingTime({ navigation, route }) {
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
    console.log(selectedTime);
  }, [selectedTime]);

  useEffect(() => {
    const createAppointment = async () => {
      if (canChoose === false) {
        const user = await AsyncStorage.getItem("user");
        const patient_id = JSON.parse(user).id;
        console.log(patient_id);

        const payload = {
          time: selectedTime,
          date_time: selectedDate,
          therapist_id: selectedUser.id,
          patient_id: patient_id,
          meeting_link: `http://192.168.43.32:3000/video?meetingId=${uuid.v4()}&name=${
            JSON.parse(user).first_name
          }`,
        };
        console.log(payload);

        axios
          .post("http://192.168.43.32:8000/patient", payload)
          .then((res) => {
            console.log(res.data);
            navigation.navigate("DrawerNavigator", {
              screen: "ScheduleDrawer",
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

  return (
    <View style={styles.appContainer}>
      <View style={styles.infoDateContainer}>
        <View style={styles.profilePictureContainer}>
          <ProfilePicture />
        </View>
        <View style={styles.nameSpecialtyContainer}>
          <Text style={styles.therapistNameText}>Mohammad Al Kayyali</Text>
          <Text style={styles.specialtyText}>Neuromusculoskeletal</Text>
        </View>
        <View>
          <Text style={styles.dayText}>{weekDays[currentDate]}</Text>
          <Text style={styles.dateText}>{selectedDate}</Text>
        </View>
      </View>
      <View style={styles.scheduleTimeBtnContainer}>
        <View style={styles.scheduleTimeContainer}>
          <Text style={styles.scheduleParagraph}>Schedule a session</Text>
          <Text style={styles.selectTimeParagraph}>select a time</Text>
        </View>
        <View style={styles.btnContainer}>
          <ScrollView>
            {availableSlots.map((slot, index) => (
              <PressedTime
                key={index}
                slot={slot}
                selected={selectedSlot === index}
                onPress={canChoose ? () => onTimeSlotPress(index) : null}
                unselect={canChoose ? () => setSelectedSlot() : null}
                canChoose={() => {
                  setCanChoose(false);
                }}
                selectedTime={setSelectedTime}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default SchedulingTime;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#EFEFEF",
  },
  profilePictureContainer: {
    margin: 20,
  },
  nameSpecialtyContainer: {
    flex: 0.7,
  },
  infoDateContainer: {
    flex: 0.9,
    width: "100%",
    alignItems: "center",
  },
});
