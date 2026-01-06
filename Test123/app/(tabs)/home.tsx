import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import DashboardOverview from '@/components/DashboardOverview';
import ExpiringSoonCarousel from '@/components/ExpiringSoonCarousel';
import QuickAdd from '@/components/QuickAdd';
import QuickRemove from '@/components/QuickRemove';
import RecipeSuggestions from '@/components/RecipeSuggestions'; // 1. Importieren

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedText type="title" style={styles.greeting}>
        Hallo, Elisa 👋
      </ThemedText>

      <DashboardOverview />

      <ExpiringSoonCarousel />

      <QuickAdd />

      <QuickRemove />

      <RecipeSuggestions /> {/* 2. Hier hinzufügen */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  greeting: {
    fontSize: 25,
    paddingHorizontal: 16,
  },
});