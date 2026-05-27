//have different to dos in the list

import { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function todos({ navigation, route }) {
  const { listName, listID } = route.params;
  const [todos, settodos] = useState([]);
  const [newtodos, setnewtodos] = useState('');

  useEffect(() => {
    navigation.setOptions({ title: "List: " + listName,
    headerStyle: { backgroundColor: '#528590c7' },
    headerTintColor: '#fff',}); //title of to do list selected
  }, []);

  const addtodos = () => {
    if (!newtodos.trim()) return;
    settodos([...todos, {id: Date.now(), description: newtodos.trim(), status: false}]);
    setnewtodos('');
  };

  const toggletodo = (id) => {
    settodos(todos.map(todo=>todo.id===id ? {...todo, status: !t.status} : todo));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Note: Click on checkbox to mark completion</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.todoinfo} onPress={() => toggletodo(item.id)}>
            <Text style={styles.statuscheck}>{item.status ? '☑' : '☐'}</Text>
            <Text style={[styles.todotext, item.status && styles.completiontext]}>{item.description}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No to dos yet. Add one now.</Text>}
      />
      <View style={styles.inputrowstyle}>
        <TextInput style={styles.input} placeholder="Input new to do here" value={newtodos} onChangeText={setnewtodos} />
        <TouchableOpacity style={styles.addbutton} onPress={addtodos}>
          <Text style={styles.addbutton_text}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  todoinfo: { flexDirection: 'row', alignItems: 'center', padding: 12, borderRadius: 12, backgroundColor: '#d1e2e6', marginBottom: 10, elevation: 2 },
  statuscheck: { fontSize: 25, marginRight: 10 },
  todotext: { fontSize: 15, flex: 1 },
  completiontext: { textDecorationLine: 'line-through', color: '#b5b2b2' },
  empty: { textAlign: 'center', marginTop: 40, color: '#aaa' },
  inputrowstyle: { flexDirection: 'row', marginTop: 16 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginRight: 8 },
  addbutton: { backgroundColor: '#528590c7', borderRadius: 25, width: 45, height: 45, justifyContent: 'center', alignItems: 'center' },
  addbutton_text: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#aaa', marginBottom: 16 },

});