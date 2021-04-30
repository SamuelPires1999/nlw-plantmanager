import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import {Button} from '../components/Button'
import { useNavigation } from '@react-navigation/core'


export function UserIdentification(){
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [name, setName] = useState<string>()
    const navigation = useNavigation()
    const handleInputBlur = () => {
        setIsFocused(false)
        setIsFilled(!!name)
    }

    const handleInputFocus = () => {
        setIsFocused(true)
    }

    const handleInputChange = (value: string) => {
        setIsFocused(!!value)
        setName(value)
    }

    const handleConfirmation = () => {
        navigation.navigate('confirmation')
    }

    return(
        <SafeAreaView style={styles.container} >
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding': 'height'}>
                <View style={styles.content} >
                    <View style={styles.form}>
                        <Text style={styles.emoji}>
                            {isFilled ? '😄' : '😃'}
                        </Text>
                        <Text style={styles.title}>
                            Como podemos {'\n'} 
                            chamar você?
                        </Text>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) && {borderColor : colors.green}
                            ]}
                            placeholder="Digite seu nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        <View style={styles.footer}>
                            <Button onPress={handleConfirmation} title="Confirmar" activeOpacity={0.8}/>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent:'space-around',
    },
    content:{
        flex:1,
        width: '100%'
    },
    form:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal: 54,
        alignItems:'center'
    },
    emoji:{
        fontSize: 44
    },
    input:{
        borderBottomWidth:1,
        borderColor: colors.gray,
        color:colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop:50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        textAlign:"center",
        color:colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32,
        marginTop: 20
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20,
    }
})
