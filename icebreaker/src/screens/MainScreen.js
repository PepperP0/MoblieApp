import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { colors } from '../theme';
import HistoryItem from '../component/HistoryItem';
import { QUESTIONS } from '../data';

// ========== หน้าหลัก (ต้องทำ) ==========
export default function MainScreen() {
  // TODO 1: สร้าง state — current (คำถามที่แสดงตอนนี้) และ history (array คำถามที่สุ่มมาแล้ว)
  const [history, setHistory] = useState([]);
  const [question, setQuestion] = useState('');
  const [count, setCount] = useState(0); 
  const [number, setNumber] = useState(0);
  // TODO 2: ฟังก์ชัน pickRandom()
  //   - สุ่ม 1 คำถามจาก QUESTIONS
  //   - setCurrent เป็นคำถามนั้น และเพิ่มลง history (สร้าง array ใหม่เสมอ)
  const pickRandom = () => {
    const randomQuestion = Math.floor(Math.random() * QUESTIONS.length);
    const Q01 = QUESTIONS[randomQuestion];

    //ข้อโบนัส เช็กว่าถ้าสุ่มได้คำถามเดิม ให้เรียกฟังก์ชันตัวเองซ้ำเพื่อสุ่มใหม่
    if (Q01 === question) {
      return pickRandom();
    }
    // อัปเดตสเตท ใช้สำหรับรับสเตทล่าสุด มาเป็นลำดับบนสุดเรื่อยๆ
    setQuestion(Q01);
    setCount(count + 1);
    setHistory(prev => [Q01, ...prev]);

  };

  // TODO 3: useEffect ที่มี [] — ตอนเข้าหน้าให้สุ่มคำถามแรกอัตโนมัติ (ทำครั้งเดียว)
  useEffect(() => {
    const random = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
    setQuestion(random);
    setHistory([random]);
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

      {/* โบนัส: ปุ่มล้างประวัติ (ล้างทั้งจำนวนครั้งและประวัติ) */}
      <TouchableOpacity style={styles.btn2} onPress={() => {
        setCount(0);
        setHistory([]); 
      }}>
        <Text style={styles.text}>ล้างประวัติและการสุ่ม</Text>
      </TouchableOpacity>

      {/* TODO 6: FlatList แสดง history โดยใช้ component HistoryItem ที่สร้างเอง */}
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          // จำนวน history ทั้งหมด ลบด้วย index ปัจจุบัน เช่น มี 5 คำถาม ตัวบนสุด (index 0) จะได้ 5 - 0 = ลำดับที่ 5
          number = history.length - index; 
          return <HistoryItem text={item} number={number} />;
        }}
        contentContainerStyle={{ paddingBottom: 20 }} 
      />
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