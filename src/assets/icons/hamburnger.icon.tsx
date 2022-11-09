import React from 'react';
import Svg, {G, Rect} from 'react-native-svg';

interface ArrowProps {
  width?: number;
  height?: number;
}

const Hamburger = ({width = 27, height = 21}: ArrowProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 27 21">
      <G id="Group_9" data-name="Group 9" transform="translate(-27 -23)">
        <Rect
          id="Rectangle_12"
          data-name="Rectangle 12"
          width="27"
          height="2"
          rx="1"
          transform="translate(27 23)"
          fill="#fff"
        />
        <Rect
          id="Rectangle_12-2"
          data-name="Rectangle 12"
          width="27"
          height="2"
          rx="1"
          transform="translate(27 32)"
          fill="#fff"
        />
        <Rect
          id="Rectangle_12-3"
          data-name="Rectangle 12"
          width="18"
          height="2"
          rx="1"
          transform="translate(27 41)"
          fill="#fff"
        />
        <Rect
          id="Rectangle_13"
          data-name="Rectangle 13"
          width="5"
          height="5"
          rx="2.5"
          transform="translate(49 39)"
          fill="#d9aa27"
        />
      </G>
    </Svg>
  );
};

export default Hamburger;
