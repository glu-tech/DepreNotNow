import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ImgSound } from './styles';

const images = {
    backTime: {
        uri: require('./../../assets/imgBackTimeSound.png')
    },
    playMusic: { 
        uri: require('./../../assets/imgPlaySound.png')
    },
    fowardTime: { 
        uri: require('./../../assets/imgFowardTimeSound.png')
    }
}

export function ButtonControlSound(props:{styles:any, imgName:string, }) {
    let sourceImg;
    if (props.imgName == "backTime"){
        sourceImg = images.backTime;
    } else if (props.imgName == "playMusic"){
        sourceImg = images.playMusic;
    } else {
        sourceImg = images.fowardTime;
    }

    return (
        <TouchableOpacity>
            <ImgSound style={props.styles} source={sourceImg.uri} />
        </TouchableOpacity>
    );
}

export default ButtonControlSound;