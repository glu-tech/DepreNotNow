import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

MIcon.loadFont();

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
  style?: StyleProp<TextStyle>;
}

export const IconSizes = {
  small: RFValue(10),
  medium: RFValue(15),
  large: RFValue(20),
  extraLarge: RFValue(24),
  megaLarge: RFValue(32),
};

export const MaterialIcon = ({size, name, color, style}: IconProps) => (
  <MIcon name={name} size={IconSizes[size]} color={color} style={style} />
);