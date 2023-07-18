import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { LIVRES } from '../models/data';

export default function SearchBooks() {
  const [searchText, setSearchText] = useState('');

  // Gérer le changement du texte de recherche
  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  // Filtrer les livres en fonction du texte de recherche
  const filteredBooks = LIVRES.filter((livre) =>
    livre.titre.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderLivre = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8}>
      <Card style={[styles.card, styles.bookCard]}>
        <Card.Cover source={{ uri: item.imageUrl }} style={styles.coverImage} />
        <Card.Content>
          <Text style={styles.titre}>{item.titre}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.tomes}>Tomes: {item.tomes}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Champ de recherche */}
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher un livre par son nom"
        onChangeText={handleSearchTextChange}
        value={searchText}
      />

      {/* Liste des livres filtrés */}
      <FlatList
        data={filteredBooks}
        renderItem={renderLivre}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>Aucun livre trouvé</Text>} // Affiche le message si la liste est vide
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 50,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    padding: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookCard: {
    borderWidth: 1,
    borderColor: '#A2A2A2',
  },
  coverImage: {
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  titre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    marginBottom: 6,
    color: '#666',
  },
  tomes: {
    fontSize: 14,
    color: '#666',
  },
});
