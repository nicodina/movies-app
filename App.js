import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './components/Search'
import Search from './components/Search';


export default function App() {
  return (
    <Search />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FED766',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 34,
    color: '#4D7EA8',
  }
});
