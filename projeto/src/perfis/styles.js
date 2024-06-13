import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    foto:{
        width: 300, height: 300, borderRadius: 200, borderColor: 'blue', borderWidth: 5, marginTop: 20
    },
    titulo:{
        color: 'blue', fontSize: 25, margin: 20, marginTop: 55, fontWeight: 'bold'
    },
    nomin:{
        fontSize: 30, margin: 6
    },    
    container:{
      display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
    xxxx:{
      fontSize: 20, margin: 3
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
    marginTop: 35, 
    fontSize: 25,
    color: 'blue'
  }
});


export {styles}