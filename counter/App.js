import { Text, View, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import CounterText from "./components/CounterText";

export default function App() {
  // Getting back a count state variable
  // and a setCount function to set the state variable
  // use const so we don't manipulate the variable directly
  const [count, setCount] = useState(0);

  function buttonPressed() {
    setCount(count + 1);

    // This doesn't update the UI
    // count+=1;
    // console.log(1);
  }

  function buttonPressedDecrease() {
    setCount(count - 1);
  }

  function resetCounter() {
    setCount(0);
  }

  function showEncouragingText() {
    if (count >= 10) {
      return "Keep Going!";
    }
  }

  return (
    <View style={styles.container}>
      <CounterText color="pink" fontSize={10}>
        {count}
      </CounterText>
      <CounterText color="blue" fontSize={40}>
        {count}
      </CounterText>
      <CounterText color="purple" fontSize={90}>
        {count}
      </CounterText>

      <Pressable onPress={buttonPressed} style={styles.increaseButton}>
        <Text style={styles.buttonText}>Increase</Text>
      </Pressable>

      <Pressable onPress={buttonPressedDecrease} style={styles.decreaseButton}>
        <Text style={styles.buttonText}>Decrease</Text>
      </Pressable>

      <Pressable onPress={resetCounter} style={styles.resetButton}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>

      <Text style={styles.encouragingText}>{showEncouragingText()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  text: {
    fontSize: 48,
    padding: 20,
    fontWeight: "bold",
    color: "#333",
  },
  encouragingText: {
    marginTop: 40,
    fontSize: 18,
    color: "#666",
  },
  increaseButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
  },
  decreaseButton: {
    backgroundColor: "#F44336",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
  },
  resetButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});
