import { View, Text } from "react-native";
import Buttons from "../../../components/button/Buttons";
import ProfilePicture from "../../../components/profilePicture/ProfilePicture";
import { Calendar } from "react-native-calendars";
import styles from "./ScheduleDay.styles";

const ScheduleDay = ({ navigation, route }) => {
  const selectedUser = JSON.parse(route.params.user);
  return (
    <View style={styles.appContainer}>
      <View style={styles.infoDateContainer}>
        <View style={styles.profilePictureContainer}>
          <ProfilePicture
            image={`${process.env.BASE_URL}${selectedUser?.therapist_additional_informations?.profile_picture}`}
          />
        </View>
        <View style={styles.nameSpecialtyContainer}>
          <Text style={styles.therapistNameText}>
            {selectedUser.first_name + " " + selectedUser.last_name}
          </Text>
          <Text style={styles.specialtyText}>
            {selectedUser.therapist_additional_informations.specialty}
          </Text>
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
            navigation.navigate("ScheduleTime", {
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
};

export default ScheduleDay;
