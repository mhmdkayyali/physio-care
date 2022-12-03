import { View, ScrollView, Modal, Text } from "react-native";
import AppointmentCard from "../../components/appointmentCard/AppointmentCard";
import Buttons from "../../components/button/Buttons";
import axios from "axios";
import styles from "./Appointment.styles";
import useLogic from "./Appointment.logic";

const Appointment = () => {
  const {
    modalVisible,
    setModalVisible,
    user,
    cancelled,
    setCancelled,
    cancelledId,
    setCancelledId,
    appointments,
    cancelSessionBtnHandler,
    getAppointments,
  } = useLogic();

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
