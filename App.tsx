import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import imageUser from "./assets/user-placeholder.jpg"

export default function App() {
  
  return (
    
    <View 
    style={styles.container}
      //onTouchStart={(event)=>{Alert.alert("TOQUE", "Toque inicializado")}}
      //onTouchEnd={(event)=>{Alert.alert("TOQUE", "Toque finalizado")}}
      >

      <View style={styles.userPhoto}>
        <Image
        style={styles.userPhoto}
          source={imageUser}
        />
      </View>

      <TextInput style={styles.inputStyle}
        keyboardType='email-address'
        placeholder='digite seu e-mail'/>

      <TextInput style={styles.inputStyle}
        keyboardType='default'
        placeholder='digite sua senha'/>
      
      <View style={styles.button}>
        <Text style={styles.text}>LOGIN</Text>
      </View>
      

      <StatusBar style="auto" />
    </View>
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
