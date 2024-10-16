import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AdminNavigation from '../Pages/AdminNavigation'
import AddUser from '../Pages/AddUser'
import UsersList from '../Pages/UsersList'

const UserStack = createNativeStackNavigator()

export default function AdminRoutes(){

    return(

        <UserStack.Navigator>

            <UserStack.Screen
                name='AdminHome'
                component={AdminNavigation}
                options={{

                    headerShown: false,

                }}
            />

            <UserStack.Screen
                name='AddUser'
                component={AddUser}
                options={{

                    headerStyle:{

                        backgroundColor: '#151515',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00b94a',

                    },

                    headerTintColor: 'rgba(255, 215, 40, 1)',
                    headerTitle: "Voltar",
                    headerBackTitleVisible: false,

                }}
            />

            <UserStack.Screen
                name='UsersList'
                component={UsersList}
                options={{

                    headerStyle:{

                        backgroundColor: '#151515',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00b94a',

                    },

                    headerTintColor: 'rgba(255, 215, 40, 1)',
                    headerTitle: "Voltar",
                    headerBackTitleVisible: false,

                }}
            />          

        </UserStack.Navigator>

    )

}