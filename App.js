import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from 'react-native';
import ContactList from './src/components/ContactList'; 

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
    backgroundColor: '#D9D9D9', // Color de fondo gris claro
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, // hace mayor opacidad para sombra más visible
    shadowRadius: 4, // es radio de sombra más grande
    elevation: 5,
  },
  title: {
    fontSize: 24, // Tamaño de fuente más grande para el título
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20, // Mayor espacio inferior
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  subtitle: {
    fontSize: 16, // Tamaño de fuente más grande para el subtítulo
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    width: '90%',
    paddingVertical: 10, // Aumento del espacio vertical
    paddingHorizontal: 15, // Aumento del espacio horizontal
    fontSize: 14, // Tamaño de fuente más grande para mejorar la legibilidad
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15, // Mayor espaio inferior entre inputs
  },
  button: {
    backgroundColor: '#4CAF50', // Color verde para el botón
    paddingVertical: 10, // Aumento del espacio vertical
    paddingHorizontal: 20, // Aumento del espacio horizontal
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, // Mayor espacio superior
  },
  buttonText: {
    color: '#fff',
    fontSize: 14, // Tamaño de fuente más grande para el texto del botón
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



export default App;
