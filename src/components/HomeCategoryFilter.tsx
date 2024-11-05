import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {FontFamilies} from '../constants/fonts.tsx';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 45,
    borderRadius: 90,
    overflow: 'hidden',
    height: 47,
    width: '90%',
    alignSelf: 'center',
  },
  blurContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  categoriesContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: FontFamilies.GILROY.medium,
  },
  selectedText: {
    backgroundColor: '#FFF',
    color: '#000',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 90,
  },
});

const HomeCategoryFilter = ({
  selected,
  onSelectCategory,
}: {
  selected: number;
  onSelectCategory: (index: number) => void;
}) => {
  const categories = ['All', 'Romance', 'Sport', 'Kids', 'Horror'];

  return (
    <View style={styles.container}>
      <BlurView
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor="rgba(66, 66, 63, 0.80)"
        style={styles.blurContainer}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          contentContainerStyle={styles.categoriesContainer}
          renderItem={({item, index}) => (
            <Text
              style={[
                styles.text,
                selected === index && styles.selectedText,
                index === 0 && selected !== index && {marginLeft: 18},
                index === categories.length - 1 &&
                  selected !== index && {marginRight: 18},
              ]}
              onPress={() => onSelectCategory(index)}>
              {item}
            </Text>
          )}
        />
      </BlurView>
    </View>
  );
};

export default HomeCategoryFilter;
