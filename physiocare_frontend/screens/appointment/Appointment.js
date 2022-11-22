import { View, StyleSheet, ScrollView, Modal, Text } from "react-native";
import { useEffect, useState } from "react";
import ScheduleCard from "../components/ScheduleCard";
import SearchingBar from "../components/SearchingBar";
import Btn from "../components/Btn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

function Schedule() {
  const [modalVisible, setModalVisible] = useState(false);
  const [enteredSearchText, setEnteredSearchText] = useState("");
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

  const getAppointments = async () => {
    await axios
      .get(
        user?.user_type === "PATIENT"
          ? `http://192.168.43.32:8000/patient/appointment/${user.id}/PATIENT`
          : `http://192.168.43.32:8000/patient/appointment/${user.id}/THERAPIST`
      )
      .then((res) => {
        console.log(res.data);
        setAppointments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(cancelledId);
  }, [cancelledId]);

  useEffect(() => {
    if (user != null) {
      getAppointments();
    }
  }, [user]);

  function cancelSessionBtnHandler() {
    setModalVisible(true);
  }

  function searchBarInputHandler(enteredText) {
    setEnteredSearchText(enteredText);
  }

  return (
    <View style={styles.appContainer}>
      <Modal visible={modalVisible} animationType={"fade"} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.warningMessage}>
              Are you sure you want to cancel the session with {cancelled}
            </Text>
            <View style={styles.btnContainer}>
              <Btn
                btnStyle={"noBtn"}
                textStyle={"noBtnText"}
                btnText={"NO"}
                onPress={() => setModalVisible(false)}
              />
              <Btn
                btnStyle={"yesBtn"}
                textStyle={"yesBtnText"}
                btnText={"YES"}
                onPress={() => {
                  axios
                    .put(`http://192.168.43.32:8000/patient/cancel`, {
                      id: cancelledId,
                    })
                    .then((res) => {
                      console.log(res.data);
                      getAppointments();
                    })
                    .catch((err) => {
                      console.log(err);
                    });

                  setModalVisible(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView>
        {appointments.map((appointment) => {
          return user.user_type === "THERAPIST" ? (
            <ScheduleCard
              isCancelled={appointment.canceled_at}
              key={appointment.id}
              id={appointment.id}
              userName={`${appointment.patient.first_name} ${appointment.patient.last_name}`}
              date={appointment.date_time.split("T")[0]}
              conditionSpecialty={
                appointment.patient.pt_additional_informations.diagnosis
              }
              time={appointment.time}
              showModal={cancelSessionBtnHandler}
              cancel={setCancelled}
              cancelId={setCancelledId}
              meeting={appointment?.meeting_links?.meeting_link}
              meetingName={appointment?.patient?.first_name}
            />
          ) : (
            <ScheduleCard
              isCancelled={appointment.canceled_at}
              key={appointment.id}
              id={appointment.id}
              userName={`${appointment.therapist.first_name} ${appointment.therapist.last_name}`}
              date={appointment.date_time.split("T")[0]}
              conditionSpecialty={
                appointment.therapist.therapist_additional_informations
                  .specialty
              }
              time={appointment.time}
              showModal={cancelSessionBtnHandler}
              cancel={setCancelled}
              cancelId={setCancelledId}
              meetingName={appointment?.therapist?.first_name}
              meeting={appointment?.meeting_links?.meeting_link}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
export default Schedule;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 15,
  },
});
