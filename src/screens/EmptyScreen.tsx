import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {FontFamilies} from '../constants/fonts.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    safeSection: {
        flex: 1,
    },
  screenSection: {
      flex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontFamily: FontFamilies.GILROY.bold,
  },
});

const EmptyScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <SafeAreaView style={styles.safeSection}>
          <View
              style={[
                  styles.screenSection,
                  {backgroundColor: isDarkMode ? 'black' : 'white'},
              ]}>
              <Text style={[styles.title, {color: isDarkMode ? '#FFF' : '#000'}]}>
                  Soon !
              </Text>
          </View>
      </SafeAreaView>
  );
};

export default EmptyScreen;
