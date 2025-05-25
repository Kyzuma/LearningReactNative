import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { useState } from 'react'; // import useState from react

export default function App() {

  // Getting back a count state variable
  // and a setCount function to set the state variable
  // use const so we don't manipulate the variable directly
  const [count, setCount] = useState(0);

  function buttonPressed(){
    setCount(count + 1);

    // This doesn't update the UI
    // count+=1;
    // console.log(1);
    }

    function showEncouragingText(){
      if(count >= 10){
        return "Keep Going!"
      }
    }

  return (
    <View style={styles.container}>
      <Text style = {styles.text}>{count}</Text>
      <Pressable title = "Increment" onPress = {buttonPressed}>
        <Text>Press Me!</Text>
      </Pressable>

      <Text style = {styles.encouragingText}>{showEncouragingText()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 40,
    padding: 20,
    textAlign: 'center',
  },
  encouragingText:{
    marginTop: 50,
    color: "darkgray"
  }
});