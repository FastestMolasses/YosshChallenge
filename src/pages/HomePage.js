/**
 * The home page will display all the recent expenses for the user
 * It will also have the 'Create Expense' button, which will take
 * the user to another screen to add an expense
 */

import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import AppStyle from '../styles/AppStyle';

import Card from '../components/Card';
import Header from '../components/Header';
import { MyStatusBar } from '../components/CPStatusBar';

export default class HomePage extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            data: [],
        };
    }

    /**
     * This function will be used to render each item in the list
     */
    renderItem = ({item}) =>
    {
        return;
    }

    headerComponnet = () =>
    {
        return <Header text='Hello' />
    }

    render()
    {
        return (
            <SafeAreaView style={styles.container}>
                <MyStatusBar
                    backgroundColor={AppStyle.primaryColor}
                    barStyle="light-content"
                />

                <FlatList
                    style={styles.flatList}    
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                    ListHeaderComponent={this.headerComponnet}
                />
            </SafeAreaView>
        );
    }
}


// Stores all the styling data for this component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyle.primaryColor,
    },
    flatList: {
        backgroundColor: AppStyle.white,
    },
});
