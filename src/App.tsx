import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

function App() {
  const [number1, onChange1] = useState(0);
  const [number2, onChange2] = useState(0);
  const [result, setResult] = useState(0);
  function add() {
    setResult(Number(number1) + Number(number2));
  }
  function subtract() {
    setResult(number1 - number2);
  }
  function multiply() {
    setResult(number1 * number2);
  }
  function divide() {
    setResult(number1 / number2);
  }
  return (
    <View style={Styles.container}>
      <TextInput style={Styles.value} placeholder='Enter a number' onChangeText={onChange1} value={number1} />
      <TextInput style={Styles.value} placeholder='Enter a number' onChangeText={onChange2} value={number2} />
      <TouchableOpacity style={Styles.buttonn} onPress={add}>
        <Text style={Styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.buttonn} onPress={subtract}>
        <Text style={Styles.buttonText}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.buttonn} onPress={multiply}>
        <Text style={Styles.buttonText}>*</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.buttonn} onPress={divide}>
        <Text style={Styles.buttonText}>/</Text>
      </TouchableOpacity>
      <Text style={Styles.text}>RESULT = {result}</Text>
    </View >
  );
}
export default App;

const Styles = StyleSheet.create({
  value: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  buttonn: {
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    margin: 12,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
});