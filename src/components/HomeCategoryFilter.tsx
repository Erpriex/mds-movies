import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {FontFamilies} from '../constants/fonts.tsx';
import Category, {getCategoryLabel} from '../utils/Category.tsx';

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
  selectedTextContainer: {
    backgroundColor: '#FFF',
    borderRadius: 90,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  selectedText: {
    color: '#000',
    fontFamily: FontFamilies.GILROY.bold,
  },
});

const HomeCategoryFilter = ({
  categories,
  selected,
  onSelectCategory,
}: {
  categories: Category[];
  selected: Category;
  onSelectCategory: (category: Category) => void;
}) => {
  return (
    <View style={styles.container}>
      <BlurView
        blurType="dark"
        blurAmount={2}
        reducedTransparencyFallbackColor="rgba(66, 66, 63, 0.80)"
        style={styles.blurContainer}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.toString()}
          contentContainerStyle={styles.categoriesContainer}
          renderItem={({item}) => (
            <View
              style={[
                selected === item && styles.selectedTextContainer,
                categories[0] === item && selected !== item && {marginLeft: 18},
                categories[categories.length - 1] === item &&
                  selected !== item && {marginRight: 18},
              ]}>
              <Text
                style={[styles.text, selected === item && styles.selectedText]}
                onPress={() => onSelectCategory(item)}>
                {getCategoryLabel(item)}
              </Text>
            </View>
          )}
        />
      </BlurView>
    </View>
  );
};

export default HomeCategoryFilter;
