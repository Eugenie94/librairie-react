import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { LIVRES } from '../models/data';

export default function Books() {
  
const route = useRoute();

const renderLivre = ({ item }) => (
    <View key={item.id} style={styles.livreContainer}>
      <Text style={styles.titre}>{item.titre}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.tomes}>Tomes: {item.tomes}</Text>
    </View>
  );

  return (
    <FlatList
    data={LIVRES}
    renderItem={renderLivre}
    keyExtractor={(item) => item.id}
  />
  );
}
  const styles = StyleSheet.create({
    livreContainer: {
      marginVertical: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    titre: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 16,
      color: '#888',
    },
    tomes: {
      fontSize: 14,
      color: '#444',
    },
  });