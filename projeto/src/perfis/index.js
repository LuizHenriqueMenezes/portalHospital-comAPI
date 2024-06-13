import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Button, Image } from 'react-native';
import { styles } from './styles';
import api from '../APIs/devs/api';

let dr1 = {
  nome: 'Nina Menezes Feitosa',
  area: 'Pediatria',
  avaliacao: 'Excelente',
  foto: 'https://pbs.twimg.com/profile_images/1774784473696985089/674u45z3_400x400.jpg',
};

let dr2 = {
  nome: 'Fabinho Fanhoso',
  area: 'Ortopedista',
  avaliacao: 'Ótimo',
  foto: 'https://pbs.twimg.com/profile_images/1702924747078557696/vvk5El5g_400x400.jpg',
};

let dr3 = {
  nome: 'Alfredo Borges',
  area: 'Cirurgião Plastico',
  avaliacao: 'Bom',
  foto: 'https://pbs.twimg.com/media/GKGEZx3XkAAbKJm?format=jpg&name=medium',
};

function perfil() {
  const [name, setName] = useState('');
  const [devs, setDevs] = useState({});

  const consultaName = async (name) => {
    const response = await api.get(name);
    setDevs(response.data);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{ uri: dr1.foto }} style={[styles.foto]} />
        <Text style={[styles.nomin]}>{dr1.nome}</Text>
        <Text style={[styles.xxxx]}>ÁREA: {dr1.area}</Text>
        <Text style={[styles.xxxx]}>AVALIAÇÃO: {dr1.avaliacao}</Text>

        <Image source={{ uri: dr2.foto }} style={[styles.foto]} />
        <Text style={[styles.nomin]}>{dr2.nome}</Text>
        <Text style={[styles.xxxx]}>ÁREA: {dr2.area}</Text>
        <Text style={[styles.xxxx]}>AVALIAÇÃO: {dr2.avaliacao}</Text>

        <Image source={{ uri: dr3.foto }} style={[styles.foto]} />
        <Text style={[styles.nomin]}>{dr3.nome}</Text>
        <Text style={[styles.xxxx]}>ÁREA: {dr3.area}</Text>
        <Text style={[styles.xxxx]}>AVALIAÇÃO: {dr3.avaliacao}</Text>
      </ScrollView>

      <Text style={styles.titulo}>PESQUISE MÉDICOS</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.cep}
          value={name}
          onChangeText={(texto) => setName(texto)}
        />

        <Button title="✔" color="red" onPress={() => consultaName(name)} />
      </View>

      <Text style={styles.dev}>Nome: {devs.login}</Text>
      <Text style={styles.dev}>Cirurgias: {devs.public_repos}</Text>
      <Image style={styles.foto} source={{ uri: devs.avatar_url }} />
    </View>
  );
}

export default perfil;
