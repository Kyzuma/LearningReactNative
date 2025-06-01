import { View, Text, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const EventsScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Events First Page</Text>
    <Pressable
      onPress={() => navigation.navigate("EventsSecond")}
      style={{
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      }}>
      <Text style={{ color: "white" }}>Second Screen</Text>
      </Pressable>
  </View>
);

const EventsSecondScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Events Second Page!</Text>
  </View>
);

const Stack = createStackNavigator();

const EventsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="EventsHome" component={EventsScreen}/>
    
    <Stack.Screen name="EventsSecond" component={EventsSecondScreen}/>
  </Stack.Navigator>
);

export default EventsStack;
