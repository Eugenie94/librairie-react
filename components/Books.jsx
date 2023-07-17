import React from 'react'
import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native';

export default function Books() {

    const route = useRoute();

  return (
    <Text>Books</Text>
  )
}
