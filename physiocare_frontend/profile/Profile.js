import { useEffect, useState } from "react";
import ProfileInput from "../components/ProfileInput";
import ProfilePicture from "../components/ProfilePicture";
import Buttons from "../components/Buttons";
import { View, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Profile() {
  return (
    <View style={styles.appContainer}>
      <ScrollView>
        {storageData?.user_type === "THERAPIST" ? (
          <>
            <ProfileInput
              inputTitle={"SPECIALITY"}
              canEdit={canEdit}
              value={info.specialty}
              defaultValue={
                storageData?.therapist_additional_informations.specialty
              }
            />
          </>
        ) : (
          <></>
        )}
      </ScrollView>
      <View style={styles.btnContainer}>
        <Buttons />
      </View>
    </View>
  );
}
