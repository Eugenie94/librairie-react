import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

  const handleCategoriesNavigation = () => {
    navigation.navigate('Categories');
  };

  const handleBooksNavigation = () => {
    navigation.navigate('Books');
  };

  const handleSearchBooksNavigation = () => {
    navigation.navigate('SearchBooks');
  };

  const handleProfileNavigation = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.iconContainer} onPress={handleCategoriesNavigation}>
          <MaterialCommunityIcons name="bookshelf" size={30} color="#f5428d" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={handleBooksNavigation}>
          <FeatherIcon name="book" size={30} color="#f5428d" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={handleSearchBooksNavigation}>
          <FeatherIcon name="search" size={30} color="#f5428d" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={handleProfileNavigation}>
          <Icon name="person" size={30} color="#f5428d" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
    borderTopWidth: 3,
    borderTopColor: '#D5D3D3',
    paddingBottom: 10,
  },
  iconContainer: {
    padding: 10,
  },
});
