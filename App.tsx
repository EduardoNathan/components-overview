import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
          ScrollView, Switch} from 'react-native';
import imageUser from "./assets/user-placeholder.jpg"
import { useState } from 'react';

export default function App() {
  const [usuario, setUsuario] = useState('')
  const [ligado, setLigado] = useState(false)

  function handleSwitch(){
    setLigado(!ligado)
    Alert.alert("SWITCH ALTERADO", "VOCE ALTEROU O ESTADO DO SWITCH")
  }

  return (
    <ScrollView>
    
    <View 
    style={styles.container}
      //onTouchStart={(event)=>{Alert.alert("TOQUE", "Toque inicializado")}}
      //onTouchEnd={(event)=>{Alert.alert("TOQUE", "Toque finalizado")}}
      >

      <View>
        <Image
          style={styles.userPhoto}
          source={imageUser}
        />
      </View>

      <TextInput style={styles.inputStyle}
        onChange={(text)=>setUsuario(text.nativeEvent.text)}
        keyboardType='email-address'
        placeholder='digite seu e-mail'
        value={usuario}/>

      <TextInput style={styles.inputStyle}
        keyboardType='default'
        placeholder='digite sua senha'/>
      
      <TouchableOpacity onPress={()=>{Alert.alert('Usuario é:', usuario)}}>
      <View style={styles.button}>
        <Text style={styles.text}>LOGIN</Text>
      </View>
      </TouchableOpacity>
      
      <Switch

       value={ligado}
       onValueChange={handleSwitch}>

      </Switch>

      <StatusBar style="auto" />
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:'white',
    fontSize:22,
    fontWeight:'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3344FF',
    borderRadius:5,
    padding:8,
    marginTop:40,
    marginBottom:400,
    width:160,
    height:40,
    alignItems:'center'
  },
  userPhoto: {
    borderRadius:200,
    borderWidth:1,
    borderColor:'grey',
    width:200,
    height:200
  },
  inputStyle: {
    borderWidth:1,
    marginTop:10,
    borderColor:'grey',
    width:200,
    height:30,
    textAlign:'center',
  }
});
