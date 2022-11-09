import React from 'react';
import Svg, {G, Rect} from 'react-native-svg';

interface ArrowProps {
  width?: number;
  height?: number;
}

const CrossDot = ({width = 23.753, height = 23.253}: ArrowProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 23.753 23.253">
      <G
        id="Group_56"
        data-name="Group 56"
        transform="translate(-29.247 -26.747)">
        <Rect
          id="Rectangle_12"
          data-name="Rectangle 12"
          width="23"
          height="2"
          rx="1"
          transform="translate(30.661 26.747) rotate(45)"
          fill="#fff"
        />
        <Rect
          id="Rectangle_13"
          data-name="Rectangle 13"
          width="5"
          height="5"
          rx="2.5"
          transform="translate(48 45)"
          fill="#d9aa27"
        />
        <Rect
          id="Rectangle_23"
          data-name="Rectangle 23"
          width="27"
          height="2"
          rx="1"
          transform="translate(49.753 28.161) rotate(135)"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};

export default CrossDot;
