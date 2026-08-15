import { StyleSheet, View, FlatList, Text } from 'react-native';
import { colors } from '../theme'; 
import { Heros } from '../data'; 
import Herocard from '../component/Heroscard'; 

export default function FavHeros({ Fav, onToggleLike }) {
  // กรองเอาเฉพาะฮีโร่ที่ถูกกดหัวใจ (มี id อยู่ใน Array Fav)
  const favoriteHeros = Heros.filter(hero => Fav.includes(hero.id));

  return (
    <View style={styles.container}>
      {/* ถ้ามีฮีโร่ที่ชอบให้แสดงรายการ ถ้าไม่มีให้แสดงข้อความ */}
      {favoriteHeros.length > 0 ? (
        <FlatList
          data={favoriteHeros}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <Herocard 
              item={item} 
              isFav={true} // หน้าต่างนี้คือหน้าที่โชว์ตัวที่กด Fav ไว้แล้วเสมอ เลยส่ง true ไปได้เลย
              onToggleLike={onToggleLike} 
            />
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>ยังไม่มีฮีโร่ที่คุณชื่นชอบเลย 😢</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg, 
  },
  list: { padding: 10 },
  row: { justifyContent: 'space-between' },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: colors.muted,
    fontSize: 18,
  }
});