import React from 'react';
import { Circle, G, Path } from 'react-native-svg';
import { Colors } from '../../style/Colors';

export const AntennaLeftLeft = () => (
  <>
    <Path
      d="M17.804 28.904c0-12.243-11.526-16.469-13.97-18.27"
      fill="none"
      stroke={Colors.black}
      strokeLinecap="square"
    />
    <Circle
      cx="3.5"
      cy="3.5"
      r="3.5"
      fill={Colors.black}
      transform="translate(-.167 7.222)"
    />
  </>
);

export const AntennaRightRight = () => (
  <>
    <Path
      id="Line"
      d="M32.196 28.904c0-12.243 11.637-15.637 14.081-17.437"
      fill="none"
      stroke={Colors.black}
      strokeLinecap="square"
    />
    <Circle
      cx="3.5"
      cy="3.5"
      r="3.5"
      fill={Colors.black}
      id="Oval"
      transform="matrix(-1 0 0 1 50.056 7.278)"
    />
  </>
);

export const AntennaLeftRight = () => (
  <>
    <G transform="matrix(-1,0,0,1,35.4591,5.44025)">
      <Path
        id="Line1"
        d="M17.804,21.904C17.804,9.661 6.167,6.267 3.723,4.467"
        fill="none"
        stroke="rgb(48,48,48)"
        strokeWidth="1px"
        strokeLinecap="square"
      />
      <G transform="matrix(1,0,0,1,-0.0555108,0.277537)">
        <Circle cx="3.5" cy="3.5" r="3.5" fill="rgb(48,48,48)" />
      </G>
    </G>
  </>
);

export const AntennaRightLeft = () => (
  <>
    <G transform="matrix(1,0,0,1,15.3459,5.64151)">
      <Path
        id="Line"
        d="M17.804,21.904C17.804,9.661 6.278,5.435 3.834,3.634"
        fill="none"
        stroke="rgb(48,48,48)"
        strokeWidth="1px"
        strokeLinecap="square"
      />
      <G transform="matrix(1,0,0,1,-0.166524,0.222028)">
        <Circle cx="3.5" cy="3.5" r="3.5" fill="rgb(48,48,48)" />
      </G>
    </G>
  </>
);

export const AntennaLeftUp = () => (
  <>
    <G transform="matrix(-1,0,0,1,35.4591,5.44025)">
      <Path
        id="Line1"
        d="M17.804,21.904L17.71,1.901"
        fill="none"
        stroke="rgb(48,48,48)"
        strokeWidth="1px"
        strokeLinecap="square"
      />
      <G transform="matrix(1,0,0,1,14.1835,-1.83567)">
        <Circle cx="3.5" cy="3.5" r="3.5" fill="rgb(48,48,48)" />
      </G>
    </G>
  </>
);

export const AntennaRightUp = () => (
  <>
    <G transform="matrix(1,0,0,1,15.3459,5.64151)">
      <Path
        id="Line"
        d="M17.804,21.904L17.922,2.125"
        fill="none"
        stroke="rgb(48,48,48)"
        strokeWidth="1px"
        strokeLinecap="square"
      />
      <G transform="matrix(1,0,0,1,14.3743,-1.99181)">
        <Circle cx="3.5" cy="3.5" r="3.5" fill="rgb(48,48,48)" />
      </G>
    </G>
  </>
);
