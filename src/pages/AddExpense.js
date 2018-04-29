import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    TextInput,
    DatePickerIOS,
    Text,
    View,
} from 'react-native';
import AppStyle from '../styles/AppStyle';

import Header from '../components/Header';
import BigButton from '../components/BigButton';
import CPStatusBar, { MyStatusBar } from '../components/CPStatusBar';

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

    goBackToHome = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <MyStatusBar backgroundColor={AppStyle.grey} />
                <Header text="Add Expense" backgroundColor={AppStyle.grey} />

                <View style={{backgroundColor:AppStyle.white, flex: 1}}>
                    <TextInput
                        style={styles.reasonTextInput}
                        placeholder="Reason"
                        value={this.state.reasonText}
                        onChangeText={reasonText =>
                            this.setState({ reasonText })
                        }
                        maxLength={120}
                        multiline
                        numberOfLines={3}
                        returnKeyLabel="next"
                    />

                    <Text style={styles.textTitle}>Expense Cost</Text>
                    <TextInput
                        style={styles.priceTextInput}
                        placeholder="$0.00"
                        value={this.state.price ? this.state.price : undefined}
                        onChangeText={price => this.setState({ price })}
                        keyboardType="numeric"
                    />

                    <Text style={styles.textTitle}>Expense Date</Text>
                    <DatePickerIOS
                        mode="date"
                        date={this.state.expenseDate}
                        onDateChange={this.setDate}
                        maximumDate={this.curDate}
                    />
                </View>

                <BigButton
                    onPress={this.goBackToHome}
                    text="Add"
                    backgroundColor={AppStyle.primaryColor}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppStyle.grey,
        flex: 1,
    },
    reasonTextInput: {
        margin: 15,
        fontSize: 18,
        borderBottomWidth: 0.5,
        paddingBottom: 15,
        borderColor: AppStyle.greyLight,
    },
    textTitle: {
        textAlign: 'center',
        margin: 10,
        color: AppStyle.black,
        fontSize: 20,
    },
    priceTextInput: {
        alignSelf: 'center',
        fontSize: 20,
        margin: 10,
    },
});
