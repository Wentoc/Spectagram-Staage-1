import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => { 
    return(
        <Drawer.Navigator screenOptions={{ headerMode: false }}>
            <Drawer.Screen name='Home' component={TabNavigator}></Drawer.Screen>
            <Drawer.Screen name='Profile' component={Profile}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;