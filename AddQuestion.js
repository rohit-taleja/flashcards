import React, { Component } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
class AddQuestion extends Component { 
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={style.container} >
        <Text style={style.header} >New Question</Text>
        <KeyboardAvoidingView>
          <Text style={{marginTop: 14}} >Question:</Text>
          <TextInput style= {style.input}  placeholder={'Enter Question'} />
          <Text style={{marginTop: 14}} >Answer:</Text>
          <TextInput style= {style.input}   placeholder={'Enter Answer to Question'} />
          <TouchableOpacity style={style.button} >
            <Text>Submitt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} >
            <Text>Back</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }
}
const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    paddingTop: 10,
  },
  input: {
    width: 250,
    paddingTop: 10,
    fontSize: 18,
  },
  button: {
    borderWidth: 1,
    padding: 10,
    margin: 50,
    borderRadius: 5,
    backgroundColor: '#95a5a6',
    alignItems: 'center'
  }
})
export default AddQuestion