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

  for (
    let i = parseInt(selectedUser.therapist_additional_informations.start_time);
    i < parseInt(selectedUser.therapist_additional_informations.end_time);
    i++
  ) {
    availableSlots.push(`${i}:00`);
  }

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
      </View>
    </View>
  );
}
