import React, {Component} from "react";
//import React from "react"로만 하면 밑에 TodoClass가
//export default class ToDo extends React.Component {} 라고 써야한다.
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

export default class ToDo extends Component{
	state = {
		isEditing : false,
		isCompleted : false
	};
	render(){
		const {isCompleted} = this.state;
		return(
			<View style = {styles.container}>
				<TouchableOpacity onPress = {this._toggleComplete}>
					<View style = {[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]} />
				</TouchableOpacity>
				<Text style = {styles.text}>Hello I'm a todo</Text>
			</View>
		);
	}
	_toggleComplete = () => {
		this.setState(prevState => {
			return {
				isCompleted : !prevState.isCompleted
			};
		});
	};
}


const styles = StyleSheet.create({
	container : {
		width : width - 50,
		borderBottomColor : "#bbb",
		borderBottomWidth : StyleSheet.hairlineWidth,
		flexDirection : "row",
		alignItems : "center"
	},
	circle : {
		width : 30,
		height : 30,
		borderRadius : 15,
		borderColor : "red",
		borderWidth : 3,
		marginRight : 20,
		marginLeft : 10
	},
	text : {
		fontWeight : "600",
		fontSize : 20,
		marginVertical : 20
	},
	completedCircle : {
		borderColor : "#bbb"
	},
	uncompletedCircle : {
		borderColor : "#F23657"
	}

});
