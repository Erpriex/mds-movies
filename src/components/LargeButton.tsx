import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    borderRadius: 8,
  }
});

const LargeButton = ({text, backgroundColor, textColor}: {text: string, backgroundColor: string, textColor: string}) => {
  return (
    <View style={[styles.button, { backgroundColor: backgroundColor }]}>
      <Text style={{ color: textColor }}>{text}</Text>
    </View>
  );
}

export default LargeButton;