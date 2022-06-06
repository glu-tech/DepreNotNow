import { LinearGradient } from "expo-linear-gradient";
import { Card, SoundImage, Title } from "./styles";

const images = {
    lofi: {
        uri: require('./../../assets/imgLofiSound.png')
    },
    softRock: { 
        uri: require('./../../assets/imgSoftRockSound.png')
    },
    indie: { 
        uri: require('./../../assets/imgIndieSound.png')
    }
}

export function CardStyleSound(props:{topLocate:number, imgName:string, head:string}) {
    let sourceImg;
    if (props.imgName == "lofi"){
        sourceImg = images.lofi;
    } else if (props.imgName == "softRock"){
        sourceImg = images.softRock;
    } else {
        sourceImg = images.indie;
    }

    return (
        <Card style={{ top: props.topLocate }}>
            <LinearGradient colors={['#0c514949', '#0a142230']} style={{ flex: 1, borderRadius: 16 }}>
                <SoundImage borderRadius={16} source={sourceImg.uri} />
                <Title>{props.head}</Title>
            </LinearGradient>
        </Card>
    );
}