import { TextInput, StyleSheet } from "react-native";

function SearchBar(props) {
  return <TextInput style={styles.textInput} placeholder="Search"></TextInput>;
}

export default SearchBar;

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#C0C0C0",
    textAlign: "center",
  },
});
