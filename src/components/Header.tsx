import React, {useEffect, useState} from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import colors from "../styles/colors";
import userImg from "../assets/profile.jpg";
import fonts from "../styles/fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header() {

  const [ userName, setUserName ] = useState<string>()

  useEffect(() => {
      async function getName(){
          const user = await AsyncStorage.getItem('@plantmanager:user')
          setUserName(user || '')
      }
      getName()
  },[])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá, </Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image style={styles.image} source={userImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
});
