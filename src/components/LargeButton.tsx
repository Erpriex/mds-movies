import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
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
  const [scale] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View
        style={[
          styles.button,
          {
            backgroundColor: backgroundColor,
            transform: [{scale}],
          },
        ]}>
        {icon && <View>{icon}</View>}
        <Text style={[styles.label, {color: textColor}]}>{text}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default LargeButton;
