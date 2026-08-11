import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

// ========== ใบงาน ข้อ 1: Counter (number) ========== 
export default function Ex1Counter({navigation}) {
    // ===== STATE เติมเอง() ===== 
    // (1) ประกาศ state ชื่อ count ชนิดตัวเลข ค่าเริ่มต้น 0 ได้ทั้ง( count และ setCount) 
    const [count, setCount] = useState(0) ; 

    return (
        < View style={s.container} >
            < Text style={s.number} > {count} </Text >
            < View style={s.row} >
                <TouchableOpacity style={s.btn} onPress={() => setCount(count - 1)}>
                    < Text style={s.btnText}>−ลด</Text >
                </TouchableOpacity >
                < TouchableOpacity style={[s.btn, s.primary]} onPress={() => setCount(count + 1)}> 
                    <Text style={s.btnText}> +เพิ่ม </Text >
                </TouchableOpacity >
            </View >
            < TouchableOpacity style={[s.btn, s.ghost]} onPress={() => setCount(0)}>
                < Text style={s.btnTextGhost}>Reset</Text >
            </TouchableOpacity >
            <Button title='Go to Ex2' onPress={() => navigation.navigate('Ex2')} />
        </View >
    );
}
// ===== STYLE เติมเอง() ===== 
const s = StyleSheet.create({ 
    container: { 
        padding: 20,          
        alignItems: 'center', 
        gap: 14               
    }, 
    number: { 
        fontSize: 72, 
        fontWeight: '800',    
        color: '#61dafb', 
        marginVertical: 20    
    }, 
    row: { 
        flexDirection: 'row', 
        gap: 12               
    }, 
    btn: { 
        backgroundColor: '#21262d', 
        borderWidth: 1,             
        borderColor: '#30363d',    
        paddingVertical: 12,        
        paddingHorizontal: 24,     
        borderRadius: 10,           
        minWidth: 110,              
        justifyContent: 'center',   
        alignItems: 'center'        
    }, 
    primary: { 
        backgroundColor: '#238636', 
        borderColor: '#238636'      
    }, 
    ghost: { 
        backgroundColor: 'transparent' 
    }, 
    btnText: { 
        color: '#c9d1d9',    
        fontSize: 16,         
        fontWeight: '600'   
    }, 
    btnTextGhost:{ 
        color: '#8b949e',     
        fontSize: 16,         
        fontWeight: '600'     
    }, 
});