import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { QUESTIONS } from '../data';
import { colors } from '../theme';

// ========== หน้าหลัก (ต้องทำ) ==========
export default function MainScreen() {
  // TODO 1: สร้าง state — current (คำถามที่แสดงตอนนี้) และ history (array คำถามที่สุ่มมาแล้ว)


  // TODO 2: ฟังก์ชัน pickRandom()
  //   - สุ่ม 1 คำถามจาก QUESTIONS
  //   - setCurrent เป็นคำถามนั้น และเพิ่มลง history (สร้าง array ใหม่เสมอ)


  // TODO 3: useEffect ที่มี [] — ตอนเข้าหน้าให้สุ่มคำถามแรกอัตโนมัติ (ทำครั้งเดียว)


  return (
    <View style={styles.container}>
      {/* TODO 4: แสดง current เป็นข้อความใหญ่ตรงกลาง */}
      <Text style={styles.placeholder}>ยังไม่ได้ทำ — ดูใบงาน</Text>

      {/* TODO 5: ปุ่ม "สุ่มใหม่" กดแล้วเรียก pickRandom */}

      {/* TODO 6: FlatList แสดง history โดยใช้ component HistoryItem ที่สร้างเอง */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  placeholder: { color: colors.muted, fontSize: 16, textAlign: 'center', marginTop: 40 },
  // TODO: เพิ่ม style ของ current / ปุ่ม / list ตามต้องการ
});
