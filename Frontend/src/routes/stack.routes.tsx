import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import Home from "../screens/Home";
import SelectionMusic from "../screens/SelectionMusic";
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
            { (userName == '' || userName == undefined || userName == 'undefined')
            ?
            <Screen name="Welcome" component={Welcome} />
            :
            null
            }
            <Screen name="Home" component={Home} />
            <Screen name="SelectionMusic" component={SelectionMusic} />
        </Navigator>
    )
}
