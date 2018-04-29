/**
 * This card component will be used to display all the expense data
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppStyle from '../styles/AppStyle';

export default class Card extends React.Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.dateText}>
                    {this.props.data.date}
                </Text>

                <Text style={styles.reasonText}>
                    {this.props.data.reason}
                </Text>

                <View style={styles.priceContainer}>
                    <Text style={[styles.priceText, {color: AppStyle.secondaryColor}]}>
                        ${this.props.data.price}
                    </Text>
                    <Text style={styles.priceText}>
                        VAT: ${this.props.data.vat}
                    </Text>
                </View>

            </View>    
        );
    }
}

// Stores all the styling data for this component
const styles = StyleSheet.create({
    container: {
        borderRadius: AppStyle.borderRadius,
        paddingVertical: 15,
        paddingHorizontal: 20,
        // borderWidth: 1,
        // borderColor: AppStyle.greyLight,
        // margin: 15,
        marginHorizontal: 5,
        marginVertical: 5,
        // backgroundColor: AppStyle.backgroundWhite,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    dateText: {
        fontSize: 14,
        color: AppStyle.grey,
    },
    reasonText: {
        fontSize: 20,
        color: AppStyle.black,
        marginVertical: 5,
    },
    priceText: {
        fontSize: 18,
        color: AppStyle.grey,
    },
});
