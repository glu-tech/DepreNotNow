import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Menu } from "../../components/Menu";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function ContainerScreen(props: any) {
  return (
    <LinearGradient
      start={{ x: -0.8, y: -0.1 }}
      end={{ x: 0.6, y: 0.1 }}
      colors={["#0C5149", "#0D192B"]}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <SafeAreaView>
        {props.visibleMenuBar ? (
          <Menu selected={props.optionMenuSelected} />
        ) : (
          <View />
        )}
        {props.children}
      </SafeAreaView>
    </LinearGradient>
  );
}

export default ContainerScreen;
