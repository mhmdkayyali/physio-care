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

export default SearchingBar;

const styles = StyleSheet.create({
  searchInput: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 40,
    borderRadius: 10,
    paddingLeft: 12,
  },
});
