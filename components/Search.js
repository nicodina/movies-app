import React from 'react';
import {StyleSheet, View, TextInput, Button, Text, FlatList} from 'react-native'
import movies from '../services/movies'
import MovieItem from './MovieItem';

export default function Search() {
    
    return (
      <View style={styles.container} >
        <Text style={styles.title}>MoviesAndMe</Text>
        <Text style={styles.text}>What movie would you like to watch tonight?</Text>
        <TextInput style={styles.textinput} placeholder='Type the title' />
        <Button style={styles.button} title='Search' onPress={() => {}} />

        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <MovieItem movie={item}/>}
          />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FED766',
    marginTop: 20
  },
  title: {
    fontSize: 50,
    alignContent: "center",
    color: '#EDF5FC',
    backgroundColor: '#272D2D',
    textAlign: 'center',
  },
  text: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 28,
    color: '#4D7EA8',
    textAlign: 'center',
    marginTop: 10,
  },
  textinput: {
    height:50,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#272D2D',
    backgroundColor: '#EDF5FC',
    color: '#272D2D',
    paddingLeft: 5,
  },
  button: {
    height: 50,
  },
});