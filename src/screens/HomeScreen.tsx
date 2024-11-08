import React, {useEffect, useState} from 'react';
import {
  useColorScheme,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
// @ts-ignore
import HomeBackgroundImg from '../assets/images/home_background.png';
// @ts-ignore
import HomeBackground2Img from '../assets/images/home_background_2.jpg';
// @ts-ignore
import HomeBackground3Img from '../assets/images/home_background_3.jpg';
// @ts-ignore
import BlackFridayImg from '../assets/images/black_friday.jpeg';
import LinearGradient from 'react-native-linear-gradient';
import LargeButton from '../components/LargeButton.tsx';
import {FontFamilies} from '../constants/fonts.tsx';
import {CrossIcon} from '../utils/Icons.tsx';
import MoviesCaroussel from '../components/MoviesCaroussel.tsx';
import {fetchBestMovies, fetchMarvelMovies} from '../services/api.tsx';
import HomeCategoryFilter from '../components/HomeCategoryFilter.tsx';
import Category from '../utils/Category.tsx';
import HomeHeaderPagination from '../components/HomeHeaderPagination.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  safeSection: {
    flex: 1,
  },
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
  marginContainer: {
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
  carousselsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
  },
  blackFridayContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  blackFridayImg: {
    width: '100%',
    height: 165,
    marginTop: 32,
  },
  blackFridayTitle: {
    fontFamily: FontFamilies.GILROY.medium,
    fontSize: 16,
  },
  blackFridayDescription: {
    fontFamily: FontFamilies.GILROY.regular,
    fontSize: 12,
    marginTop: 8,
  },
});

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    Category.ALL,
  );
  const [marvelMovies, setMarvelMovies] = useState([]);
  const [bestMovies, setBestMovies] = useState([]);

  const fadeAnim = useState(new Animated.Value(1))[0];

  const categories = [
    Category.ALL,
    Category.ROMANCE,
    Category.SPORTS,
    Category.KIDS,
    Category.HORROR,
  ];

  const backgroundImgs = [
    HomeBackgroundImg,
    HomeBackground2Img,
    HomeBackground3Img,
  ];

  const gradientColors = isDarkMode
    ? ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)', 'black']
    : [
        'rgba(255, 255, 255, 0)',
        'rgba(255, 255, 255, 0.5)',
        'rgba(255, 255, 255, 0.8)',
        'white',
      ];

  useEffect(() => {
    const getMarvelMovies = async () => {
      const marvelMovies = await fetchMarvelMovies(selectedCategory);
      setMarvelMovies(marvelMovies);
    };
    const getBestMovies = async () => {
      const bestMovies = await fetchBestMovies(selectedCategory);
      setBestMovies(bestMovies);
    };
    getMarvelMovies();
    getBestMovies();
  }, [selectedCategory]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCurrentBackgroundIndex(
          prevIndex => (prevIndex + 1) % backgroundImgs.length,
        );

        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [backgroundImgs.length, fadeAnim]);

  return (
    <SafeAreaView style={styles.safeSection}>
      <ScrollView
        style={[
          styles.screenSection,
          {backgroundColor: isDarkMode ? 'black' : 'white'},
        ]}
        contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.backgroundImgSection}>
          <Animated.Image
            style={{width: '100%', opacity: fadeAnim}}
            source={backgroundImgs[currentBackgroundIndex]}
            resizeMode="stretch"
          />
          <LinearGradient
            colors={gradientColors}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            style={styles.gradientOverlay}
          />
        </View>
        <HomeCategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <View>
          <View style={[styles.marginContainer, styles.buttonsHeaderSection]}>
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
                  icon={<CrossIcon />}
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
          <HomeHeaderPagination
            count={backgroundImgs.length}
            selectedIndex={currentBackgroundIndex}
          />
          <View style={styles.carousselsContainer}>
            <MoviesCaroussel
              title="Marvel studios"
              movies={marvelMovies}
              selectedCategory={selectedCategory}
            />
            <MoviesCaroussel
              title="Best movies"
              movies={bestMovies}
              selectedCategory={selectedCategory}
              showDetails
            />
          </View>
          <View style={[styles.marginContainer, styles.blackFridayContainer]}>
            <Image
              source={BlackFridayImg}
              style={styles.blackFridayImg}
              resizeMode="cover"
            />
            <View>
              <Text
                style={[
                  styles.blackFridayTitle,
                  {color: isDarkMode ? '#FFF' : '#000'},
                ]}>
                Black friday is here !
              </Text>
              <Text
                style={[
                  styles.blackFridayDescription,
                  {color: isDarkMode ? '#FFF' : '#000'},
                ]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                sociis pulvinar auctor nibh nibh iaculis id.
              </Text>
            </View>
            <LargeButton
              text="Check details"
              backgroundColor="#F2C94C"
              textColor={isDarkMode ? '#333' : '#FFF'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
