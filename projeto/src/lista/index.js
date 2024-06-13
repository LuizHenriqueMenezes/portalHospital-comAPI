import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Button, Image } from 'react-native';

function App() {
  let initial_feed = [
    { id: 1, nome: 'Paulo Peixoto', idade: 32, condicao: 'URGENTE' },
    { id: 2, nome: 'João Perigoso Jr', idade: 17, condicao: 'GRAVE' },
    { id: 3, nome: 'Maria Antonieta da Silva', idade: 22, condicao: 'GRAVE' },
    { id: 4, nome: 'Joaquim Santana', idade: 42, condicao: 'CONTROLADA' },
    { id: 5, nome: 'Paulo Andrade Filho', idade: 36, condicao: 'CONTROLADA' },
  ];

  const [feed, setFeed] = useState(initial_feed);
  const [dogImage, setDogImage] = useState(null);

  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Pessoa data={item} />}
      />
      <View style={styles.dogContainer}>
        <Button title="Atualizar" onPress={fetchDogImage} />
        {dogImage && <Image source={{ uri: dogImage }} style={styles.dogImage} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  areaPessoa: {
    backgroundColor: '#003262',
    height: 110,
    marginBottom: 15,
  },
  textoPessoa: {
    color: '#89CFF0',
    fontSize: 20,
    marginTop: 5,
  },
  dogContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  dogImage: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});

export default App;

function Pessoa(props) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}> Nome: {props.data.nome} </Text>
      <Text style={styles.textoPessoa}> Idade: {props.data.idade} </Text>
      <Text style={styles.textoPessoa}> Condição: {props.data.condicao} </Text>
    </View>
  );
}
