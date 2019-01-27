import React from 'react';
import Svg, { SvgProps } from 'react-native-svg';
import { calculateScaledSize, Size } from '../../util/Spatial';

export const ScaledSvg = (
  p: { scale?: number; width?: number } & SvgProps & {
      svgSize: Size;
      children?: any;
    }
) => {
  const size = calculateScaledSize(p.svgSize, p.scale, p.width);
  return (
    <Svg {...p} width={size.width} height={size.height}>
      {p.children}
    </Svg>
  );
};
