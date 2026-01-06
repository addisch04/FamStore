import React from 'react';
import { StyleSheet, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';

// Das Interface muss exakt matchen, was pantry.tsx übergibt
interface FilterControlsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CATEGORIES = ['All', 'Obst & Gemüse', 'Kühlwaren', 'Trockenvorrat', 'Sonstiges'];

export default function FilterControls({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory 
}: FilterControlsProps) {
  
  return (
    <View style={styles.container}>
      {/* Suchfeld */}
      <TextInput
        style={styles.searchInput}
        placeholder="Suchen..."
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Kategorie-Filter */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catScroll}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity 
            key={cat} 
            onPress={() => setSelectedCategory(cat)}
            style={[
              styles.catButton, 
              selectedCategory === cat && styles.catButtonActive
            ]}
          >
            <ThemedText style={selectedCategory === cat ? styles.catTextActive : styles.catText}>
              {cat}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  catScroll: {
    flexDirection: 'row',
  },
  catButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 8,
  },
  catButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  catText: {
    fontSize: 14,
  },
  catTextActive: {
    fontSize: 14,
    color: '#fff',
  }
});