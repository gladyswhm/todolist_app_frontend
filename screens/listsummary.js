//shows the different lists of to dos
//features: can add multiple lists

import { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function listsummary({ navigation }) {

    const [lists, setLists] = useState([]);
    const [newListName, setNewListName] = useState('');

    const addNewList = () => {
        if (!newListName.trim()) return;
        setLists([...lists, { id: Date.now(), name: newListName.trim() }]);
        setNewListName('');
    };

    return (
        <View style={styles.container}>
        <Text style={styles.subtitle}>Lists</Text>
        <FlatList
            data={lists}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('Todos', { listId: item.id, listName: item.name })}>
                <Text style={styles.listName}>{item.name}</Text>
                <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
            )}
            ListEmptyComponent={<Text style={styles.empty}>No todo lists yet. Create one now.</Text>}
        />
        <View style={styles.inputRow}>
        <TextInput
            style={styles.input}
            placeholder="Enter a new list name here"
            value={newListName}
            onChangeText={setNewListName}
        />
        <TouchableOpacity style={styles.addButton} onPress={addNewList}>
            <Text style={styles.addButtonText}>Add New List</Text>
        </TouchableOpacity>
        </View></View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    listItem: { 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16, 
        borderRadius: 10,
        backgroundColor: '#5652523d',
        marginBottom: 10,
    },
    arrow: { fontSize: 20, color: '#aaa' },  listName: { fontSize: 16 },
    empty: { textAlign: 'center', marginTop: 40, color: '#aaa' },
    inputRow: { flexDirection: 'row', marginTop: 16 },
    input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginRight: 8 },
    addButton: { backgroundColor: '#41cb6a', borderRadius: 8, padding: 10, justifyContent: 'center' },
    addButtonText: { color: '#fff', fontWeight: 'bold' },
    subtitle: { fontSize: 14, color: '#aaa', marginBottom: 16 },
});