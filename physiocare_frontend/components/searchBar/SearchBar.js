import { TextInput } from "react-native";
import styles from "./SearchBar.styles";

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
