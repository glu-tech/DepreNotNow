import { LinearGradient } from "expo-linear-gradient";
import { Card, SoundImage, Subhead, TitleContainer, TitleHead, EastCardGrid } from "./styles";
import { MaterialIcon } from "../Icon";

const images = {
    happy: {
        uri: require('./../../assets/imgHappySound.png')
    },
    relax: { 
        uri: require('./../../assets/imgRelaxSound.png')
    },
    sleep: { 
        uri: require('./../../assets/imgSleepSound.png')
    }
}

interface props {
    topLocate:number,
    imgName:string,
    head:string,
    subhead:string,
    onPress:any
}

export function CardSound(props:props) {
    let sourceImg;
    if (props.imgName == "happy"){
        sourceImg = images.happy;
    } else if (props.imgName == "relax"){
        sourceImg = images.relax;
    } else {
        sourceImg = images.sleep;
    }

    return (
        <Card onPress={props.onPress} style={{ shadowColor: "rgba(0, 0, 0, 0.15)",
                shadowOffset: {
                width: 0,
                height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                top: props.topLocate,
                elevation: 3 }}>
                <LinearGradient start={{ x: 0.1, y: 0.2 }} colors={['#0D2A34', '#0A1422']} style={{ flex: 1, borderRadius: 16 }}>
                <SoundImage source={sourceImg.uri} />
                <TitleContainer>
                    <TitleHead>{props.head}</TitleHead>
                    <Subhead>{props.subhead}</Subhead>
                </TitleContainer>
                <EastCardGrid>
                    <MaterialIcon size="large" color="#d8f0ed" name="arrow-right" />
                </EastCardGrid>
                </LinearGradient>
        </Card>
    );
}