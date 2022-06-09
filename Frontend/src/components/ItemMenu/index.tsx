import { LinearGradient } from "expo-linear-gradient";
import { Box, Container, ButtonGrid, Label, PlayerIcon } from "./styles";
import { MaterialIcon } from "../Icon";

interface props {
    leftLocate:number,
    nameItem:string,
    icon:string,
    selected:boolean,
    onPress?:any
}

export function ItemMenu(props:props) {
    return (
        <Container style={{ left: props.leftLocate }}>
            <ButtonGrid disabled={props.selected} onPress={props.onPress}>
                {props.selected ? <LinearGradient colors={['rgba(12, 81, 73, 0.5)', 'rgba(12, 81, 73, 0.5)']} style={{ flex: 1, borderRadius: 70 }}>
                    <Box>
                        {props.nameItem != "Player" ?
                        <MaterialIcon size="large" color="white" name={props.icon} />
                        :<PlayerIcon /> }
                    </Box>
                </LinearGradient>
                :<Box>
                    {props.nameItem != "Player" ?
                    <MaterialIcon size="large" color="white" name={props.icon} />
                    :<PlayerIcon /> }
                </Box>
                }
            </ButtonGrid>
            <Label>{props.nameItem}</Label>
        </Container>
    )
};