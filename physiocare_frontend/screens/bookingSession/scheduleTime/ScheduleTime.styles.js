import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#EFEFEF",
  },
  profilePictureContainer: {
    margin: 20,
  },
  nameSpecialtyContainer: {
    flex: 0.7,
  },
  infoDateContainer: {
    flex: 0.9,
    width: "100%",
    alignItems: "center",
  },
  scheduleTimeBtnContainer: {
    flex: 1,
    width: "100%",
  },
  scheduleTimeContainer: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
  },
  btnContainer: {
    width: "100%",
    height: "80%",
  },
  therapistNameText: {
    fontSize: 25,
    color: "#383838",
    fontWeight: "bold",
  },
  specialtyText: {
    fontSize: 15,
    color: "#383838",
    textAlign: "center",
  },
  dayText: {
    textAlign: "center",
    fontSize: 20,
    color: "#383838",
    fontWeight: "500",
  },
  dateText: {
    textAlign: "center",
    fontSize: 14,
    color: "#383838",
  },
  scheduleParagraph: {
    fontSize: 15,
    color: "#383838",
    marginLeft: 10,
    marginRight: 20,
    fontWeight: "500",
  },
  selectTimeParagraph: {
    fontSize: 12,
    color: "#A1A1A1",
  },
});

export default styles;
