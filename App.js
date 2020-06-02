import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions,Platform, ScrollView } from 'react-native';
import ToDo from "./ToDo";


const {height, width} = Dimensions.get("window");
export default class App extends React.Component {
  state = {
    newToDo : ""
  };
  render() {
  const {newToDo} = this.setState;
  const {text} = this.props;
  return (
    <View style={styles.container}>
      <StatusBar barStyle= "light-content"/>
      <Text style = {styles.title}>yesterday🪁TODO</Text>
      <View style = {styles.card}>
        <TextInput
        style = {styles.input}
        placeholder = {"new To do"}
        value = {newToDo}
        onChangeText = {this._controlNewToDo}
        placeholderTextColor = {"#999"}
        returnKeyType = {"done"}
        autoCorrect = {false}
        />
        <ScrollView contentContainerStyle = {styles.toDos}>
          <ToDo text = {"hello I'm a ToDo~~~~"}/>
        </ScrollView>
      </View>
    </View>
  );
  }
  _controlNewToDo = text => {
    this.setState({
      newToDo : text
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474787',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    color : "white",
    fontSize : 30,
    marginTop : 50,
    fontWeight : "200",
    marginBottom : 30
  },
  card : {
    backgroundColor : "white",
    flex : 1,
    width : width - 25,
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10,
    ...Platform.select({
      ios : {
        shadowColor : "#bbb",
        shadowOpacity : 0.5,
        shadowRadius : 5,
        shadowOffset : {
          height : -1,
          width : 0
        }
      },
      android : {
        elevation : 3
      }
    })
  },
  input : {
    padding : 20,
    borderBottomColor : "#bbb",
    borderBottomWidth : 1,
    fontSize : 25,
  },
  toDos : {
    alignItems : "center",
    borderBottomColor : "#bbb",
    borderBottomWidth : StyleSheet.hairlineWidth,
    flexDirection : "row",
  }
});
