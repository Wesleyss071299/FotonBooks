import * as React from 'react';
import { getFocusedRouteNameFromRoute} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useAppSelector } from '../store/hooks';
import {ThemeModeEnum} from '../store/theme';
import { AntDesign } from '@expo/vector-icons'
import Home from '../pages/Home';
import AddBook from '../pages/AddBook';
import Profile from '../pages/Profile';
import Details from '../pages/Details';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const StackHome = () => {
    return(
        <Stack.Navigator
        screenOptions = {{
            headerShown: false,
            animationEnabled: false
        }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}

const AppRoutes = () => {
    const themeMode = useAppSelector(state => state.theme.themeMode);
    const color = themeMode === ThemeModeEnum.DARK ? '#000' : "#fff"
    const iconColor = themeMode === ThemeModeEnum.DARK ? '#fff' : "#000"
    return (
        <Tab.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: iconColor,
                inactiveTintColor: '#BFBEBF',
                style: {
                    backgroundColor: color
                }
            }}
            screenOptions = {({route}) => ({
                tabBarIcon: ({ color }) => {
                    if (route.name === 'Home') {
                        return <AntDesign name='home' size={24} color={color} />
                    } else if (route.name === 'AddBook') {
                        return <AntDesign name='plus' size={24} color={color} />
                    } else if (route.name === 'Profile') {
                        return <AntDesign name='user' size={24} color={color} />
                    }
                }
            })}
        >
            <Tab.Screen name="Home" component={StackHome} options={({route}) => ({
                tabBarVisible: ((route) => {
                    const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                    
                    if (routeName === "Details") {
                        return false
                    }
                    
                    return true
                })(route)
            })}/>
            <Tab.Screen name="AddBook" component={AddBook}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}

export default AppRoutes