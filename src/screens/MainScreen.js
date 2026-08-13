import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { QUESTIONS } from '../data';
import { colors } from '../theme';


// ========== หน้าหลัก (ต้องทำ) ==========
export default function MainScreen() {
  // TODO 1: สร้าง state — current (คำถามที่แสดงตอนนี้) และ history (array คำถามที่สุ่มมาแล้ว)
  const [history, setHistory] = useState([]);
  const [question, setQuestion] = useState('');
  const [count, setCount] = useState(0); 

  // TODO 2: ฟังก์ชัน pickRandom()
  //   - สุ่ม 1 คำถามจาก QUESTIONS
  //   - setCurrent เป็นคำถามนั้น และเพิ่มลง history (สร้าง array ใหม่เสมอ)
  const pickRandom = () => {
    const randomQuestion = Math.floor(Math.random() * QUESTIONS.length);
    const Q01 = QUESTIONS[randomQuestion];

    setQuestion(Q01);
    setCount(count + 1 );
  };

  // TODO 3: useEffect ที่มี [] — ตอนเข้าหน้าให้สุ่มคำถามแรกอัตโนมัติ (ทำครั้งเดียว)
  useEffect(() => {
    const random = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
    setQuestion(random);
  }, []);

  return (
    <View style={styles.container}>
      {/* TODO 4: แสดง current เป็นข้อความใหญ่ตรงกลาง */}
      <Text style={styles.title}>คำถามสุ่ม</Text>
      <View style={styles.card}>
        <Text style={styles.cardHead}>คำถามปัจจุบัน</Text>
        <Text style={styles.title}>{question}</Text>
      </View>

      {/* TODO 5: ปุ่ม "สุ่มใหม่" กดแล้วเรียก pickRandom */}
      <Text style={styles.note}> จำนวนครั้งที่กดสุ่มใหม่ {count} ครั้ง</Text>
      <TouchableOpacity style={styles.btn} onPress={pickRandom}>
        <Text style={styles.text}>สุ่มใหม่</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn2} onPress={()=>setCount(count-count)}>
        <Text style={styles.text}>ล้างจำนวนการสุ่ม</Text>
      </TouchableOpacity>

      {/* TODO 6: FlatList แสดง history โดยใช้ component HistoryItem ที่สร้างเอง */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 16, backgroundColor: colors.bg },
  title: { color: colors.cyan, fontSize: 22, fontWeight: '700' },
  card: { borderWidth: 2, borderColor: colors.border, borderRadius: 12, padding: 16, gap: 6, backgroundColor: colors.surface },
  cardHead: { color: colors.cyan, fontSize: 15, fontWeight: '700', marginBottom: 4 },
  quote: { color: colors.heart, fontSize: 18, fontWeight: '600', marginTop: 2 },
  row: { color: colors.text, fontSize: 15 },
  val: { fontWeight: '600', color: colors.text },
  note: { color: colors.muted, fontSize: 13, marginTop: 4 },
  text: { color: '#ffffff', fontSize: 20, fontWeight: 'bold' },
  btn: { margin: 10, paddingVertical: 15, paddingHorizontal: 25, backgroundColor: colors.green, borderRadius: 12, alignItems: 'center' },
  btn2: { margin: 2, paddingVertical: 15, paddingHorizontal: 25, backgroundColor: colors.muted, borderRadius: 12, alignItems: 'center' },
});