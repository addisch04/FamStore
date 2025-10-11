import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import TopBar from '@/components/TopBar';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        headerTitle: () => <TopBar />,
        // Wir lassen HapticTab vorerst auskommentiert, damit es im Web funktioniert
        // tabBarButton: HapticTab, 
      }}>

      {/* Tab 1: Startseite */}
      <Tabs.Screen
        name="home" // Passt zu home.tsx
        options={{
          title: 'Start',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />

      {/* Tab 2: Vorrat */}
      <Tabs.Screen
        name="pantry" // Passt zur umbenannten pantry.tsx
        options={{
          title: 'Vorrat',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="archivebox.fill" color={color} />,
        }}
      />

      {/* Tab 3: Einkaufsliste */}
      <Tabs.Screen
        name="shoppinglist" // Passt zu shoppinglist.tsx
        options={{
          title: 'Liste',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cart.fill" color={color} />,
        }}
      />
      
      {/* Tab 4: Rezepte */}
      <Tabs.Screen
        name="recipes" // Passt zur umbenannten und korrigierten recipes.tsx
        options={{
          title: 'Rezepte',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="book.fill" color={color} />,
        }}
      />

      {/* Tab 5: Profil */}
      <Tabs.Screen
        name="profile" // Passt zur umbenannten profile.tsx
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}