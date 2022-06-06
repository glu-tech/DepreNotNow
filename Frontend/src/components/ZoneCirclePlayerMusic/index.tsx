import React from 'react';
import { GridZoneOut, ImgSelection } from './styles';

const images = {
    imgPlayerZoneZeroSound: {
        uri: require('./../../assets/imgPlayerZoneZeroSound.png')
    },
    imgPlayerZoneOneSound: { 
        uri: require('./../../assets/imgPlayerZoneOneSound.png')
    },
    imgPlayerZoneTwoSound: { 
        uri: require('./../../assets/imgPlayerZoneTwoSound.png')
    },
    imgPlayerZoneThreeSound: { 
        uri: require('./../../assets/imgPlayerZoneThreeSound.png')
    },
    imgPlayerZoneCircleSound: { 
        uri: require('./../../assets/imgPlayerZoneCircleSound.png')
    }
}

export function ZoneCirclePlayerMusic(props:{ children?: any, imgName:string, styleImage: any }) {
    let sourceImg;
    if (props.imgName == "imgPlayerZoneZeroSound"){
        sourceImg = images.imgPlayerZoneZeroSound;
    } else if (props.imgName == "imgPlayerZoneOneSound"){
        sourceImg = images.imgPlayerZoneOneSound;
    } else if (props.imgName == "imgPlayerZoneTwoSound"){
        sourceImg = images.imgPlayerZoneTwoSound;
    } else if (props.imgName == "imgPlayerZoneThreeSound"){
        sourceImg = images.imgPlayerZoneThreeSound;
    } else {
        sourceImg = images.imgPlayerZoneCircleSound;
    }

    return (
            <GridZoneOut>
                <ImgSelection source={sourceImg.uri} style={props.styleImage} />
                {props.children}
            </GridZoneOut>
    );
}

export default ZoneCirclePlayerMusic;