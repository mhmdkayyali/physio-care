import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

function CustomDrawer(props) {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <DrawerItem
        label={"Logout"}
        icon={({ color, size }) => (
          <Ionicons name="log-out" color={color} size={size} />
        )}
        inactiveBackgroundColor="rgba(255, 255, 255, 0.25)"
        inactiveTintColor="#C9C9C9"
        onPress={() => {
          AsyncStorage.clear();
          props.navigation.navigate("LoginPage");
        }}
      />
    </>
  );
}
