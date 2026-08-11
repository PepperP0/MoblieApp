import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button, } from "react-native"


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen🏡</Text>
            <Button title='Go to Detail'
                onPress={() => navigation.navigate('Detail')} />
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

export default HomeScreen