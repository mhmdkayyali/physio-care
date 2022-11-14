import { TextInput, StyleSheet } from "react-native";

function SearchingBar(props) {
  return (
    <TextInput
      style={styles.searchInput}
      placeholder={props.placeHolder}
      onChangeText={props.onChangeHandler}
    ></TextInput>
  );
}
