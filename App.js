import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Listsummary from './screens/listsummary';
import Todos from './screens/todos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lists">
        <Stack.Screen name="Lists" component={Listsummary} options={{ title: 'My Lists of To Dos',
          headerStyle: { backgroundColor: '#5194be' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="Todos" component={Todos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}