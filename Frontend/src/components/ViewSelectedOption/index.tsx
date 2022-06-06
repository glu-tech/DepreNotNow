import React from 'react';
import { GridSelection, ImgSelection, Label } from './styles';

const images = {
    background: {
        uri: require('./../../assets/imgBackgroundSound.png')
    },
    binaural: { 
        uri: require('./../../assets/imgBinauralSound.png')
    },
    time: { 
        uri: require('./../../assets/imgTimeSelectSound.png')
    }
}

export function ViewSelectedOption(props:{ text:string, imgName:string, borderTop:number, borderBottom:number, opacity?:number }) {
    let sourceImg;
    if (props.imgName == "background"){
        sourceImg = images.background;
    } else if (props.imgName == "binaural"){
        sourceImg = images.binaural;
    } else {
        sourceImg = images.time;
    }

    return (
        <GridSelection>
            <ImgSelection 
                borderTopLeftRadius={props.borderTop} 
                borderTopRightRadius={props.borderTop} 
                borderBottomLeftRadius={props.borderBottom} 
                borderBottomRightRadius={props.borderBottom} 
                blurRadius={50} 
                source={sourceImg.uri}
                style={{ opacity: props.opacity ?? 1 }} />
            <Label>{props.text}</Label>
        </GridSelection>
    );
}

export default ViewSelectedOption;