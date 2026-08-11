import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View>
      <Image style={styles.avatar}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGUFEFy2OKJeMU7fw_IMbmiUjURiaXiS15rFzVNKm1btSZpR3JwhX4D0uD&s=10' }}></Image>
      </View>

      <View style={styles.circle}>
      <Text style={styles.circleText}> KU </Text>
      </View>
      <Text style={styles.title}>
        Hello Moto 📱 :3 </Text>
      <Text style={styles.Name}> My name is Aitsala Kumpoln </Text>
      <Text style={styles.Number}> My Id is 6721651947</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b85cc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize :28,
    fontWeight :'bold',
    color:'#000000'
  },
  Name:{
    fontSize :20,
    fontWeight :'bold',
    color:'#02e44d'
  },
  Number:{
    fontSize :20,
    fontWeight :'ITALIC',
    color:'#e40000'
  },
  circle:{
    width:120,
    height:120,
    borderRadius:60,
    borderWidth:3,
    borderColer:'#2563eb',
    backgroundColor:'#d5d6d6',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:24
  },
  circleText:{
    fontSize:36,
    fontWeight:'bold',
    color:'#008106'
  },
avatar:{
width: 150, height: 150, alignItems: 30,
borderRadius:80, 
},
});
