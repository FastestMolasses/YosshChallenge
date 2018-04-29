/**
 * Entry point for the program.
 * Gets the StackNavigator and uses it as the entry point for the program
 */

import React from 'react';
import { MainStack } from './Router';

export default class App extends React.Component {
    render() {
        return <MainStack />;
    }
}
