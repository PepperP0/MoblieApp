import { useState } from 'react';
import { SQLiteProvider } from 'expo-sqlite';
import { StyleSheet, Text, View, StatusBar, Pressable } from 'react-native';
import { colors } from './src/styles/theme';
import { styless } from './src/styles/appStyles';
import { DATABASE_NAME,initDb } from './src/db/database';
import RegisterScreen from './src/screens/RegisterScreen';
import StudentListScreen from './src/screens/StudentsListScreen';

export default function App() {

  const [tab,setTab] = useState('list');
  
  const [reloadKey, setReloadKey] = useState(0);
  
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor={colors.bg}/>
    <SQLiteProvider databaseName={DATABASE_NAME} onInit={initDb}>
      
      <View style={styles.container}>
        <View style={styless.header}>
          <Text style={styless.title}>ระบบลงทะเบียนนิสิต</Text>
        </View>

        <View style={styless.tabs}>
        <TabButton 
        label='ลงทะเบียน'
        active={tab==='register'}
        onPress={()=>setTab('register')}/>

        <TabButton 
        label='รายชื่อ'
        active={tab==='list'}
        onPress={()=>setTab('list')}/>
        
      </View>
        <View style={styles.screen}>
          {tab === 'register' ? (
            <RegisterScreen onRegisterScreen={() => setReloadKey((k) => k + 1)} />
          ) : (
            <StudentListScreen reloadKey={reloadKey} />
          )}
        </View>
      </View>

    </SQLiteProvider>
    </>
  );
}
function TabButton({label, active, onPress}){
  return(
    <Pressable style={[styless.tab, active && styless.tabActive]} onPress={onPress}>
    <Text style={[styless.tabText, active && styless.tabTextActive]}>
    {label}
    </Text>
    </Pressable>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    width: '100%',
    zIndex: 0,
  },
});
