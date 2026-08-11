import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button, } from "react-native"


const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen🌟📚</Text>
      <Button title='Go to CounterScreen'
                onPress={() => navigation.navigate('Counter')} />
            <StatusBar style="auto" />
      <StatusBar style="auto" />
    </View>

  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: { fontSize: 18, fontWeight: 'bold' },
})

export default DetailScreen