import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';


class DeckView extends Component {

    render() {
      const { navigate } = this.props.navigation
    return (
      <Animated.View  >
        <Text style= {style.deckTitle} >title</Text>
        <Text style= {style.cards} >Cards: </Text>
        <TouchableOpacity style={style.button} onPress={() =>navigate('AddQuestion')} ><Text>Add Question</Text></TouchableOpacity>
        <TouchableOpacity style={style.button}  ><Text>Start Quiz</Text></TouchableOpacity>
        <TouchableOpacity style={style.button}  ><Text>Back</Text></TouchableOpacity>
      </Animated.View>
    )
  }
}


const style = StyleSheet.create({
  deckTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  cards: {
    marginTop: 8
  },
  button: {
    marginTop: 18,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#95a5a6',
  }
})

export default DeckView