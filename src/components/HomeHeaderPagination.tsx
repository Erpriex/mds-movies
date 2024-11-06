import React from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {PointIcon} from '../utils/Icons.tsx';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
});

const HomeHeaderPagination = ({
  count,
  selectedIndex,
}: {
  count: number;
  selectedIndex: number;
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      {Array.from({length: count}, (_, index) => (
        <PointIcon
          key={index}
          stroke={
            index === selectedIndex ? '#F2C94C' : isDarkMode ? 'white' : '#BDBDBD'
          }
        />
      ))}
    </View>
  );
};

export default HomeHeaderPagination;
