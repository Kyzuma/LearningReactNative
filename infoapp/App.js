import { Text, View } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import local screens
import HomeScreen from "./components/screens/HomeScreen";
import EventsScreen from "./components/screens/EventsScreen";
import ContactScreen from "./components/screens/ContactScreen";

// Screens -------------------------------------------------
// const HomeScreen = () => (
//   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//     <Text>Home!</Text>
//   </View>
// );

// Navigator -----------------------------------------------
const Tabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Event: EventsScreen,
    Contact: ContactScreen,
  },
});

// Root navigation component -------------------------------
const Navigation = createStaticNavigation(Tabs);

export default function App() {
  return <Navigation />;
}
