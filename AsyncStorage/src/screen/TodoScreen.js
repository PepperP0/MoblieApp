import { useEffect, useState } from 'react';
import { Alert, View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from 'react-native'
import { COLORS } from '../constants/colors';
import { TOP_INSET } from '../constants/layout';
import { storage } from '../utils/storage';
import { KEYS } from '../constants/keys';

const TodoScreen = () => {
    const [text, setText] = useState('ค่าตั้งต้น') 
    const [loading, setLoading] = useState(true); 
    const [todos, setTodos] = useState([]) 

    useEffect(() => {
        let cancelled = false;
        (async () => {
            const saved = await storage.get(KEYS.ITEM, []);
            if (!cancelled) {
                setTodos(saved);
                setLoading(false);
            }
        })();
        return () => { cancelled = true; };
    }, []); 

    useEffect(() => {
    if (!loading) storage.set(KEYS.ITEM, todos);
    }, [todos, loading]);

    if (loading) {
        return (
            <View style={[styles.container, styles.center]}>
                <ActivityIndicator size="large" color={COLORS.cyan} />
                <Text style={styles.loadingText}>กําลังอ่านข้อมูลจากเครื่อง...</Text>
            </View>
        );
    }

    const addTodo = () => {
        const trimmed = text.trim()
        if (trimmed.length === 0) return
        setTodos((prev) => [
            { id: Date.now().toString(), text: trimmed, done: false },
            ...prev
        ])
        setText('')
    }

    const toggleTodo = (id) => setTodos((prev) =>
        prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)))

    const deleteTodos = (id) => setTodos((prev) => prev.filter((task) => task.id !== id))

    const deleteCompletedTodos = () => {
        setTodos((prev) => prev.filter((task) => !task.done))
    }

    const clearTodos = () => {
        Alert.alert('ล้างทั้งหมด', 'ต้องการลบรายการทั้งหมดหรือไม่', [
            { text: 'ยกเลิก', style: 'cancel' },
            { text: 'ลบทั้งหมด', style: 'destructive', onPress: () => setTodos([]) },
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo Screen</Text>
            <View style={styles.row}>

                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                    placeholder='เพิ่มสิ่งที่ต้องทำ'
                    placeholderTextColor={COLORS.textDim}
                />
                <TouchableOpacity style={styles.addButton} onPress={addTodo}>
                    <Text style={styles.addText}>เพิ่ม</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.secondaryButton} onPress={deleteCompletedTodos}>
                    <Text style={styles.secondaryText}>ลบที่เสร็จแล้ว</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clearButton} onPress={clearTodos}>
                    <Text style={styles.clearText}>ล้างทั้งหมด</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => toggleTodo(item.id)}
                        onLongPress={() => deleteTodos(item.id)}>
                        <Text style={[styles.itemText, item.done && styles.itemDone]}>{item.text}</Text>
                    </TouchableOpacity>
                )}
            />
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
        actions: { flexDirection: 'row', gap: 10, marginBottom: 14 },
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
        secondaryButton: {
            borderWidth: 1, borderColor: COLORS.border, borderRadius: 10,
            paddingHorizontal: 14, paddingVertical: 10,
        },
        secondaryText: { color: COLORS.textDim, fontSize: 14, fontWeight: '600' },
        clearButton: {
            borderWidth: 1, borderColor: COLORS.red, borderRadius: 10,
            paddingHorizontal: 14, paddingVertical: 10,
        },
        clearText: { color: COLORS.red, fontSize: 14, fontWeight: '600' },
        item: {
            backgroundColor: COLORS.card, borderWidth: 1, borderColor: COLORS.border,
            borderRadius: 10, padding: 14, marginBottom: 8
        },
        itemText: { color: COLORS.text, fontSize: 16 },
        itemDone: { color: COLORS.textDim, textDecorationLine: 'line-through' },
        center: { alignItems: 'center', justifyContent: 'center', gap: 12 },
        loadingText: { color: COLORS.textDim, fontSize: 14 },
    });

export default TodoScreen