import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { colors, TOP_INSET } from './src/theme';
import { QUOTES } from './src/data';

export default function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // console.log(QUOTES[Math.floor(Math.random()*6)])
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    console.log(quote);
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar style="light" />

      <View style={[styles.header, { paddingTop: TOP_INSET + 10 }]}>
        <Text style={styles.title}> คำคมวันละคน เอ้ยย!!</Text>
      </View>

      <View style={styles.container}>
        <View style={[styles.card, styles.stable]}>
          <Text style={styles.cardHead}>ทำงานครั้งเดียวตอนเลิก</Text>
          <Text style={styles.row}>คำคมประจำวัน</Text>
          <Text style={styles.quote}>{quote}</Text>
          <Text style={styles.note}>กด re-renderแล้วยังไม่เปลี่ยน</Text>
        </View>

        <Text style={styles.count}>จำนวนครั้งที่กด re-render {count}</Text>

        <TouchableOpacity style={styles.btn} onPress={() => setCount(count + 1)}>
          <Text style={styles.text}>Re-render</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.surface,
  },
  title: {
    color: colors.cyan,
    fontSize: 22,
    fontWeight: '700',
  },
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 16,
    gap: 6,
    backgroundColor: colors.surface,
  },
  stable: {
    borderColor: colors.cyan, 
  },
  live: {
    borderColor: colors.heart,
  },
  cardHead: {
    color: colors.cyan,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  row: {
    color: colors.text,
    fontSize: 15,
  },
  val: {
    fontWeight: '600',
    color: colors.text,
  },
  quote: {
    color: colors.heart, 
    fontSize: 18,
    fontWeight: '600',
    marginTop: 2,
  },
  note: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 4,
  },
  count: {
    color: colors.text,
    fontSize: 18,
    marginTop: 6,
  },
  text: {
    color: '#ffffff', 
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    margin: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: colors.heart, 
    borderRadius: 12,
    alignItems: 'center', 
  },
});