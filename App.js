import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListsScreen from './screens/ListsScreen';
import TodoScreen from './screens/TodoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lists">
        <Stack.Screen name="Lists" component={ListsScreen} options={{ title: 'My Lists' }} />
        <Stack.Screen name="Todos" component={TodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}