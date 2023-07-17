import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LIVRES } from '../models/data';

export default function SearchBooks() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState(''); // État local pour stocker le texte de recherche

  // Fonction pour gérer le texte de recherche saisi par l'utilisateur
  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  // Fonction pour filtrer les livres en fonction du texte de recherche
  const filteredBooks = LIVRES.filter((livre) =>
    livre.titre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* TextInput pour la recherche */}
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher un livre par son nom"
        onChangeText={handleSearchTextChange}
        value={searchText}
      />

      {/* Liste de livres */}
      <FlatList
        data={filteredBooks}
        renderItem={({ item }) => (
            <View style={styles.bookContainer}>
              <Text style={styles.bookTitle}>{item.titre}</Text>
            </View>
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>Aucun livre trouvé</Text>} // Affiche le message si la liste est vide
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  bookContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#ccc',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
