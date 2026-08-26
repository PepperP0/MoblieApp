import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from './src/constants/colors';
import TodoScreen from './src/constants/screen/TodoScreen';
export default function App() {
  return (
    <>
    <StatusBar barStyle={'light-content'} backgroundColor={COLORS.bg}/>
    <TodoScreen/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
