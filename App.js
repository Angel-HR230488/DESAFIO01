import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from 'react-native';
import ContactList from './src/components/ContactList'; // Ruta correcta

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Contactos</Text>
      <ContactList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
