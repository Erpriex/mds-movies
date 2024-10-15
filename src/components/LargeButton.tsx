import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontFamilies} from '../constants/fonts.tsx';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontFamily: FontFamilies.GILROY.bold,
  },
});

const LargeButton = ({
  text,
  backgroundColor,
  textColor,
  icon,
}: {
  text: string;
  backgroundColor: string;
  textColor: string;
  icon?: React.ReactNode;
}) => {
  return (
    <View style={[styles.button, {backgroundColor: backgroundColor}]}>
      {icon && <View>{icon}</View>}
      <Text style={[styles.label, {color: textColor}]}>{text}</Text>
    </View>
  );
};

export default LargeButton;
