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
);

export const ClosedHappyEyesWithLashes = () => (
  <G
    transform="translate(-4 -5)"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit="1.5"
    stroke={Colors.black}
  >
    <Path
      d="M31.04 42.807c.325-4.855 5.458-5.168 5.872-.123M22.018 42.843c.325-4.855 5.458-5.168 5.872-.123"
      fill="none"
      strokeWidth=".9"
    />
    <Path
      d="M36.522 41.024l1.273-.637M35.485 39.514l1-1.128M33.903 38.987l-.055-1.546M32.538 39.55l-1.109-1.236M31.407 40.745l-1.27-.74"
      strokeWidth=".7"
    />
    <G>
      <Path
        d="M27.591 40.787l1.255-.728M26.372 39.441l1.001-1.128M24.99 39.041l-.055-1.546M23.444 39.696l-1.11-1.237M22.312 41l-1.378-.54"
        strokeWidth=".7"
      />
    </G>
  </G>
);
