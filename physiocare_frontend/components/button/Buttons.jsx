import { View, Pressable, Text } from "react-native";
import useLogic from "./Buttons.logic";

function Buttons(props) {
  const { btnStyle, textStyle } = useLogic();
  return (
    <Pressable style={btnStyle(props.btnStyle)} onPress={props.onPress}>
      <View>
        <Text style={textStyle(props.textStyle)}>{props.btnText}</Text>
      </View>
    </Pressable>
  );
}

export default Buttons;
