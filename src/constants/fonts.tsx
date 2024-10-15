import {isIOS} from '../utils/platformUtil';

export const FontFamilies = {
  GILROY: {
    black: isIOS() ? 'Gilroy-Black' : 'GilroyBlack',
    blackItalic: isIOS() ? 'Gilroy-BlackItalic' : 'GilroyBlackItalic',
    bold: isIOS() ? 'Gilroy-Bold' : 'GilroyBold',
    boldItalic: isIOS() ? 'Gilroy-BoldItalic' : 'GilroyBoldItalic',
    extraBold: isIOS() ? 'Gilroy-ExtraBold' : 'GilroyExtraBold',
    extraBoldItalic: isIOS() ? 'Gilroy-ExtraBoldItalic' : 'GilroyExtraBoldItalic',
    heavy: isIOS() ? 'Gilroy-Heavy' : 'GilroyHeavy',
    heavyItalic: isIOS() ? 'Gilroy-HeavyItalic' : 'GilroyHeavyItalic',
    light: isIOS() ? 'Gilroy-Light' : 'GilroyLight',
    lightItalic: isIOS() ? 'Gilroy-LightItalic' : 'GilroyLightItalic',
    medium: isIOS() ? 'Gilroy-Medium' : 'GilroyMedium',
    mediumItalic: isIOS() ? 'Gilroy-MediumItalic' : 'GilroyMediumItalic',
    regular: isIOS() ? 'Gilroy-Regular' : 'GilroyRegular',
    regularItalic: isIOS() ? 'Gilroy-RegularItalic' : 'GilroyRegularItalic',
    semiBold: isIOS() ? 'Gilroy-SemiBold' : 'GilroySemiBold',
    semiBoldItalic: isIOS() ? 'Gilroy-SemiBoldItalic' : 'GilroySemiBoldItalic',
    thin: isIOS() ? 'Gilroy-Thin' : 'GilroyThin',
    thinItalic: isIOS() ? 'Gilroy-ThinItalic' : 'GilroyThinItalic',
    ultraLight: isIOS() ? 'Gilroy-UltraLight' : 'GilroyUltraLight',
    ultraLightItalic: isIOS() ? 'Gilroy-UltraLightItalic' : 'GilroyUltraLightItalic',
  }
};
