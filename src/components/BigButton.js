/**
 * A big button component
 */

import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import AppStyle from '../styles/AppStyle';

export default class BigButton extends React.Component
{
    render()
    {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}    

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppStyle.secondaryColor,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: AppStyle.subHeaderFontSize,
        color: AppStyle.white,
    },
});
