import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {useState, useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import Perfis from './src/perfis';
import Vagas from './src/vagas';
import Home from './src/redirecionador'
import Form from './src/form'
import Lista from './src/lista'
import Termos from './src/termos'

const Stack = createStackNavigator();


export default function App(){
  //useEffect( () => {
    //alert('Mais funções em breve para os perigosos!')
  //}, []);

  return(
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Home" component={Home} options={{
          title:'Bem-vindo ao portal do hospital!',
          headerStyle:{
            backgroundColor: '#003262'
          },
          headerTintColor: '#89CFF0',
          //headerShown: false,
        }}
        />
        <Stack.Screen name="NOSSOS SUPERS MÉDICOS" component={Perfis} />
        <Stack.Screen name="VAGAS DE EMPREGO" component={Vagas} />
        <Stack.Screen name="FORMULÁRIO PRA DOR" component={Form} />
        <Stack.Screen name="FILA PRO TRANSPLANTE" component={Lista} />
        <Stack.Screen name="COOKIES" component={Termos} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
