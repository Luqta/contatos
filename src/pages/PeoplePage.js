import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			peoples: [],
			loading: false,
			error: false,
		};
	}

	componentDidMount(){
		this.setState({ loading: true});
		setTimeout(() => {
			axios
			.get('https://randomuser.me/api/?nat=br&results=20')
			.then(response => {
				const { results } = response.data
				this.setState({
					peoples: results,
					loading: false,
				});
			}).catch(error => {
				this.setState({ 
					loading: false,
					error: true 
				})
			})
		}, 1500);
	}

	renderPage() {
		if(this.state.loading){
			return <ActivityIndicator size="large" color="#212121"/>;
		}
		if (this.state.error){
			return <Text style={styles.error}>Ops... algo deu errado!!! D:</Text>
		}
		return( 
			<PeopleList 
				peoples ={this.state.peoples}
				onPressItem={(pageParams) => {
					this.props.navigation.navigate('PeopleDetail', pageParams);
				}} 
			/>
		)
	}
  	
	render(){
		return (
			<View style={styles.container}>	
				{ this.renderPage() }
				<StatusBar style="light" />
			</View>
  		);
	}

}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	error:{
		color: 'red',
		alignSelf: 'center',
		fontSize: 25
	}	
});
