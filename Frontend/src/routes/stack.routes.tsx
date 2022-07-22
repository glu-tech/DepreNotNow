import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import ConfirmationSound from "../screens/ConfirmationSound";
import Help from "../screens/Help";
import Home from "../screens/Home";
import MusicPlayer from "../screens/MusicPlayer";
import Profile from "../screens/Profile";
import SelectionMusic from "../screens/SelectionMusic";
import SelectionTime from "../screens/SelectionTime";
import Welcome from "../screens/Welcome";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes(){
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@deprenotnow:user');
            setUserName(user || '');
        }

        loadStorageUserName();
    },[]);

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Welcome" component={Welcome} />
            <Screen name="Home" component={Home} />
            <Screen name="SelectionMusic" component={SelectionMusic} />
            <Screen name="SelectionTime" component={SelectionTime} />
            <Screen name="ConfirmationSound" component={ConfirmationSound} />
            <Screen name="MusicPlayer" component={MusicPlayer} />
            <Screen name="Help" component={Help} />
            <Screen name="Profile" component={Profile} />
        </Navigator>
    )
}
