import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import ZoneCirclePlayerMusic from "../ZoneCirclePlayerMusic";
import {
  DescriptionLabel,
  GridPlayer,
  MinutesLabel,
  TextContainer,
} from "./styles";

export function CirclePlayerMusic(props: {
  children?: any;
  valueMinutes: string;
}) {
  return (
    <GridPlayer>
      <ZoneCirclePlayerMusic
        imgName="imgPlayerZoneZeroSound"
        styleImage={{ width: RFValue(400), height: RFValue(400), opacity: 0.2 }}
      >
        <ZoneCirclePlayerMusic
          imgName="imgPlayerZoneOneSound"
          styleImage={{
            width: RFValue(350),
            height: RFValue(350),
            opacity: 0.3,
          }}
        >
          <ZoneCirclePlayerMusic
            imgName="imgPlayerZoneTwoSound"
            styleImage={{
              width: RFValue(300),
              height: RFValue(300),
              opacity: 0.4,
            }}
          >
            <ZoneCirclePlayerMusic
              imgName="imgPlayerZoneThreeSound"
              styleImage={{
                width: RFValue(250),
                height: RFValue(250),
                opacity: 0.5,
              }}
            >
              <ZoneCirclePlayerMusic
                imgName="imgPlayerZoneCircleSound"
                styleImage={{
                  width: RFValue(200),
                  height: RFValue(200),
                  opacity: 0.7,
                }}
              >
                <TextContainer>
                  <MinutesLabel>{props.valueMinutes}</MinutesLabel>
                  <DescriptionLabel>MIN</DescriptionLabel>
                </TextContainer>
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
