import React from 'react'
import {Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, View} from 'react-native'
import colors  from '../styles/colors'
import fonts from '../styles/fonts'
import {Feather} from '@expo/vector-icons'

import wateringImg from '../assets/watering.png'
import { useNavigation } from '@react-navigation/core'

export function Welcome(){

    const navigation = useNavigation()

    const handleStart = () => {
        navigation.navigate('userIdentification')
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'} 
                    suas plantas de{'\n'}
                    forma facil!
                </Text>
                <Image source={wateringImg} style={styles.image} resizeMode="contain"/>
                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar
                </Text>

                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleStart}>
                    <Feather name="chevron-right"style={styles.buttonIcon}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    wrapper: {
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal: 20,     
        flex:1
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        textAlign:'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 28
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    button: {
        backgroundColor: colors.green,
        justifyContent:'center',
        alignItems: 'center',
        marginBottom:10,
        height: 56,
        width: 56,
        borderRadius: 16
    },
    image: {
        height: Dimensions.get('window').width * 0.7, 
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white
    }
})
