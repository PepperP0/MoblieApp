import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { colors, TOP_INSECT } from './src/theme'; 
import AllHeros from './src/Screen/AllHeros';
// 1. นำเข้าหน้า FavHeros
import FavHeros from './src/Screen/FavHeros'; 

export default function App() {
  const [Fav, setFav] = useState([]);
  
  // 2. สร้าง State สำหรับกำหนดว่าตอนนี้อยู่ Tab ไหน (ค่าเริ่มต้นคือ AllHeros)
  const [activeTab, setActiveTab] = useState('AllHeros');

  const toggleLike = (id) => {
    setFav((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.root}>
      <View style={[styles.header, { paddingTop: TOP_INSECT + 5
       }]}>
        {/* เปลี่ยนชื่อ Header ตามหน้าที่เปิดอยู่ */}
        <Text style={styles.title}>
          {activeTab === 'AllHeros' ? 'แกลเลอรี่ฮีโร่' : 'ฮีโร่ของฉัน'}
        </Text>
      </View>

      <View style={styles.body}>
        {/* 3. สลับหน้าจอโดยดูจากค่า activeTab */}
        {activeTab === 'AllHeros' ? (
          <AllHeros onToggleLike={toggleLike} Fav={Fav} />
        ) : (
          <FavHeros onToggleLike={toggleLike} Fav={Fav} />
        )}
      </View>

      <View style={styles.tabbar}>
        {/* 4. ส่งฟังก์ชันเปลี่ยนหน้าจอ (onPress) และสถานะปุ่ม (isActive) ไปที่ Component */}
        <Tabbottom 
          lebel='AllHeros' 
          isActive={activeTab === 'AllHeros'}
          onPress={() => setActiveTab('AllHeros')} 
        />
        <Tabbottom 
          lebel={`My Hero (${Fav.length})`} 
          isActive={activeTab === 'FavHeros'}
          onPress={() => setActiveTab('FavHeros')} 
        />
      </View>

      <ExpoStatusBar style="light" />
    </View>
  );
}

// 5. แก้ไข Tabbottom ให้รับค่า onPress และ isActive
const Tabbottom = ({ lebel, onPress, isActive }) => {
  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      {/* ถ้าเป็น Tab ที่กำลังเปิดอยู่ (isActive = true) ให้เปลี่ยนสีตัวหนังสือ */}
      <Text style={[styles.tabText, isActive && styles.tabActiveText]}>{lebel}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg, 
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border, 
    backgroundColor: colors.bg, 
  },
  title: {
    color: colors.cyan, 
    fontSize: 23,
    fontWeight: '700',
  },
  body: {
    flex: 1,
  },
  tabbar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.border, 
    backgroundColor: colors.surface,
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
  },
  tabText: {
    color: colors.muted, 
    fontSize: 16,
    fontWeight: '600',
  },
  tabActiveText: {
    color: colors.cyan, 
  },
});