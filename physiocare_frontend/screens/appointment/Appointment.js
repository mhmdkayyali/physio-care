import { View, StyleSheet, ScrollView, Modal, Text } from "react-native";
import { useEffect, useState } from "react";
import AppointmentCard from "../../components/appointmentCard/AppointmentCard";
import Buttons from "../../components/button/Buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import sendRequest from "../../config/axios";

const Appointment = () => {
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

  return (
    <View style={styles.appContainer}>
      <Modal visible={modalVisible} animationType={"fade"} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.warningMessage}>
              Are you sure you want to cancel the session with {cancelled}
            </Text>
            <View style={styles.btnContainer}>
              <Buttons
                btnStyle={"noButton"}
                textStyle={"noButtonText"}
                btnText={"NO"}
                onPress={() => setModalVisible(false)}
              />
              <Buttons
                btnStyle={"yesButton"}
                textStyle={"yesButtonText"}
                btnText={"YES"}
                onPress={() => {
                  axios
                    .put(`${process.env.BASE_URL}patient/cancel`, {
                      id: cancelledId,
                    })
                    .then((res) => {
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
            <AppointmentCard
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
            <AppointmentCard
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
};

export default Appointment;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 15,
  },
  modal: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(56,56,56,0.6)",
  },
  modalContainer: {
    height: 160,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
  btnContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  searchBarContainer: {
    marginBottom: 5,
  },
});
