/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen.tsx';
import {
  BookmarkIcon,
  HomeIcon,
  ProfileIcon,
  SearchIcon,
} from './src/utils/Icons.tsx';
import {useColorScheme} from 'react-native';
import {FontFamilies} from './src/constants/fonts.tsx';
import EmptyScreen from './src/screens/EmptyScreen.tsx';

function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            let IconComponent;

            if (route.name === 'Home') {
              IconComponent = HomeIcon;
            } else if (route.name === 'Search') {
              IconComponent = SearchIcon;
            } else if (route.name === 'Wishlist') {
              IconComponent = BookmarkIcon;
            } else if (route.name === 'Profile') {
              IconComponent = ProfileIcon;
            }

            // @ts-ignore
            return <IconComponent width={size} height={size} stroke={color} />;
          },
          tabBarActiveTintColor: '#F2C94C',
          tabBarInactiveTintColor: isDarkMode ? '#fff' : '#000',
          tabBarStyle: {
            backgroundColor: isDarkMode ? '#000' : '#fff',
            paddingBottom: 28,
            paddingTop: 8,
            height: 90,
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: FontFamilies.GILROY.medium,
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={EmptyScreen} />
        <Tab.Screen name="Wishlist" component={EmptyScreen} />
        <Tab.Screen name="Profile" component={EmptyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
