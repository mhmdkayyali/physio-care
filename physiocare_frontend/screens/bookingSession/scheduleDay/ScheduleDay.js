import { StyleSheet, View, Text } from "react-native";
import Buttons from "../../components/Buttons";
import ProfilePicture from "../../components/ProfilePicture";
import { Calendar } from "react-native-calendars";

function SchedulingDay({ navigation, route }) {
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
      </View>
    </View>
  );
}
