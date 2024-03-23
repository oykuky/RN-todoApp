import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');

  const add = () => {
    if (newTodoText.trim()) {
      setTodo([...todo, { text: newTodoText }]);
      setNewTodoText('');
    }
  };

  const remove = (index) => {
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };
  const removeAll= () =>{
    setTodo([]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>To Do App</Text>
        <TextInput
          style={styles.input}
          placeholder="New task"
          onChangeText={(text) => setNewTodoText(text)}
          value={newTodoText}
        />
        <TouchableOpacity style={styles.addButton} onPress={add}>
          {/* <Text style={styles.buttonText}>ADD</Text> */}
          <Icon
            style={styles.buttonText}
            name="add-outline"
            size={27}
          />

        </TouchableOpacity>

        <TouchableOpacity style={styles.rmvallButton} onPress={removeAll}>
          <Text style={styles.rmvall}>Remove All</Text> 
          <Icon
                  style={styles.rmvbuttonText}
                  name="trash-outline"
                  size={25}
                />
        </TouchableOpacity>

      </View>

      <View style={styles.wrapper}>
        <FlatList
          data={todo}
          renderItem={({ item, index }) => (
            <View style={styles.items}>
              <Text style={styles.itemText}>{item.text}</Text>
              <TouchableOpacity style={styles.rmvBut} onPress={() => remove(index)}>
                {/* <Text style={styles.rmvbuttonText}>X</Text> */}
              
                <Icon
                  style={styles.rmvbuttonText}
                  name="trash-outline"
                  // color= '#F1E7EB'
                  size={23}
                />
              </TouchableOpacity>
            </View>
          )}
          contentContainerStyle={{ maxHeight: todo.length * 60 }} // Adjust based on item height
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E6FF', // Light pink background
  },
  header: {
    backgroundColor: '#FFD3E0', // Light pink for header section
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginBottom: 15,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#74788D',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  input: {
    height: 60,
    borderRadius: 10,
    borderColor: '#ffff',
    borderWidth: 2,
    padding: 12,
    marginBottom: 10, // Additional margin for spacing
    backgroundColor: '#FFFFFF', // White background for input
  },
  addButton: {
    backgroundColor: '#B63B58',
    paddingHorizontal: 13,
    paddingVertical: 10,
    height: 60,
    color: '#7036C9',
    borderRadius: 23,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontSize: 30,
    paddingVertical: 6,
    color:'#fff',
  },
  wrapper: {
    flex: 1, // Occupies remaining space
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#736E70',
    marginVertical: 9,
    marginHorizontal:17,
  },
  itemText: {
    fontSize: 17,
    color: '#F1E7EB',
  },
  rmvBut: {
    height: 23,
    width: 23,
    borderRadius: 50,
    backgroundColor: '#B63B58',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rmvbuttonText: {
    fontSize: 16,
    color: '#000000',
  },
  rmvallButton:{
    borderColor:'#fffff',
    backgroundColor:'#736E70',
    height:50,
    width:100,
    borderRadius:24,
    color:'#fff',
    padding: 12,
  },
  rmvall:{
    color:'#fff'
  },
  rmvbuttonText:{
    color:'#fff',
  }
});

export default App;
