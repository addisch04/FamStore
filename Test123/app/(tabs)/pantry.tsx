import React, { useState, useEffect } from 'react';
import { StyleSheet, SectionList, View, Alert } from 'react-native';
import SearchBar from '@/components/pantry/SearchBar';
import FilterControls, { type FilterType } from '@/components/pantry/FilterControls';
import PantryItemRow from '@/components/pantry/PantryItemRow';
import { ThemedText } from '@/components/themed-text';

export default function PantryScreen() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [pantryData, setPantryData] = useState<any[]>([]);

  // <-- Replace with your deployed backend URL
  const API_BASE = 'https://fam-store-sepia.vercel.app';

  // Fetch pantry items from backend
  const fetchPantry = async () => {
    try {
      const res = await fetch(`${API_BASE}/pantry`);
      const data = await res.json();

      // Debug: log to console and show alert on device
      console.log('Fetched pantry items:', data);
      Alert.alert('Fetched pantry items', JSON.stringify(data));

      // Map DB fields to SectionList format
      const sections = [
        {
          key: 'kuehlschrank',
          title: '🧊 Kühlschrank',
          data: data.map((item, index) => ({
            id: index.toString(),           // unique id for SectionList
            name: item.name,
            quantity: item.quantity,
            expiryInfo: item.expiry || '—',
          })),
        },
      ];

      setPantryData(sections);
    } catch (err) {
      console.log('Error fetching pantry items:', err);
      Alert.alert('Error fetching pantry items', String(err));
    }
  };

  // <-- Call fetchPantry when the component mounts
  useEffect(() => {
    fetchPantry();
  }, []);

  return (
    <SectionList
      style={styles.container}
      sections={pantryData}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <>
          <SearchBar />
          <FilterControls activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <ThemedText style={styles.header}>{title}</ThemedText>
      )}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <PantryItemRow
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            expiryInfo={item.expiryInfo}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { fontSize: 18, fontWeight: 'bold', padding: 16, backgroundColor: '#f9f9f9' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 15,
  },
});
