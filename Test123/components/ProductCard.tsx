import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type ProductCardProps = {
  imageUri: string;
  name: string;
  expiryInfo: string;
};

export default function ProductCard({ imageUri, name, expiryInfo }: ProductCardProps) {
  const handleAddToCart = () => {
    // This is a placeholder action for now.
    Alert.alert(`${name} zur Einkaufsliste hinzugefügt!`);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.expiryInfo}>{expiryInfo}</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
        <Ionicons name="cart-outline" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 15,
    // Shadow for a floating effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 75,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  infoContainer: {
    padding: 8,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  expiryInfo: {
    fontSize: 12,
    color: '#e67e22', // An orange color to indicate urgency
    marginTop: 2,
  },
  addButton: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    backgroundColor: '#3498db', // A nice blue for the action button
    borderRadius: 50,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Shadow for the button
  },
});