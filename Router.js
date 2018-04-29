/**
 * This component will handle all the screen navigation options
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomePage from './src/pages/HomePage';
import AddExpense from './src/pages/AddExpense';

export const MainStack = StackNavigator(
    {
        Home: {
            screen: HomePage,
        },
        AddExpense: {
            screen: AddExpense,
        },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        mode: 'card',
    }
);
