import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import ConfirmationSound from "../screens/ConfirmationSound";
import Home from "../screens/Home";
import MusicPlayer from "../screens/MusicPlayer";
import SelectionMusic from "../screens/SelectionMusic";
import SelectionTime from "../screens/SelectionTime";
import Welcome from "../screens/Welcome";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@deprenotnow:user");
      setUserName(user || "");
    }

    loadStorageUserName();
  }, []);

  return (
    <Navigator
      screenOptions={{
        headerTransparent: true,
        statusBarHidden: true,
        headerStyle: {},
        headerBackButtonMenuEnabled: true,
        headerTintColor: "#d8f0ed",
        headerTitleStyle: {
          color: "#d8f0ed",
          fontSize: RFValue(18),
          fontWeight: "500",
          fontFamily: "Roboto",
        },
        statusBarStyle: "dark",
      }}
    >
      {userName == "" || userName == undefined || userName == "undefined" ? (
        <Screen name="Welcome" component={Welcome} />
      ) : null}
      <Screen
        name="Home"
        component={Home}
        options={{
          title: "Oque vamos fazer hoje ?",
          headerTitleStyle: { fontSize: RFValue(24) },
        }}
      />
      <Screen
        name="SelectionMusic"
        component={SelectionMusic}
        options={{ title: "Qual estilo vamos escutar?" }}
      />
      <Screen
        name="SelectionTime"
        component={SelectionTime}
        options={{ title: "Por quanto tempo?" }}
      />
      <Screen
        name="ConfirmationSound"
        component={ConfirmationSound}
        options={{ title: "Está tudo certo?" }}
      />
      <Screen
        name="MusicPlayer"
        component={MusicPlayer}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
