import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screen/HomeScreen';
import DetailScreen from './src/Screen/DetailScreen';
import CounterScreen from './src/Screen/CounterScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
          <Stack.Screen name='Detail' component={DetailScreen}></Stack.Screen>
          <Stack.Screen name='Counter' component={CounterScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
