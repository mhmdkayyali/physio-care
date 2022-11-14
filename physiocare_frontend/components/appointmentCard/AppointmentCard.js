import { StyleSheet, Text, View } from "react-native";
import Buttons from "../button/Buttons";

function AppointmentCard(props) {
  return (
    <View style={styles.cardContainer}>
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
      <View style={styles.buttonContainer}>
        <Buttons
          btnStyle={"attendedBtn"}
          textStyle={"scheduleBtnText"}
          btnText={"ATTENDED"}
        />
        <Buttons
          btnStyle={"cancelBtn"}
          textStyle={"scheduleBtnText"}
          btnText={"CANCEL"}
          onPress={props.showModal}
        />
      </View>
    </View>
  );
}

export default AppointmentCard;
