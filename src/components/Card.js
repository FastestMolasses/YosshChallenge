/**
 * This card component will be used to display all the expense data
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Card extends React.Component
{
    render()
    {
        return (
            <View style={styles.container}/>
        );
    }
}    

// Stores all the styling data for this component
const styles = StyleSheet.create({
    container: {

    },
});
