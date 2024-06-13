import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 2
  },
  box:{
    height: 340,
    width: 420,
    alignItems: 'center'
  },

  tituloAnuncio:{
    fontSize: 22,
    color: 'red',
    marginTop: 2
  },

  textoAnuncio:{
    fontSize: 15,
    color: 'gray',
    margin: 6
  },

  imagemAnuncio:{
    width: 200,
    height: 200
  }
})

export {styles}