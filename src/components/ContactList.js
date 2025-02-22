import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import Contact from './Contact';
import contactsData from '../../contacts.json';  // Ajusta la ruta según sea necesario

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ nombre: '', apellido: '', telefono: '' });
  const [showContacts, setShowContacts] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [error, setError] = useState({ nombre: '', apellido: '', telefono: '' });

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  const eliminarContacto = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const toggleFavorito = (id) => {
    setContacts(contacts.map(contact => 
      contact.id === id ? { ...contact, favorito: !contact.favorito } : contact
    ));
  };

  const validarEntrada = () => {
    let esValido = true;

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(newContact.nombre)) {
      setError(prevState => ({ ...prevState, nombre: 'El nombre solo debe contener letras' }));
      esValido = false;
    } else {
      setError(prevState => ({ ...prevState, nombre: '' }));
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(newContact.apellido)) {
      setError(prevState => ({ ...prevState, apellido: 'El apellido solo debe contener letras' }));
      esValido = false;
    } else {
      setError(prevState => ({ ...prevState, apellido: '' }));
    }

    if (!/^\d+$/.test(newContact.telefono)) {
      setError(prevState => ({ ...prevState, telefono: 'El teléfono solo debe contener números' }));
      esValido = false;
    } else {
      setError(prevState => ({ ...prevState, telefono: '' }));
    }

    return esValido;
  };

  const agregarContacto = () => {
    if (validarEntrada()) {
      const id = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;
      setContacts([...contacts, { ...newContact, id, favorito: false }]);
      setNewContact({ nombre: '', apellido: '', telefono: '' });
    }
  };

  const contactosFavoritos = contacts.filter(contact => contact.favorito);
  const contactosAMostrar = showFavorites ? contactosFavoritos : contacts;

  return (
    <View style={styles.listContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={newContact.nombre}
        onChangeText={text => setNewContact({ ...newContact, nombre: text })}
      />
      {error.nombre ? <Text style={styles.error}>{error.nombre}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={newContact.apellido}
        onChangeText={text => setNewContact({ ...newContact, apellido: text })}
      />
      {error.apellido ? <Text style={styles.error}>{error.apellido}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={newContact.telefono}
        onChangeText={text => setNewContact({ ...newContact, telefono: text })}
        keyboardType="numeric"
      />
      {error.telefono ? <Text style={styles.error}>{error.telefono}</Text> : null}

      <Button title="Agregar Contacto" onPress={agregarContacto} />
      <Button title="Mostrar Contactos" onPress={() => { setShowContacts(true); setShowFavorites(false); }} />
      <Button title="Mostrar Favoritos" onPress={() => { setShowContacts(true); setShowFavorites(true); }} />

      {showContacts && contactosAMostrar.map(contact => (
        <Contact 
          key={contact.id} 
          contact={contact} 
          eliminarContacto={eliminarContacto} 
          toggleFavorito={toggleFavorito} 
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default ContactList;
