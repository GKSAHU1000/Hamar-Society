import React from 'react';

import { Forum, Home, Profile,SignIn } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import Tabs from "./navigation/tabs";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'SignIn'}
            >
                <Stack.Screen name="SignIn" component={SignIn} />    
                
                         
            </Stack.Navigator>                    
                     
                {/* <Stack.Screen name="Directry" component={Directory} />
                <Stack.Screen name="Service" component={Service} />
                <Stack.Screen name="Profile" component={Profile} /> */}
        </NavigationContainer>
    )
}

export default App;