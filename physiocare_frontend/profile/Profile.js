import { useEffect, useState } from "react";
import ProfileInput from "../components/ProfileInput";
import ProfilePicture from "../components/ProfilePicture";
import Buttons from "../components/Buttons";
import { View, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Profile() {
  const [canEdit, setCanEdit] = useState(false);
  const [storageData, setStorageData] = useState();

  return (
    <View style={styles.appContainer}>
      {storageData?.user_type === "THERAPIST" ? (
        <View style={styles.profilePictureContainer}>
          <ProfilePicture />
        </View>
      ) : (
        <View style={styles.topMargin}></View>
      )}
      <ScrollView>
        <ProfileInput
          inputTitle={"FIRST NAME"}
          canEdit={canEdit}
          value={info.first_name}
          defaultValue={storageData?.first_name}
        />
        <ProfileInput
          inputTitle={"LAST NAME"}
          canEdit={canEdit}
          value={info.last_name}
          defaultValue={storageData?.last_name}
        />
        <ProfileInput
          inputTitle={"EMAIL"}
          canEdit={canEdit}
          value={info.email}
          defaultValue={storageData?.email}
        />
        <ProfileInput
          inputTitle={"PHONE NUMBER"}
          canEdit={canEdit}
          value={info.phone_number}
          defaultValue={storageData?.phone_number}
        />
        <ProfileInput
          inputTitle={"DATE OF BIRTH"}
          canEdit={canEdit}
          value={info.dob}
          defaultValue={storageData?.dob}
        />
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
