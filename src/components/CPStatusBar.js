/**
 * This component is a cross platform status bar that allows
 * the background color to be changed on both Android & iOS
 */

import React from 'react';
import { View, StatusBar } from 'react-native';

export const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={{ backgroundColor }}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);
