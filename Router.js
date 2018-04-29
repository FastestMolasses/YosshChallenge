/**
 * This component will handle all the screen navigation options
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomePage from './src/pages/HomePage';

export const MainStack = StackNavigator(
    {
        Home: {
            screen: HomePage,
        },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        mode: 'card',
    }
);
