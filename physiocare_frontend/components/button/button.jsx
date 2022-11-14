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
    return styles.button;
  }
  function textStyle(type) {
    if (type === "userTypeButtonText") return styles.userTypeButtonText;
    if (type === "selectedUserTypeButtonText")
      return styles.selectedUserTypeButtonText;

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
});
