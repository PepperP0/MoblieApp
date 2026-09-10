import { SQLiteProvider } from 'expo-sqlite';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { colors } from './src/styles/theme';
import { styless } from './src/styles/appStyles';
import { DATABASE_NAME,initDb } from './src/db/database';
import RegisterScreen from './src/screens/RegisterScreen';

export default function App() {
  return (
    <>
    <SQLiteProvider databaseName={DATABASE_NAME} onInit={initDb}>
      <StatusBar barStyle='light-content'/>
      <View style={styles.container}>
        <View style={styless.header}>
          <Text style={styless.title}>ระบบลงทะเบียนนิสิต</Text>
        </View>
      <RegisterScreen/>
      </View>

    </SQLiteProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
