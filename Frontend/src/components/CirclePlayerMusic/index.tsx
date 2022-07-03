import React from 'react';
import ZoneCirclePlayerMusic from '../ZoneCirclePlayerMusic';
import { DescriptionLabel, GridPlayer, MinutesLabel } from './styles';

interface props {
    children:any,
    valueMinutes:string,
    playing:boolean,
    onPress: any
}

export function CirclePlayerMusic(props:props) {
  return (
        <GridPlayer>
            <ZoneCirclePlayerMusic playing={props.playing} imgName='imgPlayerZoneZeroSound' styleImage={{ width: 400, height: 400, opacity: 0.2 }}>
                <ZoneCirclePlayerMusic playing={props.playing} imgName='imgPlayerZoneOneSound' styleImage={{ width: 350, height: 350, opacity: 0.3 }}>
                    <ZoneCirclePlayerMusic playing={props.playing} imgName='imgPlayerZoneTwoSound' styleImage={{ width: 300, height: 300, opacity: 0.4 }}>
                        <ZoneCirclePlayerMusic playing={props.playing} imgName='imgPlayerZoneThreeSound' styleImage={{ width: 250, height: 250, opacity: 0.5 }}>
                            <ZoneCirclePlayerMusic onPress={props.onPress} playing={props.playing} imgName='imgPlayerZoneCircleSound' styleImage={{ width: 200, height: 200, opacity: 0.7 }}>
                                <MinutesLabel>{props.valueMinutes}</MinutesLabel>
                                <DescriptionLabel>MIN</DescriptionLabel>
                            </ZoneCirclePlayerMusic>
                        </ZoneCirclePlayerMusic>
                    </ZoneCirclePlayerMusic>
                </ZoneCirclePlayerMusic>
            </ZoneCirclePlayerMusic>
            {props.children}
        </GridPlayer>
  );
}

export default CirclePlayerMusic;