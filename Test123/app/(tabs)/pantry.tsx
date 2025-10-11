import React, { useState, useMemo } from 'react';
import { StyleSheet, SectionList, View } from 'react-native';
import SearchBar from '@/components/SearchBar';
import FilterControls, { type FilterType } from '@/components/FilterControls';
import PantryItemRow from '@/components/PantryItemRow';
import { ThemedText } from '@/components/themed-text';

const DUMMY_DATA = [
    { key: 'kuehlschrank', title: '🧊 Kühlschrank', data: [ { id: '1', name: 'Milch', quantity: '2 Stk.', expiryInfo: 'in 5 Tagen', expiryColor: 'orange' }, { id: '2', name: 'Käse', quantity: '1 Stk.', expiryInfo: 'in 12 Tagen' }, { id: '6', name: 'Eier', quantity: '6 Stk.', expiryInfo: 'in 10 Tagen' }] },
    { key: 'gefrierfach', title: '❄️ Gefrierfach', data: [ { id: '3', name: 'Beeren', quantity: '500g', expiryInfo: 'bis 2026' }] },
    { key: 'schrank', title: '📦 Schrank', data: [ { id: '4', name: 'Pasta', quantity: '3 Pck.', expiryInfo: 'bis 2027' }, { id: '5', name: 'Tomatensoße', quantity: '2 Gläser', expiryInfo: 'bis 2026' }] },
    { key: 'bad', title: '🛀 Bad', data: [ { id: '7', name: 'Zahnpasta', quantity: '1 Stk.', expiryInfo: 'bis 2026' }] },
    { key: 'sonstiges', title: '🧺 Sonstiges', data: [ { id: '8', name: 'Batterien', quantity: '4 Stk.', expiryInfo: 'bis 2030' }] },
];

export default function PantryScreen() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredData = useMemo(() => {
    if (activeFilter === 'all') {
      return DUMMY_DATA;
    }
    return DUMMY_DATA.filter((section) => section.key === activeFilter);
  }, [activeFilter]);

  return (
    <SectionList
      style={styles.container}
      sections={filteredData}
      keyExtractor={(item) => item.id}
      numColumns={3}
      ListHeaderComponent={() => (
        <>
          <SearchBar />
          <FilterControls activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <ThemedText style={styles.header}>{title}</ThemedText>
      )}
      renderItem={({ item, section, index }) => {
        if (index % 3 !== 0) return null;

        const items = section.data.slice(index, index + 3);
        return (
          <View style={styles.row}>
            {items.map((it) => (
              <PantryItemRow
                key={it.id}
                name={it.name}
                quantity={it.quantity}
                expiryInfo={it.expiryInfo}
                expiryColor={it.expiryColor}
              />
            ))}
          </View>
        );
      }}
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