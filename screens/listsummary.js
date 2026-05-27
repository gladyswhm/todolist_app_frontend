//shows the different lists of to dos
//features: can add multiple lists

import { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function listsummary({ navigation }) {

    const [lists, setlists] = useState([]);
    const [newlists, setnewlists] = useState('');

    const addnewlist = () => {
        if (!newlists.trim()) return;
        setlists([...lists, { id: Date.now(), name: newlists.trim() }]);
        setnewlists('');
    };

    return (
        <View style={styles.container}>
        <Text style={styles.subtitle}>Lists You Have Created:</Text>
        <FlatList
            data={lists}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('Todos', { listId: item.id, listName: item.name })}>
                <Text style={styles.listName}>{item.name}</Text>
                <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
            )}
            ListEmptyComponent={<Text style={styles.empty}>No to do lists yet. Create one now.</Text>}
        />
        <View style={styles.inputRow}>
        <TextInput
            style={styles.input}
            placeholder="Enter a new list name here"
            value={newlists}
            onChangeText={setnewlists}
        />
        <TouchableOpacity style={styles.addbutton} onPress={addnewlist}>
            <Text style={styles.addbutton_text}>+</Text>
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
        backgroundColor: '#7ea0b676',
        marginBottom: 10,
    },
    arrow: { fontSize: 20, color: '#000000' },  listName: { fontSize: 16 },
    empty: { textAlign: 'center', marginTop: 40, color: '#aaa' },
    inputRow: { flexDirection: 'row', marginTop: 16 },
    input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginRight: 8 },
    addbutton: { backgroundColor: '#5194be', borderRadius: 25, width: 45, height: 45, justifyContent: 'center', alignItems: 'center' },
    addbutton_text: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
    subtitle: { fontSize: 14, color: '#aaa', marginBottom: 16 },
});