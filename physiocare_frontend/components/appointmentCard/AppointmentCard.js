import { StyleSheet, Text, View } from "react-native";
import Buttons from "../button/Buttons";
import { useNavigation } from "@react-navigation/native";

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

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 132,
    marginVertical: 7,
    paddingVertical: 18,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  cardInformation: {
    flexDirection: "row",
  },
  lineContainer: {
    width: "50%",
    paddingHorizontal: 10,
  },
  cardDetailsNames: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#383838",
  },
  cardDetails: {
    fontSize: 14,
    color: "#383838",
  },
  buttonContainer: {
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});