import React from 'react';
import {useColorScheme, Text, View, StyleSheet, Image} from 'react-native';
// @ts-ignore
import HomeBackgroundImg from '../assets/images/home_background.png';
import LinearGradient from 'react-native-linear-gradient';
import LargeButton from '../components/LargeButton.tsx';

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
  }
});

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const gradientColors = isDarkMode
    ? ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)', 'black']
    : ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.8)', 'white'];


  return (
    <View style={[styles.screenSection, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
      <View style={styles.backgroundImgSection}>
        <Image style={{ width: '100%' }} source={HomeBackgroundImg} resizeMode='stretch' />
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradientOverlay}
        />
      </View>
      <View style={styles.containerSection}>
        <View>
          <View>
            <Text>My list</Text>
            <LargeButton text="Wishlist" />
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;