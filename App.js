import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import Categories from './components/Categories';
import BooksCategories from './components/BooksCategories';
import Books from './components/Books';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header title="Mon Header" />
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Books" component={Books} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
