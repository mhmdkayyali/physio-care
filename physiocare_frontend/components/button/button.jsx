import { StyleSheet, View, Pressable, Text } from "react-native";

function Buttons(props) {
  function btnStyle(type) {
    if (type === "userTypeButton") return styles.userTypeButton;
    if (type === "selectedUserTypeButton") return styles.selectedUserTypeButton;
    return styles.button;
  }
  function textStyle(type) {
    if (type === "userTypeButtonText") return styles.userTypeButtonText;
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
});
