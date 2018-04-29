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

/**
 * If I were to finish this app, I would add these things:
 * - Saving / Loading expenses
 * - Sorting expenses by date
 * - A login / signup page
 * - Better looking expense display items
 * - Real data
 * - Add expense validation (make sure all the fields have been filled out)
 */
