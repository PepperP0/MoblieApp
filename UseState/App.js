import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ex1Counter from './Ex/Ex1';
import Ex2NameInput from './Ex/Ex2';
import Ex3Toggle from './Ex/Ex3';
import Ex4ProfileForm from './Ex/Ex4';
import Ex5ProfileForm from './Ex/Ex5';
import Ex6TodoList from './Ex/Ex6';
import Ex7LazyInit from './Ex/Ex7';
import Ex8StatePatterns from './Ex/Ex8';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Ex1'>
          <Stack.Screen name='Ex1' component={Ex1Counter} />
          <Stack.Screen name='Ex2' component={Ex2NameInput} />
          <Stack.Screen name='Ex3' component={Ex3Toggle} />
          <Stack.Screen name='Ex4' component={Ex4ProfileForm} />
          <Stack.Screen name='Ex5' component={Ex5ProfileForm} />
          <Stack.Screen name='Ex6' component={Ex6TodoList} />
          <Stack.Screen name='Ex7' component={Ex7LazyInit} />
          <Stack.Screen name='Ex8' component={Ex8StatePatterns} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}