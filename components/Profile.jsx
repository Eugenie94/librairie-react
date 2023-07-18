import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/eugenie.png')}
                style={styles.profilePicture}
            />
            <Text style={styles.name}>Eugénie KHAYAT</Text>
            <Text style={styles.bio}>Passionate Book Lover</Text>
            <Text style={styles.about}>About Me:</Text>
            <Text style={styles.aboutText}>
                I love reading books from various genres, especially science fiction and fantasy. My favorite authors include J.K. Rowling, George R.R. Martin, and Neil Gaiman. Reading is my escape from reality and a way to explore new worlds and ideas. When I'm not reading, you can find me curled up with a cup of tea, lost in the pages of a good book.
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
    about: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    aboutText: {
        fontSize: 16,
        color: '#444',
        textAlign: 'center',
    },
});

export default Profile;
