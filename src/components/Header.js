/**
 * A basic, reusable header component to be put on top of a page
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppStyle from '../styles/AppStyle';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}

// Stores all the styling data for this component
const styles = StyleSheet.create({
    container: {
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppStyle.primaryColor,
    },
    text: {
        fontSize: AppStyle.headerFontSize,
        color: AppStyle.white,
        fontWeight: 'bold',
    },
});
