import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator} from 'react-native'
import MovieItem from './MovieItem';
import {getMoviesFromText} from '../services/tmdb.connector'

export default function Search() {
    
    const [state, getMovies] = useState({
      movies: [],
    });

    const [searchText, setSearchText] = useState('')
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    return (
      <View style={styles.container} >
        <Text style={styles.title}>MoviesAndMe</Text>
        <Text style={styles.text}>What movie would you like to watch tonight?</Text>
        <TextInput style={styles.textinput} onSubmitEditing={() => {
          _searchMovie()
          }} onChangeText={(text) => _searchTextChanged(text)} placeholder='Type the title' />
        <Button style={styles.button} title='Search' onPress={() => {
          _searchMovie();
          }}/>

        <FlatList
          data={state.movies}
          keyExtractor={(item) => item.id.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            console.log('onEndReached');
            console.log(page);
            console.log(totalPages);
            if (page < totalPages) {
              _loadFilms();
            }
          }}
          renderItem={({item}) => <MovieItem movie={item}/>}
        />

        {_displayLoading()}
      </View>
    );
    
    function _searchMovie() {
      const zero = 0;
      getMovies({
        movies: [],
      });
      setPage(0);
      setTotalPages(0);

      _loadFilms();
    }

    function _loadFilms() {
      setIsLoading(true);
      console.log("search text length: " + searchText.length)
      console.log('AAAAAAA ' + page)

      if (searchText.length > 0) {

        getMoviesFromText(searchText, page + 1).then(data => {
          getMovies({
            movies: [...state.movies, ...data.results], 
          });
          setIsLoading(false);
          setPage(data.page);
          setTotalPages(data.total_pages);
        });
      }
    }

    function _searchTextChanged(text) {
      setSearchText(text)
    }

    function _displayLoading() {
      if (isLoading === true) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
    }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FED766',
    marginTop: 20
  },
  loading_container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
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