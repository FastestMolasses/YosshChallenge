/**
 * The home page will display all the recent expenses for the user
 * It will also have the 'Create Expense' button, which will take
 * the user to another screen to add an expense
 */

import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native';
import AppStyle from '../styles/AppStyle';

import Card from '../components/Card';
import Header from '../components/Header';
import BigButton from '../components/BigButton';
import { MyStatusBar } from '../components/CPStatusBar';

export default class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { date: '01/02/18', price: 92.37, vat: 20.0, reason: 'Employee costs' },
                { date: '01/02/18', price: 123.42, vat: 10.0, reason: 'Electricity bill' },
                { date: '01/02/18', price: 33.20, vat: 24.23, reason: 'Water bill' },
                { date: '01/02/18', price: 89.09, vat: 18.09, reason: 'Ad campaign' },
                { date: '01/02/18', price: 40.23, vat: 6.02, reason: '' },
            ],
        };
    }

    /**
     * This function will be used to render each item in the list
     */
    renderItem = ({ item }) => {
        return <Card data={item} />
    };

    headerComponent = () => {
        return <Header text="Hello" backgroundColor={AppStyle.primaryColor} />;
    };

    itemSeparator = () => {
        return (
            <View
                style={{
                    backgroundColor: 'grey',
                    height: 1,
                    marginHorizontal: 25,
                }}
            />
        );
    };

    goToAddExpense = () =>
    {
        this.props.navigation.navigate('AddExpense');
    }    

    render() {
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
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={this.itemSeparator}
                    ListHeaderComponent={this.headerComponent}
                />
                
                <BigButton text='Add Expense' onPress={this.goToAddExpense} backgroundColor={AppStyle.secondaryColor} />
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
