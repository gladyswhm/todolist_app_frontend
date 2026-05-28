//shows the different lists of to dos
//features: can add multiple lists

import { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Listsummary({ navigation }) {

    const [lists, setlists] = useState([]);
    const [newlists, setnewlists] = useState('');

    const myAPI_URL = 'http://10.0.2.2:8000/api';

    useEffect(() => {
        fetchLists();
    }, []);

    const fetchLists = async () => {
        const response = await fetch(`${myAPI_URL}/todo-lists`);
        const data = await response.json();
        setlists(data);
    };
    //changed this to allow saving into the database through API   
    // const addnewlist = () => {
    //     if (!newlists.trim()) return;
    //     setlists([...lists, { id: Date.now(), name: newlists.trim() }]);
    //     setnewlists('');
    // };

    const addnewlist = async () => {
        if (!newlists.trim()) return;
        const response = await fetch(`${myAPI_URL}/todo-lists`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titlename: newlists.trim() }),
        });
        const newcreatedlist = await response.json();
        setlists([...lists, newcreatedlist]);
        setnewlists('');
    };

    return (
        <View style={styles.container}>
        <Text style={styles.subtitle}>Lists You Have Created:</Text>
        <FlatList
            data={lists}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('Todos', { listID: item.id, listName: item.titlename })}>
                <Text style={styles.listName}>{item.titlename}</Text>
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