import React from "react";
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

import colors from "../styles/colors"

interface ButtonsProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonsProps) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    text: {
        fontSize: 16,
        color: colors.white,
    }
})
