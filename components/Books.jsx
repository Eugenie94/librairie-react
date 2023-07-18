import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { LIVRES } from '../models/data';

export default function Books() {
  const [titreLivre, setTitreLivre] = useState('');
  const [descriptionLivre, setDescriptionLivre] = useState('');
  const [categorieId, setCategorieId] = useState('');
  const [tomes, setTomes] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [enCours, setEnCours] = useState(false);

  const handleAddLivre = () => {
    const newLivre = {
      id: LIVRES.length + 1,
      titre: titreLivre,
      description: descriptionLivre,
      categorieId: categorieId,
      tomes: tomes || 1,
      imageUrl: imageUrl,
      enCours: enCours,
    };
    
    LIVRES.push(newLivre);

    setTitreLivre('');
    setDescriptionLivre('');
    setCategorieId('');
    setImageUrl('');
  };

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
      <View style={styles.formContainer}>
        <Text style={styles.label}>Ajouter un livre :</Text>
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
        <Button mode="contained" onPress={handleAddLivre}>Ajouter</Button>
      </View>

      {/* Liste de livres */}
      <FlatList
        data={LIVRES}
        renderItem={renderLivre}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
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
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 10,
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
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  titre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  tomes: {
    fontSize: 14,
    color: '#666',
  },
});
