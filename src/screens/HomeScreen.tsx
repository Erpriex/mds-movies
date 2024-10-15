import React from 'react';
import {useColorScheme, Text, View, StyleSheet, Image} from 'react-native';
// @ts-ignore
import HomeBackgroundImg from '../assets/images/home_background.png';
import LinearGradient from 'react-native-linear-gradient';
import LargeButton from '../components/LargeButton.tsx';
import {FontFamilies} from '../constants/fonts.tsx';
import {Cross} from '../utils/Icons.tsx';
import MoviesCaroussel from '../components/MoviesCaroussel.tsx';

const styles = StyleSheet.create({
  screenSection: {
    height: '100%',
  },
  backgroundImgSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientOverlay: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    bottom: 0,
  },
  containerSection: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  buttonsHeaderSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginTop: -85,
  },
  buttonsHeader: {
    fontFamily: FontFamilies.GILROY.medium,
    fontSize: 16,
  },
});

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const gradientColors = isDarkMode
    ? ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)', 'black']
    : [
        'rgba(255, 255, 255, 0)',
        'rgba(255, 255, 255, 0.5)',
        'rgba(255, 255, 255, 0.8)',
        'white',
      ];

  return (
    <View
      style={[
        styles.screenSection,
        {backgroundColor: isDarkMode ? 'black' : 'white'},
      ]}>
      <View style={styles.backgroundImgSection}>
        <Image
          style={{width: '100%'}}
          source={HomeBackgroundImg}
          resizeMode="stretch"
        />
        <LinearGradient
          colors={gradientColors}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={styles.gradientOverlay}
        />
      </View>
      <View style={styles.containerSection}>
        <View style={styles.buttonsHeaderSection}>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.buttonsHeader,
                {textAlign: 'right', color: isDarkMode ? '#FFF' : '#000'},
              ]}>
              My list
            </Text>
            <View style={{marginVertical: 24}}>
              <LargeButton
                text="Wishlist"
                backgroundColor="#333"
                textColor="#FFF"
                icon={<Cross />}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.buttonsHeader,
                {color: isDarkMode ? '#FFF' : '#000'},
              ]}>
              Discover
            </Text>
            <View style={{marginVertical: 24}}>
              <LargeButton
                text="Details"
                backgroundColor="#F2C94C"
                textColor={isDarkMode ? '#333' : '#FFF'}
              />
            </View>
          </View>
        </View>
        <MoviesCaroussel title="Marvel studios" />
      </View>
    </View>
  );
};

export default HomeScreen;
