import React from 'react';
import { Image, ImageProperties } from 'react-native';
import { calculateScaledSize, Size } from '../../../util/Spatial';
import { Omit } from '../../../util/Utils';

const orgTreeSize: Size = { width: 310, height: 485 };

export const Tree = (
  p: { scale?: number; width?: number } & Omit<ImageProperties, 'source'>
) => {
  const size = calculateScaledSize(orgTreeSize, p.scale, p.width);
  return (
    <Image
      source={require('../../../../assets/img/tree.png')}
      {...p}
      width={size.width}
      height={size.height}
    />
  );
};
