import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  titulo:{
    fontSize: 35,
    color: 'darkblue',
    textAlign: 'center',
    marginTop: 40
  },

  tela:{
    marginTop: 40
  },

  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  endereco: {
    marginTop: 15,
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cep: {
    flex: 1,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginRight: 20,
    borderRadius: 20
  },
  tituloo:{
    marginBottom: 10, 
    fontSize: 15,
    color: 'blue'
  }
})

export {styles}