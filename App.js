import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import listsummary from './screens/listsummary';
import todos from './screens/todos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lists">
        <Stack.Screen name="Lists" component={listsummary} options={{ title: 'My Lists of To Dos' }} />
        <Stack.Screen name="Todos" component={todos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}