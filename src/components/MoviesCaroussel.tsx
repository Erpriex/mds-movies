import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
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
});

const MoviesCaroussel = ({title}: {title: string}) => {
  const isDarkMode = useColorScheme() === 'dark';

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
    </View>
  );
};

export default MoviesCaroussel;
