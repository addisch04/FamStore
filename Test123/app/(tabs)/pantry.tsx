import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  RefreshControl
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import AddItemInput from '@/components/shoppinglist/AddItemInput';
import PantryItemRow from '@/components/pantry/PantryItemRow';
import FilterControls from '@/components/pantry/FilterControls';
import { useThemeColor } from '@/hooks/use-theme-color';

// Importiere unsere neuen API-Funktionen
import { 
  fetchPantryItems, 
  addPantryItem, 
  deletePantryItem, 
  updatePantryItem, 
  PantryItem 
} from '../../services/api';

export default function PantryScreen() {
  const [items, setItems] = useState<PantryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const backgroundColor = useThemeColor({}, 'background');

  // Daten beim Start laden
  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const data = await fetchPantryItems();
      setItems(data);
    } catch (error) {
      console.error("Fehler beim Laden:", error);
      Alert.alert("Fehler", "Konnte Daten nicht laden.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadItems();
  };

  // Hinzufügen
  const handleAddItem = async (name: string, quantity: string, expiryDate: string, category: string) => {
    try {
      // Optimistisches Update (Sofort anzeigen) oder warten? Wir warten hier sicherheitshalber.
      const newItem = await addPantryItem({ name, quantity, expiryDate, category });
      setItems(prev => [...prev, newItem]); // Neues Item zur Liste hinzufügen (ID kommt vom Server)
    } catch (error) {
      Alert.alert("Fehler", "Item konnte nicht gespeichert werden.");
    }
  };

  // Löschen
  const handleDeleteItem = (id: number) => {
    Alert.alert(
      "Löschen",
      "Möchtest du dieses Item wirklich löschen?",
      [
        { text: "Abbrechen", style: "cancel" },
        { 
          text: "Löschen", 
          style: "destructive",
          onPress: async () => {
            try {
              await deletePantryItem(id);
              setItems(prev => prev.filter(item => item.id !== id));
            } catch (error) {
              Alert.alert("Fehler", "Konnte nicht gelöscht werden.");
            }
          }
        }
      ]
    );
  };

  // Filtern (Client-seitig, da die Liste meist klein ist)
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Vorratsschrank 🍎</ThemedText>
        <TouchableOpacity onPress={loadItems} style={styles.reloadButton}>
           <IconSymbol name="arrow.clockwise" size={24} color="#007AFF" />
        </TouchableOpacity>
      </ThemedView>

      <AddItemInput onAddItem={handleAddItem} />
      
      <FilterControls 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PantryItemRow 
              item={item} 
              onDelete={() => handleDeleteItem(item.id)}
              // onEdit implementieren wir später, wenn du möchtest
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={
            <ThemedText style={styles.emptyText}>Keine Items gefunden.</ThemedText>
          }
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  reloadButton: {
    padding: 8,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    opacity: 0.6,
  }
});