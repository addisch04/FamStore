import { Redirect } from 'expo-router';

export default function Index() {
  // Leitet den Nutzer von "/" direkt zu "/home" weiter
  return <Redirect href="/home" />;
}