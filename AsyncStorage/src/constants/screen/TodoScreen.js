import {View, Text, StyleSheet} from 'react-native'
import { COLORS } from '../colors';
import { TOP_INSET } from '../layout';
const TodoScreen =()=> {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
    container: {
        flex: 1,
        backgroundColor: COLORS.bg,
        paddingTop: TOP_INSET,
        paddingHorizontal: 20
    },
    title: {
        color: COLORS.text,
        fontSize: 28,
        fontWeight: '800',
        marginBottom: 16
    },
    row: { flexDirection: 'row', gap: 10, marginBottom: 14 },
    input: {
        flex: 1, backgroundColor: COLORS.card, borderWidth: 1, borderColor: COLORS.border,
        borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, color: COLORS.text,
        fontSize: 16
    },
    addButton: {
        backgroundColor: COLORS.cyan, borderRadius: 10, paddingHorizontal: 20,
        justifyContent: 'center'
    },
    addText: { color: COLORS.bg, fontSize: 16, fontWeight: '700' },
    item: {
        backgroundColor: COLORS.card, borderWidth: 1, borderColor: COLORS.border,
        borderRadius: 10, padding: 14, marginBottom: 8
    },
    itemText: { color: COLORS.text, fontSize: 16 },
    itemDone: { color: COLORS.textDim, textDecorationLine: 'line-through' }
});

export default TodoScreen 