import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import DashboardOverview from '@/components/home/DashboardOverview';
import ExpiringSoonCarousel from '@/components/home/ExpiringSoonCarousel';
import QuickAdd from '@/components/home/QuickAdd';
import QuickRemove from '@/components/home/QuickRemove';
import RecipeSuggestions from '@/components/home/RecipeSuggestions'; // 1. Importieren

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