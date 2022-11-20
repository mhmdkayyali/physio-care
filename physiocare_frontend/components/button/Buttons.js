import { StyleSheet, View, Pressable, Text } from "react-native";

function Buttons(props) {
  function btnStyle(type) {
    if (type === "userTypeButton") return styles.userTypeButton;
    if (type === "selectedUserTypeButton") return styles.selectedUserTypeButton;
    if (type === "attendedButton") return styles.attendedButton;
    if (type === "cancelButton") return styles.cancelButton;
    if (type === "yesButton") return styles.yesButton;
    if (type === "noButton") return styles.noButton;
    if (type === "listViewButton") return styles.listViewButton;
    if (type === "filterButton") return styles.filterButton;
    if (type === "timeButton") return styles.timeButton;
    if (type === "pressedTimeButton") return styles.pressedTimeButton;
    if (type === "confirmTimeButton") return styles.confirmTimeButton;
    if (type === "availableDaysButton") return styles.availableDaysButton;
    if (type === "selectedAvailableDaysButton")
      return styles.selectedAvailableDaysButton;
    if (type === "saveButton") return styles.saveButton;
    if (type === "callButton") return styles.callButton;
    if (type === "confirmedButton") return styles.confirmedButton;
    return styles.button;
  }
  function textStyle(type) {
    if (type === "userTypeButtonText") return styles.userTypeButtonText;
    if (type === "selectedUserTypeButtonText")
      return styles.selectedUserTypeButtonText;
    if (type === "scheduleButtonText") return styles.scheduleButtonText;
    if (type === "yesButtonText") return styles.yesButtonText;
    if (type === "noButtonText") return styles.noButtonText;
    if (type === "listViewButtonText") return styles.listViewButtonText;
    if (type === "filterButtonText") return styles.filterButtonText;
    if (type === "timeButtonText") return styles.timeButtonText;
    if (type === "pressedtimeButtonText") return styles.pressedtimeButtonText;
    if (type === "confirmTimeButtonText") return styles.confirmTimeButtonText;
    if (type === "availableDaysButtonText")
      return styles.availableDaysButtonText;
    if (type === "selectedAvailableDaysButtonText")
      return styles.selectedAvailableDaysButtonText;
    return styles.buttonText;
  }
  return (
    <Pressable style={btnStyle(props.btnStyle)}>
      <View>
        <Text style={textStyle(props.textStyle)}></Text>
      </View>
    </Pressable>
  );
}

export default Buttons;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#35DB9F",
    width: "100%",
    height: 40,
    borderRadius: 15,
  },
  buttonText: {
    width: "100%",
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
  userTypeButton: {
    height: 120,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },
  userTypeButtonText: {
    fontSize: 20,
    color: "#383838",
  },
  selectedUserTypeButton: {
    height: 120,
    width: "100%",
    backgroundColor: "#35DB9F",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },
  selectedUserTypeButtonText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  attendedButton: {
    height: 40,
    width: "48%",
    borderRadius: 10,
    backgroundColor: "#35DB9F",
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    height: 40,
    width: "48%",
    borderRadius: 10,
    backgroundColor: "#EB5850",
    alignItems: "center",
    justifyContent: "center",
  },
  yesButton: {
    height: 40,
    width: 65,
    backgroundColor: "#EB5850",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    marginRight: 20,
  },
  noButton: {
    height: 40,
    width: 65,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    marginLeft: 20,
  },
  listViewButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#35DB9F",
    width: "100%",
    height: 40,
    borderRadius: 10,
  },
  filterButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 45,
    width: 110,
    backgroundColor: "#1A7C6B",
    margin: 5,
  },
  timeButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 40,
    borderRadius: 10,
    marginVertical: 5,
  },
  pressedTimeButton: {
    flexGrow: 1,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmTimeButton: {
    flexGrow: 1,
    marginLeft: 10,
    maxWidth: "48%",
    height: 40,
    backgroundColor: "#35DB9F",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  scheduleButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  yesButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  noButtonText: {
    color: "#383838",
    fontSize: 15,
    fontWeight: "bold",
  },
  listViewButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  filterButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  timeButtonText: {
    color: "#383838",
    fontSize: 15,
    fontWeight: "500",
  },
  pressedtimeButtonText: {
    color: "#383838",
    fontSize: 15,
    fontWeight: "500",
  },
  confirmTimeButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "500",
  },
  availableDaysButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 32,
    borderRadius: 10,
    marginTop: 3,
  },
  availableDaysButtonText: {
    width: "100%",
    color: "#383838",
    fontSize: 14,
    fontWeight: "regular",
    paddingLeft: 15,
  },
  selectedAvailableDaysButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#35DB9F",
    width: "100%",
    height: 32,
    borderRadius: 10,
    marginTop: 3,
  },
  selectedAvailableDaysButtonText: {
    width: "100%",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 15,
  },
  saveButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A7C6B",
    width: "100%",
    height: 40,
    borderRadius: 15,
  },
  callButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#35DB9F",
    width: 165,
    height: 40,
    borderRadius: 15,
  },
});
