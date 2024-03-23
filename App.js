import React,{useState} from 'react';
import {StyleSheet,Text, View, FlatList, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';


const App = () => {
  const [todo,setTodo] = useState([]);
  const [newTodoText,setNewTodoText] = useState('');

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
  return (
   
   <SafeAreaView style={styles.container}>
      
      <TextInput 
        style= {styles.input}
        placeholder='new task' 
        onChangeText={(text) => setNewTodoText(text)}
        value={newTodoText} 
      />
      
      <TouchableOpacity  style= {styles.addButton}  onPress={add}>
        <Text style= {styles.buttonText} > ADD </Text>
      </TouchableOpacity>

      <View style={styles.wrapper} >
        <Text style={styles.title}> My Tasks </Text>
        <FlatList
            data={todo}
            renderItem={({item,index}) => (
              <View style={styles.items}> 
                  <Text style={styles.itemText}>{item.text}</Text>
                    <TouchableOpacity  style= {styles.rmvBut}  onPress={() => remove(index)} >
                       <Text style= {styles.rmvbuttonText} > X </Text>
                    </TouchableOpacity>
              </View>
            )}    
            contentContainerStyle={{
              maxHeight: todo.length * 60, // Adjust based on item height
            }}
        />
        
      </View>

    </SafeAreaView>

   
  );
};


export default App

const styles = StyleSheet.create({
  begin:{
    backgroundColor:'#B63B58',
    marginBottom: 11,
  
  },

  container:{
    flex: 1,
    backgroundColor: '#1C1C1C',
    paddingTop: 100,
    paddingHorizontal:40,
    paddingBottom:50,
  },
  wrapper:{
    paddingHorizontal:5,
    marginTop:5,
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title:{
    //fontWeight: 'bold',
    textAlign: 'center',
    fontSize:24,
    color: '#B94762',
    marginBottom:32,
    marginTop:12,
   // fontfamily:' lucida grande, tahoma, verdana, arial, sans-serif',
  },
  items:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#736E70',
    marginVertical: 9,
  },
  itemText: {
    fontSize: 16,
    color: '#F1E7EB',
  },
  input:{
    height:60,
    borderRadius:10,
    borderColor: '#ffff',
    borderWidth:2,
    padding:12,
    marginVertical:12,
    marginBottom:35,
    backgroundColor: '#333333',
    color:'#F1E5E5',
  },
  addButton:{
    backgroundColor: '#B63B58',
    paddingHorizontal:13,
    paddingVertical:10,
    marginBottom:3,
    height:60,
    color: '#7036C9',
    borderRadius:23,
    alignItems: 'center',
    alignSelf:'flex-end',
    
    
  },
  buttonText:{
   fontSize:16,
   paddingVertical:8,
  },
  rmvBut:{
    height: 22, 
    width: 22,
    borderRadius: 50, 
    backgroundColor: '#B63B58',
    justifyContent: 'center', 
    alignItems: 'center',
  
  },
  rmvbuttonText:{
    fontSize:16,
    color: '#000000',
  }
})