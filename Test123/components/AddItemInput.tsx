import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddItemInput() {
  const [text, setText] = useState('');

  const handleAddItem = () => {
    // Verhindert das Hinzufügen von leeren Einträgen
    if (text.trim().length === 0) {
      return;
    }

    // Später wird hier der Artikel zur echten Liste hinzugefügt.
    // Fürs Erste simulieren wir es mit einer Benachrichtigung.
    Alert.alert('Artikel hinzugefügt:', text);

    // Das Textfeld nach dem Hinzufügen leeren
    setText('');
  };

  return (
    <View style={styles.container}>
      <Ionicons name="add-circle-outline" size={28} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Neuen Artikel hinzufügen..."
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAddItem} // Diese Funktion wird bei "Enter" auf der Tastatur ausgeführt
        returnKeyType="done" // Ändert den "Enter"-Button zu "Fertig"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    paddingHorizontal: 12,
    margin: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
});