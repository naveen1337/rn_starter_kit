import React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

interface ArrowProps {
  width?: number;
  height?: number;
}

const BackgroundTop = ({width = 420, height = 309}: ArrowProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 420 309">
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_231"
            data-name="Rectangle 231"
            width="420"
            height="309"
            transform="translate(9211 5181)"
            fill="#fff"
          />
        </ClipPath>
      </Defs>
      <G
        id="Mask_Group_4"
        data-name="Mask Group 4"
        transform="translate(-9211 -5181)"
        clip-path="url(#clip-path)">
        <G
          id="Group_1600"
          data-name="Group 1600"
          transform="translate(9211 5181)">
          <G
            id="Group_1598"
            data-name="Group 1598"
            transform="translate(0 -17)">
            <Path
              id="Path_912"
              data-name="Path 912"
              d="M415,640.4,5,541.227c-2.761,0-5-3.172-5-7.084V7.084C0,3.172,2.239,0,5,0H415c2.761,0,5,3.172,5,7.084V633.32C420,637.233,417.761,640.4,415,640.4Z"
              transform="translate(0 -314)"
              fill="#d9aa27"
            />
            <Path
              id="Path_913"
              data-name="Path 913"
              d="M5,740l410-90.559c2.761,0,5-2.9,5-6.469V6.469C420,2.9,417.761,0,415,0H5C2.239,0,0,2.9,0,6.469V733.531C0,737.1,2.239,740,5,740Z"
              transform="translate(0 -414)"
              fill="#fff"
              opacity="0.15"
            />
            <Path
              id="Path_914"
              data-name="Path 914"
              d="M5,740l410-90.559c2.761,0,5-2.9,5-6.469V6.469C420,2.9,417.761,0,415,0H5C2.239,0,0,2.9,0,6.469V733.531C0,737.1,2.239,740,5,740Z"
              transform="translate(0 -431)"
              fill="#143258"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default BackgroundTop;
