//have different to dos in the list

import { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function todos({ navigation, route }) {
  const { listName } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: listName + " To Do List"});
  }, []);

  //to add to dos in this list
  return (
    <View>
        <Text>To Do List Screen</Text> 
    </View>
  );
}