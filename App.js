import React ,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from 'react-native';

import {  StackNavigator } from 'react-navigation';
import AddQuestion from './AddQuestion'
import DeckView from './DeckView'
const App = StackNavigator({
  DeckView:{
    screen:DeckView
  },
  AddQuestion: {
    screen: AddQuestion
  }
}
)   

export default App