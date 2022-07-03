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
    },

    imgPlayerZoneZeroPauseSound: {
        uri: require('./../../assets/imgPlayerZoneZeroPauseSound.png')
    },
    imgPlayerZoneOnePauseSound: { 
        uri: require('./../../assets/imgPlayerZoneOnePauseSound.png')
    },
    imgPlayerZoneTwoPauseSound: { 
        uri: require('./../../assets/imgPlayerZoneTwoPauseSound.png')
    },
    imgPlayerZoneThreePauseSound: { 
        uri: require('./../../assets/imgPlayerZoneThreePauseSound.png')
    },
    imgPlayerZoneCirclePauseSound: { 
        uri: require('./../../assets/imgPlayerZoneCirclePauseSound.png')
    }
}

interface props {
    children:any,
    imgName:string,
    styleImage:any,
    playing:boolean,
    onPress?: any
}

export function ZoneCirclePlayerMusic(props:props) {
    let sourceImg;
    if (props.imgName == "imgPlayerZoneZeroSound"){
        sourceImg = props.playing ? images.imgPlayerZoneZeroSound : images.imgPlayerZoneZeroPauseSound;
    } else if (props.imgName == "imgPlayerZoneOneSound"){
        sourceImg = props.playing ? images.imgPlayerZoneOneSound : images.imgPlayerZoneOnePauseSound;
    } else if (props.imgName == "imgPlayerZoneTwoSound"){
        sourceImg = props.playing ? images.imgPlayerZoneTwoSound : images.imgPlayerZoneTwoPauseSound;
    } else if (props.imgName == "imgPlayerZoneThreeSound"){
        sourceImg = props.playing ? images.imgPlayerZoneThreeSound : images.imgPlayerZoneThreePauseSound;
    } else {
        sourceImg = props.playing ? images.imgPlayerZoneCircleSound : images.imgPlayerZoneCirclePauseSound;
    }

    return (
            <GridZoneOut onPress={props.onPress}>
                <ImgSelection source={sourceImg.uri} style={props.styleImage} />
                {props.children}
            </GridZoneOut>
    );
}

export default ZoneCirclePlayerMusic;