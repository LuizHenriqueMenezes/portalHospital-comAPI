import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Button } from 'react-native';
import { styles } from './styles';
import Anuncio from '../../components/anuncio';
import api from '../APIs/cep/api';

function Anuncios() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});

  const consultaCep = async (cep) => {
    const response = await api.get('/' + cep + '/json/');
    setEndereco(response.data);
  };
  return (
    <View style={styles.tela}>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <Anuncio
            foto="https://img.buzzfeed.com/buzzfeed-static/static/2020-08/24/15/asset/778d3a598d5c/sub-buzz-12461-1598284172-18.jpg?crop=721%3A683%3B0%2C0&downsize=700%3A%2A&output-quality=auto&output-format=auto"
            titulo="Recepcionista"
            linha1="EM: 11700-100"
            linha2="Carga horária: 36h semanais"
            linha3="Salário: R$3100,00"
          />

          <Anuncio
            foto="https://blog.prozeducacao.com.br/wp-content/uploads/2022/09/enfermeira.jpg"
            titulo="Enfermeira(o)"
            linha1="EM: 01310-930"
            linha2="Carga horária: 40h semanais"
            linha3="Salário: R$5000,00"
          />

          <Anuncio
            foto="https://media.licdn.com/dms/image/C4D03AQGG2fR0s0rl3A/profile-displayphoto-shrink_200_200/0/1644285468858?e=2147483647&v=beta&t=uw0Dtlt0pSmpVGmiwjmwJl7rju9avKcJlcNUdgRLk70"
            titulo="Programador"
            linha1="EM: 04200-000"
            linha2="Carga horária: 2h semanais"
            linha3="Salário: R$10000,09"
          />

          <Anuncio
            foto="https://timnews.com.br/system/images/photos/14920828/original/open-uri20220315-18-fkbfrx?1647371143"
            titulo="ADM"
            linha1="EM: 01001-000"
            linha2="Carga horária: 100h semanais"
            linha3="Salário: R$271838000,00"
          />

          <Anuncio
            foto="https://aws-br-pic.kwai.net/kimg/EKzM1y8qmgEKAnMzEg1waG90by1vdmVyc2VhGoQBdXBpYy8yMDIzLzEyLzIwLzA4L0JNakF5TXpFeU1qQXdPRFF3TlRGZk1UVXdNREF4TlRRM05ETTRPVGd4WHpFMU1ERXdORGd5TXpBNU5EUTNNRjh5WHpNPV9vZmZuX0IzODVmMDZkYjljMWM2MTAxYzU3M2MxMjg5OTU3MjlmZi53ZWJw.webp"
            titulo="Chefe do necrotério"
            linha1="EM: 11730-000"
            linha2="Carga horária: 40h semanais"
            linha3="Salário: R$5000,00"
          />
        </ScrollView>

        <Text style={styles.tituloo}>
          Veja as localizações em que os empregos estão disponíveis, digite o
          CEP:
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.cep}
            value={cep}
            onChangeText={(texto) => setCep(texto)}
            underlineColorAndroid="transparent"
            keyboardType="numeric"
          />
          <Button title="✔" color="blue" onPress={() => consultaCep(cep)} />
        </View>

        <Text style={styles.endereco}>
          {endereco.logradouro} - {endereco.bairro} - {endereco.localidade} -{' '}
          {endereco.uf}
        </Text>
      </View>
    </View>
  );
}

export default Anuncios;
