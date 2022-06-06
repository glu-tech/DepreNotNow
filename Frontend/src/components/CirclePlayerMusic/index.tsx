import React from 'react';
import ZoneCirclePlayerMusic from '../ZoneCirclePlayerMusic';
import { DescriptionLabel, GridPlayer, MinutesLabel } from './styles';

export function CirclePlayerMusic(props:{ children?:any, valueMinutes:string }) {
  return (
        <GridPlayer>
            <ZoneCirclePlayerMusic imgName='imgPlayerZoneZeroSound' styleImage={{ width: 400, height: 400, opacity: 0.2 }}>
                <ZoneCirclePlayerMusic imgName='imgPlayerZoneOneSound' styleImage={{ width: 350, height: 350, opacity: 0.3 }}>
                    <ZoneCirclePlayerMusic imgName='imgPlayerZoneTwoSound' styleImage={{ width: 300, height: 300, opacity: 0.4 }}>
                        <ZoneCirclePlayerMusic imgName='imgPlayerZoneThreeSound' styleImage={{ width: 250, height: 250, opacity: 0.5 }}>
                            <ZoneCirclePlayerMusic imgName='imgPlayerZoneCircleSound' styleImage={{ width: 200, height: 200, opacity: 0.7 }}>
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