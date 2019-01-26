import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Defs, G, RadialGradient, Rect, Stop, Svg } from 'react-native-svg';

export const Grass = (p: { width?: number; style?: StyleProp<ViewStyle> }) => {
  const w = p.width || 732;
  const h = (w * 201) / 732;
  return (
    <Svg width={w} height={h} viewBox="0 0 732 201" style={p.style}>
      <Defs>
        <RadialGradient
          cx="37.928%"
          cy="-54.583%"
          fx="37.928%"
          fy="-54.583%"
          r="239.684%"
          id="gradient"
        >
          <Stop stopColor="#49C477" offset="0%" />
          <Stop stopColor="#2A9A4E" offset="100%" />
        </RadialGradient>
      </Defs>
      <G
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <G
          id="Intro"
          transform="translate(0.000000, -211.000000)"
          fill="url(#gradient)"
        >
          <Rect id="Rectangle" x="0" y="211" width="732" height="201" />
        </G>
      </G>
    </Svg>
  );
};
