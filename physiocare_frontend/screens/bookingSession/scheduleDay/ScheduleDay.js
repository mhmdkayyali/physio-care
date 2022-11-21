import { StyleSheet, View, Text } from "react-native";
import Buttons from "../../components/Buttons";
import ProfilePicture from "../../components/ProfilePicture";
import { Calendar } from "react-native-calendars";

function SchedulingDay({ navigation, route }) {
  const selectedUser = JSON.parse(route.params.user);
  return (
    <View style={styles.appContainer}>
      <View style={styles.infoDateContainer}>
        <View style={styles.profilePictureContainer}>
          <ProfilePicture />
        </View>
        <View style={styles.nameSpecialtyContainer}>
          <Text style={styles.therapistNameText}>Mohammad Al Kayyali</Text>
          <Text style={styles.specialtyText}>Neuromusculoskeletal</Text>
        </View>
        <Buttons btnStyle={"callButton"} btnText={"CALL NOW"} />
      </View>
      <View style={styles.scheduleTimeBtnContainer}>
        <View style={styles.scheduleTimeContainer}>
          <Text style={styles.scheduleParagraph}>Schedule a session</Text>
          <Text style={styles.selectTimeParagraph}>select a time</Text>
        </View>
        <Calendar
          minDate={new Date().toString()}
          disableArrowLeft={true}
          enableSwipeMonths={true}
          onDayPress={(day) => {
            navigation.navigate("SchedulingTime", {
              date: JSON.stringify(day.dateString),
              user: JSON.stringify(selectedUser),
            });
          }}
          theme={{
            calendarBackground: "#EFEFEF",
            selectedDayBackgroundColor: "#35DB9F",
            dotColor: "#35DB9F",
            arrowColor: "#35DB9F",
          }}
        />
      </View>
    </View>
  );
}

export default SchedulingDay;

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
    fontSize: 18,
    color: "#383838",
    fontWeight: "500",
  },
  dateText: {
    textAlign: "center",
    fontSize: 16,
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