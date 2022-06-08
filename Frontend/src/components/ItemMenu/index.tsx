import { LinearGradient } from "expo-linear-gradient";
import { Box, Container, Grid, Label, PlayerIcon } from "./styles";
import { MaterialIcon } from "../Icon";

export function ItemMenu(props:{leftLocate:number, nameItem:string, icon:string, selected:boolean}) {
    return (
        <Container style={{ left: props.leftLocate }}>
            <Grid disabled={props.selected}>
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
            </Grid>
            <Label>{props.nameItem}</Label>
        </Container>
    )
};