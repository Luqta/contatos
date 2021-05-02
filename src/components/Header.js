import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const Header = (props) => (
    <View style = {style.container}>
    <Text style ={style.title}>{ props.title}</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        marginTop: 25, 

        justifyContent: 'center',
        alignItems: 'center',
    },

    title:{
        fontSize: 45,
        color: '#f0f0f0'
    }
})

export default Header;