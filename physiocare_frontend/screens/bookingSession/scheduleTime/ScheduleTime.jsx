import { View, Text } from "react-native";
import ProfilePicture from "../../../components/profilePicture/ProfilePicture";
import PressedTimeButton from "../../../components/pressedTimeButton/PressedTimeButton";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./ScheduleTime.styles";
import useLogic from "./ScheduleTime.logic";

const ScheduleTime = ({ navigation, route }) => {
  const {
    selectedDate,
    selectedUser,
    currentDate,
    selectedSlot,
    setSelectedSlot,
    canChoose,
    setCanChoose,
    setSelectedTime,
    availableSlots,
    weekDays,
    onTimeSlotPress,
  } = useLogic(navigation, route);
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
        <View>
          <Text style={styles.dayText}>{weekDays[currentDate]}</Text>
          <Text style={styles.dateText}>{selectedDate}</Text>
        </View>
      </View>
      <View style={styles.scheduleTimeBtnContainer}>
        <View style={styles.scheduleTimeContainer}>
          <Text style={styles.scheduleParagraph}>Schedule a session</Text>
          <Text style={styles.selectTimeParagraph}>select a time</Text>
        </View>
        <View style={styles.btnContainer}>
          <ScrollView>
            {availableSlots.map((slot, index) => (
              <PressedTimeButton
                key={index}
                slot={slot}
                selected={selectedSlot === index}
                onPress={canChoose ? () => onTimeSlotPress(index) : null}
                unselect={canChoose ? () => setSelectedSlot() : null}
                canChoose={() => {
                  setCanChoose(false);
                }}
                selectedTime={setSelectedTime}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ScheduleTime;
