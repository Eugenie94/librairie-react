import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
            {/* Image de profil */}
            <Image
                source={require('../assets/eugenie.png')}
                style={styles.profilePicture}
            />
            {/* Nom */}
            <Text style={styles.name}>Eugénie KHAYAT</Text>
            {/* Bio */}
            <Text style={styles.bio}>Passionnée de livres</Text>
            {/* À propos */}
            <Text style={styles.aboutText}>
                J'adore lire des livres de différents genres, en particulier la science-fiction et la fantasy. Mes auteurs préférés incluent J.K. Rowling, George R.R. Martin et Neil Gaiman. La lecture est mon échappatoire de la réalité et un moyen d'explorer de nouveaux mondes et idées. Quand je ne lis pas, vous pouvez me trouver confortablement installée avec une tasse de thé, perdue dans les pages d'un bon livre.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
        marginBottom: 50,
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bio: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
    },
    aboutText: {
        fontSize: 16,
        color: '#444',
        textAlign: 'center',
    },
});

export default Profile;
