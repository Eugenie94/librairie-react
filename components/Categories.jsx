import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CATEGORIES } from '../models/data';

export default function Categories() {

  const route = useRoute();

  const renderCategoryButton = ({ item }) => (
    <TouchableOpacity style={[styles.categoryButton, { backgroundColor: item.couleur }]}>
      <Text style={styles.categoryText}>{item.genre}</Text>
      <Text style={styles.categoryText}>{item.couleur}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryButton}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  categoryButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
