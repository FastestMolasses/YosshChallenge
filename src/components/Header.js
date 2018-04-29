/**
 * A basic, reusable header component to be put on top of a page
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppStyle from '../styles/AppStyle';

export default class Header extends React.Component {
    render() {
        return (
            <View
                style={[
                    styles.container,
                    { backgroundColor: this.props.backgroundColor },
                ]}>
                <Text style={styles.text}>{this.props.text}</Text>

                {/*Only render if we have a sub header*/}
                {this.props.subHeader ?
                    (
                        <Text style={styles.subHeaderText}>
                            {this.props.subHeader}
                        </Text>
                    ) : (null)
                }
            </View>
        );
    }
}

// Stores all the styling data for this component
const styles = StyleSheet.create({
    container: {
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: AppStyle.headerFontSize,
        color: AppStyle.white,
        fontWeight: 'bold',
    },
    subHeaderText: {
        fontSize: AppStyle.subHeaderFontSize,
        color: AppStyle.white,
    },
});
