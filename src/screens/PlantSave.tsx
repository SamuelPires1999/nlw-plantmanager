import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { SvgFromUri } from "react-native-svg";
import waterDrop from "../assets/waterdrop.png";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { useNavigation, useRoute } from "@react-navigation/core";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { format, isBefore } from "date-fns";
import { PlantProps, SavePlant } from "../libs/storage";

interface Params {
  plant: PlantProps;
}

export function PlantSave() {
  const [selectDateTime, setSelectedDateTime] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(
    Platform.OS === "ios"
  );
  const navigation = useNavigation();
  const route = useRoute();
  const { plant } = route.params as Params;

  const handleChangeTime = (event: Event, dateTime: Date | undefined) => {
    if (Platform.OS === "android") {
      setShowDateTimePicker((oldState) => !oldState);
    }
    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert("Escolha um horario no futuro!!");
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  };

  const handleAndroidDatePicker = () => {
    setShowDateTimePicker((oldState) => !oldState);
  };

  const handleSave = async () => {
    try {
      await SavePlant({
        ...plant,
        dateTimeNotification: selectDateTime,
      });

      navigation.navigate("confirmation", {
        title: "Tudo Certo",
        subtitle:
          "Fique tranquilo que sempre vamos lembrar você de cuidar das suas plantinhas com muito cuidado",
        buttonTitle: "Muito Obrigado =D",
        icon: "hug",
        nextScreen: "myplants",
      });
    } catch {
      Alert.alert("Não foi possivel salvar esta planta!");
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.plantInfo}>
          <SvgFromUri uri={plant.photo} width={150} height={150} />
          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={styles.plantAbout}>{plant.about}</Text>
        </View>
        <View style={styles.controller}>
          <View style={styles.tipContainer}>
            <Image source={waterDrop} style={styles.tipImage} />
            <Text style={styles.tipText}>{plant.water_tips}</Text>
          </View>
          <Text style={styles.alertLabel}>
            Escolha o melhor horario para ser lembrado:
          </Text>
          {showDateTimePicker && (
            <DateTimePicker
              value={selectDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}
          {Platform.OS === "android" && (
            <TouchableOpacity
              style={styles.datePickerButton}
              onPress={handleAndroidDatePicker}
            >
              <Text style={styles.datePickerText}>
                {`Mudar ${format(selectDateTime, "HH:mm")}`}
              </Text>
            </TouchableOpacity>
          )}
          <Button
            title="Cadastrar Planta"
            onPress={() => handleSave()}
            activeOpacity={0.7}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.shape,
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.shape,
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 20,
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 15,
  },
  plantAbout: {
    textAlign: "center",
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 10,
  },
  tipContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
    position: "relative",
    bottom: 60,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
    textAlign: "justify",
  },
  alertLabel: {
    textAlign: "center",
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5,
  },
  datePickerButton: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 40,
  },
  datePickerText: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.text,
  },
});
