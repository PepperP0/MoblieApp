import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button,TouchableOpacity } from "react-native"


const CounterScreen = ({ navigation }) => {
    //let counter = 0;
    const[counter, setcounter]=useState(0);
    //setcounter => counter =counter+1 
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Counter Screen</Text>
            <TouchableOpacity 
            style={[styles.buttonCoun , styles.plus]}
            onPress={()=> {setcounter(counter+1),console.log(counter)}}>
            <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.number}
            onPress={()=> {setcounter(0),console.log(counter)}}>{counter}</Text>
            </TouchableOpacity>


            <TouchableOpacity
            style={[styles.buttonCoun , styles.Minus]}
            onPress={()=> {setcounter(counter-1),console.log(counter)}}>
            <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
            
            <StatusBar style="auto"/>
            <Text style={styles.detail}>This page for CounterScreen</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 50,
        //justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom:20,
    },
    buttonCoun: {
        marginTop: 10,
        width: 150,
        height: 70,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:50,
    },
    btnText: {
        color:'#fff',
        fontSize: 55,
        fontWeight: 'bold',
        backgroundColor:'Blue'
    },
    number: {
        //marginBottom:20,
        fontSize: 200,
        fontWeight: 'bold'
    },
    detail: {
        marginTop:150,
        fontSize: 20,
        color: '#6d6565',
        fontStyle:'italic',
    },
    plus:{
        backgroundColor :'#0fe03d',
        borderRadius:15
    },
    Minus:{
        backgroundColor :'#e00f0f',
        borderRadius:15
    },
})

export default CounterScreen