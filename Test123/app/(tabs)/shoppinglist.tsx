import React, { useState, useMemo } from 'react';
import { StyleSheet, SectionList, View, TouchableOpacity } from 'react-native';
import AddItemInput from '@/components/AddItemInput';
import ShoppingListActions from '@/components/ShoppingListActions';
import ShoppingListItem from '@/components/ShoppingListItem';
import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons';

type ShoppingItem = {
  id: string;
  name: string;
  note?: string;
  isChecked: boolean;
};

const DUMMY_SHOPPING_LIST: ShoppingItem[] = [
  { id: '1', name: 'Bananen', note: 'ca. 5 Stück', isChecked: false },
  { id: '2', name: 'Tomaten', isChecked: false },
  { id: '3', name: 'Milch', note: '2 Liter', isChecked: true },
  { id: '4', name: 'Käse', note: 'Gouda', isChecked: false },
  { id: '5', name: 'Brot', isChecked: false },
  { id: '6', name: 'Äpfel', isChecked: false },
  { id: '7', name: 'Joghurt', isChecked: false },
  { id: '8', name: 'Zwiebeln', isChecked: false },
  { id: '9', name: 'Kartoffeln', isChecked: true },
  { id: '10', name: 'Eier', note: '10 Stück', isChecked: false },
  { id: '11', name: 'Butter', isChecked: false },
  { id: '12', name: 'Salat', isChecked: false },
  { id: '13', name: 'Gurke', isChecked: false },
  { id: '14', name: 'Paprika', isChecked: false },
  { id: '15', name: 'Kaffee', isChecked: true },
  { id: '16', name: 'Tee', isChecked: false },
  { id: '17', name: 'Zucker', isChecked: false },
];

const chunk = (arr: ShoppingItem[], size: number): ShoppingItem[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

export default function ShoppingListScreen() {
  const [items, setItems] = useState(DUMMY_SHOPPING_LIST);
  const [showCompleted, setShowCompleted] = useState(true);

  const handleToggleItem = (id: string) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const sections = useMemo(() => {
    const toBuy = items.filter(item => !item.isChecked);
    const completed = items.filter(item => item.isChecked);
    
    const result = [];

    if (toBuy.length > 0) {
      result.push({ title: 'Offen', data: chunk(toBuy, 4) });
    }

    if (completed.length > 0) {
      result.push({ title: `✔️ Erledigt (${completed.length})`, data: chunk(completed, 4), isCompletedSection: true });
    }

    return result;
  }, [items]);

  return (
    <SectionList
      style={styles.container}
      sections={sections}
      // HIER IST DIE KORREKTUR: Ein robusterer Schlüssel, der immer einzigartig ist.
      keyExtractor={(row, index) => `${sections.find(s => s.data.includes(row))?.title}-${index}`}
      stickySectionHeadersEnabled={false}
      ListHeaderComponent={() => (
        <>
          <AddItemInput />
          <ShoppingListActions />
        </>
      )}
      renderSectionHeader={({ section }) => (
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={() => section.isCompletedSection && setShowCompleted(!showCompleted)}
          disabled={!section.isCompletedSection}
        >
          <ThemedText style={styles.header}>{section.title}</ThemedText>
          {section.isCompletedSection && (
            <Ionicons name={showCompleted ? 'chevron-up' : 'chevron-down'} size={24} color="#666" />
          )}
        </TouchableOpacity>
      )}
      renderItem={({ item: row, section }) => {
        if (section.isCompletedSection && !showCompleted) return null;

        return (
          <View style={styles.row}>
            {row.map((it) => (
              <ShoppingListItem
                key={it.id}
                name={it.name}
                note={it.note}
                isChecked={it.isChecked}
                onToggle={() => handleToggleItem(it.id)}
              />
            ))}
          </View>
        );
      }}
      ListFooterComponent={<View style={{ height: 40 }} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 15,
  },
});