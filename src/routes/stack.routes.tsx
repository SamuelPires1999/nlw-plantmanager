import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import colors from '../styles/colors'
import { Welcome } from '../screens/Welcome'
import { UserIdentification } from '../screens/UserIdentification'
import { Confirmation } from '../screens/Confirmation'
import { PlantSelect } from '../screens/PlantSelect'

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle:{
                backgroundColor: colors.white
            }
        }}
    >
        <stackRoutes.Screen
            name='welcome'
            component={Welcome}
        />
        <stackRoutes.Screen
            name='userIdentification'
            component={UserIdentification}
        />
        <stackRoutes.Screen
            name='confirmation'
            component={Confirmation}
        />
        <stackRoutes.Screen
            name='plantSelect'
            component={PlantSelect}
        />
    </stackRoutes.Navigator> 
)

export default AppRoutes;