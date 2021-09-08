import * as React from 'react';
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";

import { RFValue } from "react-native-responsive-fontsize";

const Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends React.Component {
  render() {
    return (

          <Tab.Navigator
          labeled={false}
          barStyle={styles.bottomTabStyle}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Feed") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Create Story") {
                iconName = focused ? "add-circle" : "add-circle-outline";
              }
              return (
                <Ionicons
                  name={iconName}
                  size={RFValue(25)}
                  color={color}
                  style={styles.icons}
                />
              );
            }
          })}
          activeColor={"#ee8249"}
          inactiveColor={"gray"}
        >
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="Create Story" component={CreateStory} />
        </Tab.Navigator>

    );
  }
}
// const BottomTabNavigator = ()=>{
// }

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "10%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

// export default BottomTabNavigator;