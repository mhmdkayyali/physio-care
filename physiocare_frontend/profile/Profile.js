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
          <>
            <ProfileInput
              inputTitle={"DIAGNOSIS"}
              canEdit={canEdit}
              value={info.diagnosis}
              defaultValue={storageData?.pt_additional_informations.diagnosis}
            />
            <ProfileInput
              inputTitle={"CASE DATE"}
              canEdit={canEdit}
              value={info.case_date}
              defaultValue={storageData?.pt_additional_informations.case_date}
            />
            <ProfileInput
              inputTitle={"TREATING DOCTOR"}
              canEdit={canEdit}
              value={info.treating_doctor}
              defaultValue={
                storageData?.pt_additional_informations.treating_doctor
              }
            />
          </>
        )}
      </ScrollView>
      <View style={styles.btnContainer}>
        <Buttons />
      </View>
    </View>
  );
}
