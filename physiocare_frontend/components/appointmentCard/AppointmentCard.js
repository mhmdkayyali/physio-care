import { Text, View } from "react-native";
import Buttons from "../button/Buttons";
import { useNavigation } from "@react-navigation/native";
import styles from "./AppointmentCard.styles";

function AppointmentCard(props) {
  const navigate = useNavigation();
  return (
    <View
      style={props.isCancelled ? styles.cancelledCard : styles.cardContainer}
    >
      <View style={styles.cardInformation}>
        <View style={styles.lineContainer}>
          <Text style={styles.cardDetailsNames}>{props.userName}</Text>
          <Text style={styles.cardDetails}>{props.conditionSpecialty}</Text>
        </View>
        <View style={styles.lineContainer}>
          <Text style={styles.cardDetails}>{props.date}</Text>
          <Text style={styles.cardDetails}>{props.time}</Text>
        </View>
      </View>
      {props.isCancelled != null ? (
        <View style={styles.cancelledContainer}>
          <Text style={styles.cancelledText}>Cancelled</Text>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Buttons
            btnStyle={"attendedButton"}
            textStyle={"scheduleBtnText"}
            btnText={"ATTEND"}
            onPress={() => {
              navigate.navigate("VideoCall", {
                meetingId: props.meeting,
                name: props.meetingName,
              });
            }}
          />
          <Buttons
            btnStyle={"cancelButton"}
            textStyle={"scheduleBtnText"}
            btnText={"CANCEL"}
            onPress={() => {
              props.showModal();
              props.cancel(props.meetingName);
              props.cancelId(props.id);
            }}
          />
        </View>
      )}
    </View>
  );
}

export default AppointmentCard;
