import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const Contact = ({ contact, eliminarContacto, toggleFavorito }) => {
  if (!contact) {
    return null; 
  }

  return (
    <View style={styles.contactContainer}>
      <Text style={styles.contactName}>
        {contact.nombre} {contact.apellido} {contact.favorito && '⭐'}
      </Text>
      <Text style={styles.contactPhone}>Teléfono: {contact.telefono}</Text>
      <Button onPress={() => eliminarContacto(contact.id)} title="Eliminar" />
      <Button onPress={() => toggleFavorito(contact.id)} title={contact.favorito ? 'Quitar de favoritos' : 'Agregar a favoritos'} />
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 16,
    color: '#888',
  },
});

export default Contact;
