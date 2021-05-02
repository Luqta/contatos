import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

import { capitalizeFirstLetter } from './src/util';

const AppNavigator = createStackNavigator({
	'Main': {
		screen: PeoplePage
	},
	'PeopleDetail': {
		screen: PeopleDetailPage,
		navigationOptions: ({ navigation }) => {
			const peopleName = capitalizeFirstLetter(
				navigation.state.params.people.name.first + " " + navigation.state.params.people.name.last
			);
			return({
				title: peopleName,
				headerTitleStyle:{
					color: '#f0f0f0',
					fontSize: 30,
				}
			});
		}
	}
},	{
	defaultNavigationOptions:{
		title: 'Pessoas',
		headerTintColor: '#f0f0f0',
		headerStyle:{
			backgroundColor: '#212121',
			borderBottomWidth: 1,
			borderBottomColor: '#c9c9c9'
		},
		headerTitleStyle:{
			color: '#f0f0f0',
			fontSize: 30,
			alignSelf: 'center'
		}
	}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;