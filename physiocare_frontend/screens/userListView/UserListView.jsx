import { View, ScrollView } from "react-native";
import UserCard from "../../components/userCard/UserCard";
import SearchingBar from "../../components/searchBar/SearchBar";
import styles from "./UserListView.styles";
import useLogic from "./UserListView.logic";

const UserListView = () => {
  const { searchBarInputHandler, filteredData, data } = useLogic();

  return (
    <View style={styles.appContainer}>
      <View style={styles.searchBarContainer}>
        <SearchingBar
          onChangeHandler={searchBarInputHandler}
          placeHolder={"Search bar"}
        />
      </View>
      <ScrollView>
        {filteredData.length === 0
          ? data.map((item) => (
              <UserCard
                userType={item.user_type}
                key={item.id}
                userName={`${item.first_name} ${item.last_name}`}
                conditionSpecialty={
                  item.user_type === "THERAPIST"
                    ? item?.therapist_additional_informations?.specialty
                    : item?.pt_additional_informations?.diagnosis
                }
                gender={item.gender}
                location={item.location}
                user={item}
                image={item?.therapist_additional_informations?.profile_picture}
              />
            ))
          : filteredData.map((item) => (
              <UserCard
                userType={item.user_type}
                key={item.id}
                userName={`${item.first_name} ${item.last_name}`}
                conditionSpecialty={
                  item.user_type === "THERAPIST"
                    ? item?.therapist_additional_informations?.specialty
                    : item?.pt_additional_informations?.diagnosis
                }
                gender={item.gender}
                location={item.location}
                user={item}
                image={item?.therapist_additional_informations?.profile_picture}
              />
            ))}
      </ScrollView>
    </View>
  );
};

export default UserListView;
