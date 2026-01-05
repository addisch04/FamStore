// Test123/services/api.ts
import { API_BASE_URL } from '../constants/config';

// Definiere, wie ein Item aussieht
export interface PantryItem {
  id: number;
  name: string;
  quantity: string;
  expiryDate: string;
  category: string;
}

// Hilfsfunktion für Fehler
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'API Request failed');
  }
  return response.json();
};

// 1. Alle Items holen (READ)
export const fetchPantryItems = async (): Promise<PantryItem[]> => {
  const response = await fetch(`${API_BASE_URL}/getPantry`); // oder /pantry, je nachdem wie wir es genannt haben
  return handleResponse(response);
};

// 2. Item hinzufügen (CREATE)
export const addPantryItem = async (item: Omit<PantryItem, 'id'>) => {
  const response = await fetch(`${API_BASE_URL}/addPantryItem`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  return handleResponse(response);
};

// 3. Item löschen (DELETE)
export const deletePantryItem = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/deletePantryItem?id=${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};

// 4. Item aktualisieren (UPDATE)
export const updatePantryItem = async (item: PantryItem) => {
  const response = await fetch(`${API_BASE_URL}/updatePantryItem`, {
    method: 'PUT', // oder PATCH
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  return handleResponse(response);
};