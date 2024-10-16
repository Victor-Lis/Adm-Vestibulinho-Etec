import React, { useContext } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Pages/Home'
import AddContent from '../Pages/AddContent';
import UserRoutes from './user.routes';
import AdminRoutes from './admin.routes';

import { AuthContext } from '../Contexts/auth';

const AppTabs = createBottomTabNavigator()

export default function AuthRoutes() {

    const { user } = useContext(AuthContext)

    return (

        <AppTabs.Navigator>

            <AppTabs.Screen
                name='Home'
                component={Home}
                options={{

                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="home" color={color} size={size + 2.5} style={{ marginVertical: 2.5 }} />
                    },
                    headerShown: false,
                    tabBarStyle: {

                        backgroundColor: "#282828",
                        borderColor: "#101010",

                    },
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "rgba(255, 215, 40, 1)"

                }}
            />

            <AppTabs.Screen
                name='AddContent'
                component={AddContent}
                options={{

                    tabBarIcon: ({ color, size }) => {
                        // return <Feather name="plus" color={color == "rgba(255, 215, 40, 1)"? "#151515": "#fffa"} size={size+2.5} style={{marginVertical: 2.5, backgroundColor: color == "rgba(255, 215, 40, 1)"? "rgba(255, 215, 40, 1)": "rgba(255,255,255,.075)", padding: 5, borderRadius: 20}} />
                        return <Feather name="plus-circle" color={color} size={size + 2.5} style={{ marginVertical: 2.5, padding: 5, borderRadius: 20 }} />
                    },
                    headerShown: false,
                    tabBarStyle: {

                        backgroundColor: "#282828",
                        borderColor: "#101010",

                    },
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "rgba(255, 215, 40, 1)"

                }}
            />

            {user.cargo == "adm" &&

                <AppTabs.Screen
                    name='AdminTab'
                    component={AdminRoutes}
                    options={{

                        tabBarIcon: ({ color, size }) => {
                            return <Feather name="lock" color={color} size={size + 2.5} style={{ marginVertical: 2.5 }} />
                        },
                        headerShown: false,
                        tabBarStyle: {

                            backgroundColor: "#282828",
                            borderColor: "#101010",

                        },
                        tabBarShowLabel: false,
                        tabBarActiveTintColor: "rgba(255, 215, 40, 1)",


                    }}
                />

            }

            <AppTabs.Screen
                name='UserTab'
                component={UserRoutes}
                options={{

                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="user" color={color} size={size + 2.5} style={{ marginVertical: 2.5 }} />
                    },
                    headerShown: false,
                    tabBarStyle: {

                        backgroundColor: "#282828",
                        borderColor: "#101010",

                    },
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "rgba(255, 215, 40, 1)",


                }}
            />


        </AppTabs.Navigator>

    )

}