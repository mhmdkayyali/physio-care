import { StyleSheet, View, Pressable, Text } from "react-native";

function Buttons(props) {
  function btnStyle(type) {
    return styles.btn;
  }
  return (
    <Pressable style={btnStyle(props.btnStyle)}>
      <View>
        <Text></Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
