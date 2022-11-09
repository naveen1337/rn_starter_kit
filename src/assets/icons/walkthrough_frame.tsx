import React from 'react';
import Svg, {
  G,
  Path,
  Rect,
  Defs,
  ClipPath,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import {StyleSheet, Dimensions, View, Text} from 'react-native';

interface ArrowProps {
  width?: number;
  height?: number;
}

const Walkthrough = ({width = 420, height = 602}: ArrowProps) => {
  const wWidth = Dimensions.get('window').width;

  return (
    <Svg
      width={wWidth}
      height={height}
      preserveAspectRatio={'none'}
      viewBox="0 0 420 602">
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_836"
            data-name="Rectangle 836"
            width="420"
            height="602"
            fill="#fff"
            stroke="#707070"
            strokeWidth="1"
          />
        </ClipPath>
        <LinearGradient
          id="linear-gradient"
          x1="0.167"
          y1="0.348"
          x2="0.575"
          y2="0.845"
          gradientUnits="objectBoundingBox">
          <Stop offset="0" stopColor="#153258" />
          <Stop offset="1" stopColor="#16509b" />
        </LinearGradient>
      </Defs>
      <G
        id="Mask_Group_21"
        data-name="Mask Group 21"
        clipPath="url(#clip-path)">
        <G id="Group_2223" data-name="Group 2223">
          <Path
            id="Path_1896"
            data-name="Path 1896"
            d="M436.4,94.9c94.025-41.6,200.84-145.111,283.468-65.809,81.733,78.443,53.386,269.431,76.355,411.146,20.7,127.739,76.195,250.882,51.376,376.95a443.7,443.7,0,0,1-180.193,277.379c-71.637,49.98-153.812-15.5-231.006,9.509-112.165,36.341-210.856,234.616-316.69,167.945C19.639,1208.973-3.046,992.511.312,829.351,3.222,687.959,85.557,588.55,136.227,469.4c35.749-84.066,65.445-169.921,116.5-233.623C306.958,168.119,368.82,124.8,436.4,94.9"
            transform="matrix(-0.438, -0.899, 0.899, -0.438, -361.595, 927.513)"
            fill="#d9a91a"
          />
          <Path
            id="Path_1807"
            data-name="Path 1807"
            d="M436.4,94.9c94.025-41.6,200.84-145.111,283.468-65.809,81.733,78.443,53.386,269.431,76.355,411.146,20.7,127.739,76.195,250.882,51.376,376.95a443.7,443.7,0,0,1-180.193,277.379c-71.637,49.98-153.812-15.5-231.006,9.509-112.165,36.341-210.856,234.616-316.69,167.945C19.639,1208.973-3.046,992.511.312,829.351,3.222,687.959,85.557,588.55,136.227,469.4c35.749-84.066,65.445-169.921,116.5-233.623C306.958,168.119,368.82,124.8,436.4,94.9"
            transform="matrix(-0.438, -0.899, 0.899, -0.438, -341.095, 917.513)"
            fill="url(#linear-gradient)"
          />
        </G>
      </G>
    </Svg>
  );
};

const ss = StyleSheet.create({
  root: {
    bottom: 160,
  },
});

export default Walkthrough;
