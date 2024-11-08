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
import Category, {getCategoryLabel} from '../utils/Category.tsx';
import {StarIcon} from '../utils/Icons.tsx';

const styles = StyleSheet.create({
  headerCaroussel: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '5%',
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
    position: 'relative',
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
  noMoviesText: {
    textAlign: 'center',
    fontFamily: FontFamilies.GILROY.regular,
    fontSize: 16,
    color: '#aaa',
    marginTop: 20,
  },
  detailsSection: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsTitle: {
    fontFamily: FontFamilies.GILROY.medium,
    fontSize: 12,
    color: 'white',
    width: 65,
  },
  detailsVoteSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailsVote: {
    fontFamily: FontFamilies.GILROY.medium,
    fontSize: 12,
    color: 'white',
  },
});

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const MoviesCaroussel = ({
  title,
  movies,
  selectedCategory,
  showDetails = false,
}: {
  title: string;
  movies: Movie[];
  selectedCategory: Category;
  showDetails?: boolean;
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <View style={{marginLeft: '5%'}}>
      <View style={styles.headerCaroussel}>
        <Text
          style={[
            styles.carousselTitle,
            {color: isDarkMode ? 'white' : 'dark'},
          ]}>
          {title} - {getCategoryLabel(selectedCategory)}
        </Text>
        <Text style={styles.seeMore}>See more</Text>
      </View>

      {movies.length === 0 ? (
        <Text style={styles.noMoviesText}>
          Aucun film n'est à l'affiche avec ce filtre
        </Text>
      ) : (
        <FlatList
          data={movies}
          horizontal
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.mainCaroussel}
          renderItem={({item}) => (
            <View style={styles.movieItem}>
              <Image
                source={{uri: imageBaseUrl + item.poster_path}}
                style={styles.posterImage}
                resizeMode="cover"
              />
              {showDetails ? (
                <View style={styles.detailsSection}>
                  <Text
                    style={styles.detailsTitle}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.title}
                  </Text>
                  <View style={styles.detailsVoteSection}>
                    <StarIcon stroke="#F2C94C" />
                    <Text style={styles.detailsVote}>
                      {item.vote_average.toFixed(1)}
                    </Text>
                  </View>
                </View>
              ) : (
                <Text
                  style={[
                    styles.movieTitle,
                    {color: isDarkMode ? 'white' : '#333'},
                  ]}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {item.title}
                </Text>
              )}
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default MoviesCaroussel;
