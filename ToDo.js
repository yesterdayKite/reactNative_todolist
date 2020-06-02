import React, {Component} from "react";
//import React from "react"로만 하면 밑에 TodoClass가
//export default class ToDo extends React.Component {} 라고 써야한다.
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput} from "react-native";

const {width, height} = Dimensions.get("window");

export default class ToDo extends Component{
	state = {
		isEditing : false,
		isCompleted : false,
		todoValue : ""
	};
	render(){
		const {isCompleted, isEditing, todoValue} = this.state;
		const {text} = this.props;
		return(
			<View style = {styles.container}>
				<View style = {styles.column}>
				<TouchableOpacity onPress = {this._toggleComplete}>
					<View style = {[
						styles.circle,
						isCompleted ? styles.completedCircle : styles.uncompletedCircle]} />
				</TouchableOpacity>
				{isEditing ?
				(<TextInput
					style = {[
						styles.input,
						styles.text,
						isCompleted ? styles.completedText : styles.uncompletedText
					]}
					value = {todoValue}
					multiline = {true}
					onChangeText = {this._controlInput}
					returnKeyType = {"done"}
					onBlur = {this._finishEditing}
				/>) :
				(<Text
					style = {[
					styles.text,
					isCompleted ? styles.completedText : styles.uncompletedText
					]}>{text}
				</Text>
				)}
				</View>
					{isEditing ? (
						<View style = {styles.actions}>
							<TouchableOpacity onPress = {this._finishEditing}>
								<View style = {styles.actionContainer}>
									<Text style = {styles.actionText}>✔️</Text>
								</View>
							</TouchableOpacity>
						</View>
					) : (
						<View style = {styles.actions}>
							<TouchableOpacity onPressOut = {this._startEditing}>
								<View style = {styles.actionContainer}>
									<Text style = {styles.actionText}>✏️</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<View style = {styles.actionContainer}>
									<Text style = {styles.actionText}>X</Text>
								</View>
							</TouchableOpacity>
						</View>
					)}
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
	_startEditing = () => {
		const { text} = this.props;
		this.setState({
			isEditing : true,
			todoValue : text
		});
	};
	_finishEditing = () => {
		this.setState({
			isEditing : false
		});
	};
	_controlInput = (text) => {
		this.setState({
			todoValue : text
		})
	}
}


const styles = StyleSheet.create({
	container : {
		width : width - 50,
		borderBottomColor : "#bbb",
		borderBottomWidth : StyleSheet.hairlineWidth,
		flexDirection : "row",
		alignItems : "center",
		justifyContent : "space-between"
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
	},
	completedText : {
		color : "#bbb",
		textDecorationLine : "line-through"
	},
	uncompletedText : {
		color : "#353535"
	},
	column : {
		flexDirection : "row",
		alignItems : "center",
		width : width / 2,
		justifyContent : "space-between"
	},
	actions : {
		flexDirection : "row"
	},
	actionContainer : {
		marginVertical : 10,
		marginHorizontal : 10,
	},
	input : {
		marginVertical : 15,
		width : width / 2

	}
});
