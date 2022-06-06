import { View } from "react-native";
import { ItemMenu } from "../ItemMenu";

export function Menu(props:{selected:boolean[]}) {
    return (
    <View>
        <ItemMenu leftLocate={50} icon={"home-outline"} nameItem={"Início"} selected={props.selected[0]} />
        <ItemMenu leftLocate={166} icon={""} nameItem={"Player"} selected={props.selected[1]} />
        <ItemMenu leftLocate={282} icon={"lightbulb-outline"} nameItem={"Ajuda"} selected={props.selected[2]} />
    </View>
)};