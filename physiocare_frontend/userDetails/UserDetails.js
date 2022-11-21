import ProfileDisplay from "../../components/ProfileDisplay";
import ProfilePicture from "../../components/ProfilePicture";
import Btn from "../../components/Btn";
import { View, StyleSheet, ScrollView, Text } from "react-native";

function UserDetails({ navigation, route }) {
  return (
    <View style={styles.appContainer}>
      <View style={styles.profilePictureContainer}>
        <ProfilePicture />
      </View>
      <View>
        <Text style={styles.therapistNameText}></Text>
      </View>
      <ScrollView>
        <ProfileDisplay inputTitle={"SPECIALITY"} />
        <ProfileDisplay inputContent={user.location} inputTitle={"LOCATION"} />
        <ProfileDisplay inputTitle={"RATE PER SESSION"} />
      </ScrollView>
      <View style={styles.btnContainer}>
        <Btn btnText={"BOOK A SESSION"} />
      </View>
    </View>
  );
}
