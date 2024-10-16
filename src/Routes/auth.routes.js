import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from '../Pages/SignIn'
const AuthStack = createNativeStackNavigator()

export default function AuthRoutes(){

    return(

        <AuthStack.Navigator>

            <AuthStack.Screen
                name='SignIn'
                component={SignIn}
                options={{

                    headerShown: false,

                }}
            />

        </AuthStack.Navigator>

    )

}