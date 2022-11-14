import { StyleSheet, View, Pressable, Text } from "react-native";

function Btn(props) {
  return (
    <Pressable style={btnStyle(props.btnStyle)} onPress={props.onPress}>
      <View>
        <Text style={textStyle(props.textStyle)}>{props.btnText}</Text>
      </View>
    </Pressable>
  );
}
