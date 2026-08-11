import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button} from 'react-native';

// ========== ใบงาน ข้อ 2: Name Input (string) ==========
export default function Ex2NameInput({ navigation }) {

  // ===== STATE =====
  const [name, setName] = useState('');

  return (
    <View style={s.container}>
      <Text style={s.label}>ชื่อของคุณ</Text>

      <TextInput
        style={s.input}
        placeholder="พิมพ์ชื่อที่นี่..."
        placeholderTextColor="#6e7681"
        value={name}
        onChangeText={setName}
      />

      <View style={s.preview}>
        <Text style={s.greet}>
          สวัสดี {name === '' ? '...' : name} ครับ
        </Text>

        <Text style={s.meta}>
          จำนวนตัวอักษร: {name.length}
        </Text>
      </View>
      <Button title='Go to Ex3' 
      onPress={() => navigation.navigate('Ex3')} />
    </View>
  );
}

// ===== STYLE =====
const s = StyleSheet.create({
  container: {
    padding: 20,
    gap: 8,
  },

  label: {
    color: '#8b949e',
    fontSize: 14,
    marginBottom: 4,
  },

  input: {
    borderWidth: 1,
    borderColor: '#30363d',
    backgroundColor: '#161b22',
    color: '#c9d1d9',
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
  },

  preview: {
    marginTop: 16,
    backgroundColor: '#161b22',
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#30363d',
  },

  greet: {
    color: '#61dafb',
    fontSize: 20,
    fontWeight: '700',
  },

  meta: {
    color: '#8b949e',
    fontSize: 14,
    marginTop: 6,
  },
});