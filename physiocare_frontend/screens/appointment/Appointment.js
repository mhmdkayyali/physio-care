import { View, StyleSheet, ScrollView, Modal, Text } from "react-native";
import { useEffect, useState } from "react";
import ScheduleCard from "../components/ScheduleCard";
import SearchingBar from "../components/SearchingBar";
import Btn from "../components/Btn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

function Schedule() {
  const [modalVisible, setModalVisible] = useState(false);
  const [enteredSearchText, setEnteredSearchText] = useState("");
  const [user, setUser] = useState();
  const [cancelled, setCancelled] = useState();
  const [cancelledId, setCancelledId] = useState();
  const [appointments, setAppointments] = useState([]);

  return (
    <View style={styles.appContainer}>
      <Modal visible={modalVisible} animationType={"fade"} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.warningMessage}>
              Are you sure you want to cancel the session with {cancelled}
            </Text>
            <View style={styles.btnContainer}>
              <Btn />
              <Btn />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
