import { useState } from 'react'; 
import { View, Text, TouchableOpacity, StyleSheet ,Button } from 'react-native'; 

// ========== ใบงาน ข้อ 8: แยก vs รวม state ========== 
export default function Ex8StatePatterns({ navigation }) { 
  // ===== STATE เติมเอง ===== 
  
  // แบบแยก: 
  // (1) ประกาศ loading (boolean, false), error (null), data (null) เป็น 3 state แยกกัน 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // แบบรวม: 
  // (2) ประกาศ status เป็นออบเจกต์เดียว { loading: false, error: null, data: null } 
  const [status, setStatus] = useState({ loading: false, error: null, data: null }); 

  // (3) loadSeparate: ตั้ง loading=true, error=null, data=null แล้วหลัง 800ms 
  // สุ่มผลสำเร็จล้มเหลว/ ตั้ง loading=false และ setData/setError ตามผล 
  const loadSeparate = () => { 
    setLoading(true);
    setError(null);
    setData(null);

    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // สุ่มความสำเร็จ 50%
      if (isSuccess) {
        setData('โหลดสำเร็จ (42)');
        setError(null);
      } else {
        setData(null);
        setError('โหลดล้มเหลว');
      }
      setLoading(false);
    }, 800);
  }; 

  // (4) loadCombined: ตั้ง status ทั้งชุดเป็นกำลังโหลด แล้วหลัง 800ms 
  // ตั้ง status ใหม่ทั้งก้อนตามผล เปลี่ยนพร้อมกันในครั้งเดียว 
  const loadCombined = () => { 
    setStatus({ loading: true, error: null, data: null });

    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // สุ่มความสำเร็จ 50%
      if (isSuccess) {
        setStatus({ loading: false, data: 'โหลดสำเร็จ (42)', error: null });
      } else {
        setStatus({ loading: false, data: null, error: 'โหลดล้มเหลว' });
      }
    }, 800);
  }; 

  return ( 
    <View style={s.container}> 
      {/* แบบแยกกรอบ */}
      <View style={s.panel}> 
        <Text style={s.panelTitle}>แบบแยก (3 state)</Text> 
        
        {/* (5) แสดงข้อความตามสถานะ: loading / error / data / ยังไม่โหลด */} 
        <Text style={s.result}>
          {loading ? 'กำลังโหลด...' : error ? error : data ? data : 'ยังไม่โหลด'}
        </Text> 
        
        <TouchableOpacity style={s.btn} onPress={loadSeparate}> 
          <Text style={s.btnText}>โหลดข้อมูล</Text> 
        </TouchableOpacity> 
      </View> 
  
      {/* แบบรวมกรอบ */}
      <View style={s.panel}> 
        <Text style={s.panelTitle}>แบบรวม (1 object)</Text> 
        
        {/* (6) แสดงข้อความตาม status.loading / status.error / status.data / ยังไม่โหลด */} 
        <Text style={s.result}>s
          {status.loading ? 'กำลังโหลด...' : status.error ? status.error : status.data ? status.data : 'ยังไม่โหลด'}
        </Text> 
        
        <TouchableOpacity style={s.btn} onPress={loadCombined}> 
          <Text style={s.btnText}>โหลดข้อมูล</Text> 
        </TouchableOpacity> 
      </View> 
      <Button title='Go to Ex1' 
            onPress={() => navigation.navigate('Ex1')} />
    </View> 
  ); 
} 

// ===== STYLE เติมเอง ===== 
const s = StyleSheet.create({ 
  container: { 
    padding: 20, 
    gap: 14 
  }, 
  panel: { 
    backgroundColor: '#161b22', 
    borderWidth: 1, 
    borderColor: '#30363d', 
    borderRadius: 12, 
    padding: 16, 
    gap: 10 
  }, 
  panelTitle: { 
    color: '#61dafb', 
    fontSize: 16, 
    fontWeight: '700' 
  }, 
  result: { 
    color: '#c9d1d9', 
    fontSize: 18, 
    fontWeight: '600' 
  }, 
  btn: { 
    backgroundColor: '#238636', 
    paddingVertical: 12, 
    borderRadius: 10, 
    alignItems: 'center' 
  }, 
  btnText: { 
    color: '#ffffff', 
    fontSize: 15, 
    fontWeight: '600' 
  }, 
});