import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar() {
  // 1. Wir erstellen einen "Zustand", um den eingegebenen Text zu speichern.
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Suche in deinem Vorrat..."
        value={searchText} // 2. Der Text im Input ist immer der Wert aus unserem Zustand.
        onChangeText={setSearchText} // 3. Jede Änderung durch den Nutzer aktualisiert den Zustand.
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
    height: 44,
    fontSize: 16,
  },
});