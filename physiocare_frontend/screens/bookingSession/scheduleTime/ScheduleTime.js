import { StyleSheet, View, Text } from "react-native";
import { useState, useEffect } from "react";
import ProfilePicture from "../../../components/profilePicture/ProfilePicture";
import PressedTimeButton from "../../../components/pressedTimeButton/PressedTimeButton";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import uuid from "react-native-uuid";
import baseUrl from "../../../baseUrl/BaseUrl";

const ScheduleTime = ({ navigation, route }) => {
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

        axios
          .post(`${baseUrl}patient`, payload)
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

  return (
    <View style={styles.appContainer}>
      <View style={styles.infoDateContainer}>
        <View style={styles.profilePictureContainer}>
          <ProfilePicture
            image={`${baseUrl}${selectedUser?.therapist_additional_informations?.profile_picture}`}
          />
        </View>
        <View style={styles.nameSpecialtyContainer}>
          <Text style={styles.therapistNameText}>
            {selectedUser.first_name + " " + selectedUser.last_name}
          </Text>
          <Text style={styles.specialtyText}>
            {selectedUser.therapist_additional_informations.specialty}
          </Text>
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
              <PressedTimeButton
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
};

export default ScheduleTime;

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
  scheduleTimeBtnContainer: {
    flex: 1,
    width: "100%",
  },
  scheduleTimeContainer: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
  },
  btnContainer: {
    width: "100%",
    height: "80%",
  },
  therapistNameText: {
    fontSize: 25,
    color: "#383838",
    fontWeight: "bold",
  },
  specialtyText: {
    fontSize: 15,
    color: "#383838",
    textAlign: "center",
  },
  dayText: {
    textAlign: "center",
    fontSize: 20,
    color: "#383838",
    fontWeight: "500",
  },
  dateText: {
    textAlign: "center",
    fontSize: 14,
    color: "#383838",
  },
  scheduleParagraph: {
    fontSize: 15,
    color: "#383838",
    marginLeft: 10,
    marginRight: 20,
    fontWeight: "500",
  },
  selectTimeParagraph: {
    fontSize: 12,
    color: "#A1A1A1",
  },
});
