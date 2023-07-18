import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { LIVRES } from '../models/data';

export default function Books() {
  const [titreLivre, setTitreLivre] = useState('');
  const [descriptionLivre, setDescriptionLivre] = useState('');
  const [categorieId, setCategorieId] = useState('');
  const [tomes, setTomes] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isFormExpanded, setIsFormExpanded] = useState(false);

  // Fonction pour ajouter un nouveau livre
  const handleAddLivre = () => {
    const newLivre = {
      id: LIVRES.length + 1,
      titre: titreLivre,
      description: descriptionLivre,
      categorieId: categorieId,
      tomes: tomes || 1,
      imageUrl: imageUrl,
    };

    LIVRES.push(newLivre);

    // Effacer les champs de saisie après l'ajout du livre
    setTitreLivre('');
    setDescriptionLivre('');
    setCategorieId('');
    setImageUrl('');
    setTomes('');
    setIsFormExpanded(false);
  };

  // Fonction pour afficher un livre dans la liste
  const renderLivre = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8}>
      <Card style={[styles.card, styles.bookCard]}>
        <Card.Cover source={{ uri: item.imageUrl }} style={styles.coverImage} />
        <Card.Content>
          <Text style={styles.titre}>{item.titre}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {item.description}
          </Text>
          <Text style={styles.tomes}>Tomes: {item.tomes}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Formulaire pour ajouter un livre */}
      <View style={styles.formContainer}>
        {isFormExpanded && (
          <>
            <TextInput
              style={styles.input}
              value={titreLivre}
              onChangeText={setTitreLivre}
              placeholder="Titre du livre"
            />
            <TextInput
              style={[styles.input, styles.multilineInput]}
              value={descriptionLivre}
              onChangeText={setDescriptionLivre}
              placeholder="Description du livre"
              multiline
              numberOfLines={4}
            />
            <TextInput
              style={styles.input}
              value={categorieId}
              onChangeText={setCategorieId}
              placeholder="Catégorie du livre"
            />
            <TextInput
              style={styles.input}
              value={imageUrl}
              onChangeText={setImageUrl}
              placeholder="URL de l'image du livre"
            />
            <TextInput
              style={styles.input}
              value={tomes}
              onChangeText={setTomes}
              placeholder="Tome du livre"
            />
            <Button title="Ajouter" onPress={handleAddLivre} />
            <Button title="Réduire le formulaire" onPress={() => setIsFormExpanded(false)} />
          </>
        )}
        {!isFormExpanded && (
          <Button title="Ajouter un livre" onPress={() => setIsFormExpanded(true)} />
        )}
      </View>

      {/* Liste de livres */}
      <View style={styles.listContainer}>
        <FlatList
          data={LIVRES}
          renderItem={renderLivre}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  formContainer: {
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
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
