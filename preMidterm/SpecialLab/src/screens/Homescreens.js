import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../constants/color'
import { TOP_INSET } from '../constants/layout'

const HomeScreen = () => {
    return (
        <View style={[styles.container, {padding:TOP_INSET }]}>
            <Text style={styles.title}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
    },
})

export default HomeScreen 