import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    borderRadius: 8,
  }
});

const LargeButton = ({text}: {text: string}) => {
  return (
    <View style={styles.button}>
      <Text>{text}</Text>
    </View>
  );
}

export default LargeButton;