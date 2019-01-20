import React from 'react';
import Svg, { Circle, Ellipse, G, Path } from 'react-native-svg';
import { Colors } from '../Styles';
import { ClosedHappyEyes, ClosedHappyEyesWithLashes, OpenEyes } from './Eyes';
import { spiderMap, SpiderProps } from './Spider';

export const SpiderTedi = () => <SpiderView {...spiderMap.tedi} />;

export class SpiderView extends React.Component<SpiderProps> {
  render() {
    return (
      <Svg width={59} height={64} viewBox="0 0 59 64">
        <G transform="translate(4 6)" fillRule="evenodd" clipRule="evenodd">
          <Path
            d="M39 14.11c2.263-1.468 2.973-3.796 2.973-7.11 0-3.314-1.33-3.565-1.95-3.252C39.402 4.062 39 5.28 39 7c0 1.404 0 2.808-1.518 4.003-2.142 1.688-3.504 1.688-4.447 2.364-.943.677-1.349 1.88 0 2.264 1.709.486 4.092-.52 5.965-1.521z"
            fill={Colors.purple}
            stroke={Colors.black}
          />
          <Path
            d="M37.636 23.357c2.687-.235 4.406-1.957 5.962-4.883s.5-3.773-.195-3.786c-.695-.014-1.621.872-2.43 2.391-.659 1.24-1.318 2.48-3.219 2.822-2.683.484-3.887-.156-5.037 0-1.15.153-2.073 1.026-1.063 1.997 1.281 1.232 3.858 1.463 5.982 1.459zM10.973 13.462C8.71 11.994 8 9.666 8 6.352c0-3.314 1.33-3.565 1.95-3.251.62.313 1.023 1.531 1.023 3.251 0 1.404 0 2.808 1.517 4.004 2.143 1.687 3.505 1.687 4.448 2.363.943.677 1.348 1.88 0 2.264-1.709.486-4.093-.52-5.965-1.521zM13.536 23.445c-2.687-.235-4.407-1.957-5.962-4.882-1.556-2.926-.5-3.773.195-3.787.695-.014 1.622.872 2.43 2.391.659 1.24 1.318 2.48 3.22 2.822 2.683.485 3.886-.155 5.036-.001 1.15.154 2.073 1.027 1.063 1.998-1.281 1.232-3.858 1.463-5.982 1.459z"
            fill={Colors.purple}
            stroke={Colors.black}
            id="Jalka"
          />
          <Path
            d="M25.503 35c9.308 0 12.423-7.429 11.267-17.5C35.614 7.429 30.441 0 25.503 0S15.409 7.627 14.235 17.5C13.062 27.373 16.194 35 25.503 35z"
            fill={Colors.purple}
            stroke={Colors.black}
          />
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
          <G id="Tuntosarvi">
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
          </G>
          <Ellipse
            cx="25.5"
            cy="38.5"
            rx="12.5"
            ry="13.5"
            fill={this.props.headColor}
            stroke={Colors.black}
          />
          {this.renderEyes()}
          <Path
            d="M25.5 50c1.639 0 3.476-1.493 3.476-3.019v-.393c0-.601-2.44-.076-3.476-.076s-3.548-.354-3.548 0c0 .353-.004.287 0 .364C22.04 48.856 24.255 50 25.5 50z"
            fill="#da4d65"
            stroke={Colors.black}
            strokeWidth=".6"
          />
          <Ellipse
            cx="31.5"
            cy="44"
            rx="2.5"
            ry="3"
            fill={this.props.cheekColor}
            stroke={Colors.black}
            strokeWidth=".6"
          />
          <Ellipse
            id="Hymykuoppa"
            cx="19.5"
            cy="44"
            rx="2.5"
            ry="3"
            fill={this.props.cheekColor}
            stroke={Colors.black}
            strokeWidth=".6"
          />
        </G>
      </Svg>
    );
  }

  renderEyes() {
    switch (this.props.eyes) {
      case 'open':
        return <OpenEyes />;
      case 'closed-happy':
        return <ClosedHappyEyes />;
      case 'closed-lashes':
        return <ClosedHappyEyesWithLashes />;
    }
    return null;
  }
}
