import { createStaticNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Expo already comes with icons, we just need to import the one we want
// Go to https://icons.expo.fyi/ to see all available icons
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Import local screens
import HomeScreen from "./components/screens/HomeScreen";
import EventsStack from "./components/screens/EventsScreen";
import ContactScreen from "./components/screens/ContactScreen";

// Navigator -----------------------------------------------
const Tabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Events: {
      screen: EventsStack,
      options: { headerShown: false }, // Hide header for the Events stack
    },
    Contact: ContactScreen,
  },
  screenOptions: ({ route }) => ({
    // When the tab is focused, it will be red color, otherwise gray
    tabBarActiveTintColor: "red",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Home") {
        iconName = "home";
      } else if (route.name === "Events") {
        // If the tab is focused, use a filled icon, otherwise use an outlined icon
        iconName = focused ? "calendar" : "calendar-o";
      } else if (route.name === "Contact") {
        iconName = focused ? "envelope" : "envelope-o";
      } else {
        iconName = "question-circle";
      }

      return <FontAwesome name={iconName} size={size} color={color} />;
    },
  }),
});

// Root navigation component -------------------------------
const Navigation = createStaticNavigation(Tabs);

export default function App() {
  return <Navigation />;
}
