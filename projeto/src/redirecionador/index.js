import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './styles';

export default function Home() {
  const navigation = useNavigation();

  function irPerfis() {
    navigation.navigate('NOSSOS SUPERS MÉDICOS');
  }

  function irVagas() {
    navigation.navigate('VAGAS DE EMPREGO');
  }

  function irForm() {
    navigation.navigate('FORMULÁRIO PRA DOR');
  }

  function irLista() {
    navigation.navigate('FILA PRO TRANSPLANTE');
  }

  function irTermos() {
    navigation.navigate('COOKIES');
  }

  return (
    <View>
      <Text style={styles.textinho}>Explore nossos campos:</Text>

      <Button title="Nossos médicos" onPress={irPerfis} />
      <Button title="Vagas de emprego" onPress={irVagas} />
      <Button title="Formulário" onPress={irForm} />
      <Button title="Ver fila de transplante" onPress={irLista} />
      <Button title="COOKIES" onPress={irTermos} />
    </View>
  );
}
