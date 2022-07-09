import { LinearGradient } from "expo-linear-gradient";
import { Grid, SoundImage, Subhead, TitleContainer, TitleHead, EastCardGrid } from "./styles";
import { MaterialIcon } from "../Icon";
import { StyleProp, ViewStyle } from "react-native";

const images = {
    happy: {
        uri: require('./../../assets/imgHappySound.png')
    },
    relax: { 
        uri: require('./../../assets/imgRelaxSound.png')
    },
    sleep: { 
        uri: require('./../../assets/imgSleepSound.png')
    },
    articleZero: { 
        uri: require('./../../assets/imgHelpArticleZero.png')
    },
    articleOne: { 
        uri: require('./../../assets/imgHelpArticleOne.png')
    },
    articleTwo: { 
        uri: require('./../../assets/imgHelpArticleTwo.png')
    },
    articleThree: { 
        uri: require('./../../assets/imgHelpArticleThree.png')
    },
    articleFour: { 
        uri: require('./../../assets/imgHelpArticleFour.png')
    }
}

interface props {
    style:StyleProp<ViewStyle>,
    imgName:string,
    head:string,
    subhead:string,
    onPress:any
}

export function Card(props:props) {
    let sourceImg;
    if (props.imgName == "happy"){
        sourceImg = images.happy;
    } else if (props.imgName == "relax"){
        sourceImg = images.relax;
    } else if (props.imgName == "sleep"){
        sourceImg = images.sleep;
    } else if (props.imgName == "articleZero"){
        sourceImg = images.articleZero;
    } else if (props.imgName == "articleOne"){
        sourceImg = images.articleOne;
    } else if (props.imgName == "articleTwo"){
        sourceImg = images.articleTwo;
    } else if (props.imgName == "articleThree"){
        sourceImg = images.articleThree;
    } else {
        sourceImg = images.articleFour;
    }

    return (
        <Grid onPress={props.onPress} style={props.style}>
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
        </Grid>
    );
}