import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    TextInput,
    DatePickerIOS,
} from 'react-native';
import AppStyle from '../styles/AppStyle';

import Header from '../components/Header';
import BigButton from '../components/BigButton';
import CPStatusBar from '../components/CPStatusBar';

export default class AddExpense extends React.Component {
    constructor() {
        super();
        this.state = {
            // The date that the user picked
            expenseDate: new Date(),
            // The reason for the expense
            reasonText: '',
            // The price of the expense
            price: 0,
        };

        this.curDate = new Date();
    }

    setDate = newDate => {
        this.setState({ expenseDate: newDate });
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header text='Add Expense' backgroundColor={AppStyle.grey} />
                <TextInput
                    style={styles.reasonTextInput}
                    placeholder='Add reason'
                    value={this.state.reasonText}
                    onChangeText={reasonText => this.setState({ reasonText })}
                    maxLength={180}
                    numberOfLines={3}
                    returnKeyLabel='next'
                />
                
                <DatePickerIOS
                    mode="date"
                    date={this.state.expenseDate}
                    onDateChange={this.setDate}
                    maximumDate={this.curDate}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    reasonTextInput: {
        margin: 15,
        fontSize: 20,
    },
});
