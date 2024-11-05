import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {FontFamilies} from '../constants/fonts.tsx';

const styles = StyleSheet.create({
  screenSection: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontFamily: FontFamilies.GILROY.bold,
  }
});

const EmptyScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        styles.screenSection,
        {backgroundColor: isDarkMode ? 'black' : 'white'},
      ]}>
      <Text style={styles.title}>Soon !</Text>
    </View>
  );
};

export default EmptyScreen;
