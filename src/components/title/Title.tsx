import React from 'react';
import { Text } from 'react-native';
import { fontColor } from '../style/color';
import { size } from '../style/size';

const Title: React.FC<Title> = ({text ='', fontSize = 'm', color = 'primary'}) => {
  return <Text style={{color: fontColor[color], fontSize: size[fontSize] }}>{text}</Text>;
}

export { Title };

type Title = {
    text: string,
    fontSize?: string,
    color?: string
} 