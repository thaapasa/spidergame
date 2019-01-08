import React from 'react';
import Svg, { Ellipse, G, Path, Rect } from 'react-native-svg';

export const LockedEgg = () => {
  return (
    <Svg width={66} height={90} viewBox="0 0 66 90">
      <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <Ellipse
          stroke="#53504C"
          strokeWidth="1.6"
          fill="#B5BCBB"
          cx="33.5"
          cy="45.5"
          rx="30.5"
          ry="42.5"
        />
        <G transform="translate(14.000000, 18.000000)">
          <Path
            d="M4.21134342,33.2595662 C2.86438272,11.6335298 7.95588754,0.553707774 19.4858579,0.0201002822 C31.0158282,-0.51350721 36.107333,9.57724939 34.7603723,30.2923701 L30.1224473,30.9712931 C30.1224473,14.3237644 26.5769175,6 19.4858579,6 C12.3947983,6 8.90454074,15.4108901 9.01508526,34.2326702 L4.21134342,33.2595662 Z"
            stroke="#53504C"
            fill="#B5BCBB"
          />
          <Path
            d="M1.50978266,28.7591146 L3.87174001,53.5875801 L36.028537,52.2104536 L37.647895,24.9649424 L1.50978266,28.7591146 Z"
            stroke="#53504C"
            fill="#B5BCBB"
          />
          <Path
            d="M22.7859396,40.983064 L26.5707065,48.0634042 L15,48.0634042 L17.7263985,41.345235 C16.1079302,40.3519287 15,38.3312269 15,36 C15,32.6862915 17.2385763,30 20,30 C22.7614237,30 25,32.6862915 25,36 C25,38.0760508 24.1213432,39.9058361 22.7859396,40.983064 Z"
            fill="#53504C"
          />
        </G>
      </G>
    </Svg>
  );
};

export const OpenEgg = () => {
  return (
    <Svg width={66} height={90} viewBox="0 0 66 90">
      <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <Ellipse
          stroke="#53504C"
          strokeWidth="1.6"
          fill="#4AA9F5"
          cx="33.5"
          cy="45.5"
          rx="30.5"
          ry="42.5"
        />
        <G
          transform="translate(7.000000, 1.000000)"
          fill="#FCFEFF"
          stroke="#53504C"
          strokeWidth="1.6"
        >
          <Rect x="0.8" y="0.8" width="52.4" height="16.4" rx="2" />
        </G>
      </G>
    </Svg>
  );
};
