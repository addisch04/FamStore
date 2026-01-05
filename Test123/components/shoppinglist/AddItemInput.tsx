import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';

// Definiere, was die Komponente erwartet
interface AddItemInputProps {
  onAddItem: (name: string, quantity: string, expiryDate: string, category: string) => void;
}

export default function AddItemInput({ onAddItem }: AddItemInputProps) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  // Fürs Erste einfache Textfelder, später können wir DatePicker etc. hinzufügen
  
  const handlePress = () => {
    if (name.trim()) {
      // Standardwerte für Datum/Kategorie, falls leer
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
        <IconSymbol name="plus.circle.fill" size={30} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Oder Theme-Farbe nutzen
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  qtyInput: {
    flex: 0.4,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});