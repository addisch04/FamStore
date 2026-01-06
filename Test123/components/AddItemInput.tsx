import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // <-- Wir nutzen jetzt Ionicons direkt

interface AddItemInputProps {
  onAddItem: (name: string, quantity: string, expiryDate: string, category: string) => void;
}

export default function AddItemInput({ onAddItem }: AddItemInputProps) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handlePress = () => {
    if (name.trim()) {
      onAddItem(name, quantity, '2025-12-31', 'Sonstiges');
      setName('');
      setQuantity('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Neues Item (z.B. Milch)" 
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />
      <TextInput 
        style={[styles.input, styles.qtyInput]} 
        placeholder="Menge" 
        placeholderTextColor="#999"
        value={quantity}
        onChangeText={setQuantity}
      />
      <TouchableOpacity onPress={handlePress} style={styles.addButton}>
        {/* Hier das neue Icon für Android & iOS */}
        <Ionicons name="add-circle" size={40} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
    alignItems: 'center', // Wichtig, damit Button mittig ist
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    height: 50, // Feste Höhe für bessere Optik
  },
  qtyInput: {
    flex: 0.4,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});