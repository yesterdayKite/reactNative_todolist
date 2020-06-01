import React, {Component} from "react";
//import React from "react"로만 하면 밑에 TodoClass가
//export default class ToDo extends React.Component {} 라고 써야한다.
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

export default class ToDo extends Component{
	render(){
		return(
			<View>
				<Text>Hello I'm a todo</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({

})
