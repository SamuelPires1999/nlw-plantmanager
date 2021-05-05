import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../styles/colors";
import { Welcome } from "../screens/Welcome";
import { UserIdentification } from "../screens/UserIdentification";
import { Confirmation } from "../screens/Confirmation";
import { PlantSave } from "../screens/PlantSave";
import { MyPlants } from "../screens/MyPlants";
import AuthRoutes from "./tabs.routes";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="welcome" component={Welcome} />
    <stackRoutes.Screen
      name="userIdentification"
      component={UserIdentification}
    />
    <stackRoutes.Screen name="confirmation" component={Confirmation} />
    <stackRoutes.Screen name="plantSelect" component={AuthRoutes} />
    <stackRoutes.Screen name="plantSave" component={PlantSave} />
    <stackRoutes.Screen name="myplants" component={AuthRoutes} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
