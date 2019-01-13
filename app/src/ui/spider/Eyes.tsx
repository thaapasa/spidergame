import React from 'react';
import { Ellipse, G, Path } from 'react-native-svg';
import { Colors } from '../Styles';

export const OpenEyes = () => (
  <>
    <G transform="translate(27 31)">
      <Ellipse
        id="Oval"
        cx="3"
        cy="3.5"
        rx="3"
        ry="3.5"
        fill={Colors.white}
        stroke={Colors.black}
        strokeWidth=".8"
      />
      <Ellipse
        cx="4"
        cy="3.5"
        rx="2"
        ry="2.5"
        fill={Colors.black}
        id="Oval"
        transform="translate(-.111 -.389)"
      />
    </G>
    <G transform="translate(18 31)">
      <Ellipse
        id="Oval"
        cx="3"
        cy="3.5"
        rx="3"
        ry="3.5"
        fill={Colors.white}
        stroke={Colors.black}
        strokeWidth=".8"
      />
      <Ellipse
        cx="4"
        cy="3.5"
        rx="2"
        ry="2.5"
        fill={Colors.black}
        id="Oval"
        transform="translate(-.056 -.444)"
      />
    </G>
  </>
);

export const ClosedHappyEyes = () => (
  <>
    <G transform="translate(-4 -5)">
      <Path
        d="M31.04 42.807c.325-4.855 5.458-5.168 5.872-.123"
        fill="none"
        stroke={Colors.black}
        strokeWidth=".9"
        strokeLinecap="round"
      />
      <Path
        d="M22.018 42.843c.325-4.855 5.458-5.168 5.872-.123"
        fill="none"
        stroke={Colors.black}
        strokeWidth=".9"
        strokeLinecap="round"
      />
    </G>
  </>
);
