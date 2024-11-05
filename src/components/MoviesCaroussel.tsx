import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {FontFamilies} from '../constants/fonts.tsx';

const styles = StyleSheet.create({
  headerCaroussel: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  carousselTitle: {
    fontFamily: FontFamilies.GILROY.bold,
    fontSize: 20,
  },
  seeMore: {
    color: '#F2C94C',
    fontFamily: FontFamilies.GILROY.medium,
    fontSize: 14,
  },
  mainCaroussel: {
    marginTop: 16,
    gap: 16,
  },
  movieItem: {
    marginRight: 10,
    justifyContent: 'center',
  },
  posterImage: {
    width: 120,
    height: 160,
    borderRadius: 8,
  },
  movieTitle: {
    marginTop: 8,
    fontFamily: FontFamilies.GILROY.medium,
    fontSize: 14,
    textAlign: 'center',
    width: 100,
  },
});

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const MoviesCaroussel = ({title, movies}: {title: string; movies: Movie[]}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const imageBaseUrl =
    'https://image.tmdb.org/t/p/w500';

  return (
    <View>
      <View style={styles.headerCaroussel}>
        <Text
          style={[
            styles.carousselTitle,
            {color: isDarkMode ? 'white' : 'dark'},
          ]}>
          {title}
        </Text>
        <Text style={styles.seeMore}>See more</Text>
      </View>
      <FlatList
        data={movies}
        horizontal
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.mainCaroussel}
        renderItem={({item}) => (
          <View style={styles.movieItem}>
            <Image
              src={imageBaseUrl + item.poster_path}
              style={styles.posterImage}
              resizeMode="cover"
            />
            <Text
              style={[
                styles.movieTitle,
                {color: isDarkMode ? 'white' : '#333'},
              ]}
              numberOfLines={1}
              ellipsizeMode='tail'
            >
              {item.title}
            </Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MoviesCaroussel;
