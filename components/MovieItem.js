import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'
import {getPosterImage} from '../services/tmdb.connector'

export default function MovieItem(props) {

    const movie = props.movie;

    return (
      <View style={styles.main_container} >
        <Image style={styles.image} source={{uri: getPosterImage(movie.poster_path)}}/>
        <View style={styles.content}>
            <View style={styles.first_row_right}>
                <Text style={[styles.horizontal_container_left, styles.text, {flexWrap: 'wrap', padding: 2}]}>{movie.title}</Text>
                <Text style={[styles.horizontal_container_right, styles.text, {backgroundColor: '#92DDAF', padding: 10, borderRadius: 18}]}>{movie.vote_average}</Text>
            </View>
            <View style={styles.second_row_right}>
                <Text style={[styles.text, {fontSize: 14, fontStyle: 'italic', textAlign: 'left'}]} numberOfLines={6}>{movie.overview}</Text>
            </View>
            <View style={styles.third_row_right}>
                <Text style={styles.text}>{movie.release_date}</Text>
            </View>      
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    backgroundColor: '#EDF5FC',
    flexDirection: 'row',
    flex: 1,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8
  },
  image: {
      flex: 1,
      backgroundColor: '#272D2D',
      margin: 5,
      borderRadius: 8
  },
  content: {
    flex: 2,
    margin: 5,
  },
  first_row_right: {
      flex: 1,
      flexDirection: 'row',
  },
  second_row_right: {
    flex: 2,
    justifyContent: 'center',
    paddingTop: 5,
  },
  third_row_right: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal_container_left: {
    flex: 3,
  },
  horizontal_container_right: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#272D2D',
  },
});