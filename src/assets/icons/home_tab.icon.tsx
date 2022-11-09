import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

interface ArrowProps {
  width?: number;
  height?: number;
  active: boolean;
}

const Home = ({width = 27, height = 27}: ArrowProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 27 27">
      <G
        id="vuesax_outline_home-2"
        data-name="vuesax/outline/home-2"
        transform="translate(-620 -188)">
        <G id="home-2" transform="translate(620 188)">
          <Path
            id="Vector"
            d="M18.609,24.164H5.581A5.589,5.589,0,0,1,0,18.572V10.235a6.19,6.19,0,0,1,2.16-4.4L8.225,1.11A5.849,5.849,0,0,1,14.852.952L21.8,5.824a6.146,6.146,0,0,1,2.385,4.568v8.191A5.587,5.587,0,0,1,18.609,24.164ZM9.26,2.438,3.2,7.163a4.572,4.572,0,0,0-1.508,3.072v8.337a3.9,3.9,0,0,0,3.893,3.9H18.609A3.894,3.894,0,0,0,22.5,18.583V10.392a4.464,4.464,0,0,0-1.665-3.184L13.884,2.336A4.188,4.188,0,0,0,9.26,2.438Z"
            transform="translate(1.405 1.431)"
            fill="#143258"
          />
          <Path
            id="Vector-2"
            data-name="Vector"
            d="M.843,5.058A.849.849,0,0,1,0,4.215V.843A.849.849,0,0,1,.843,0a.849.849,0,0,1,.843.843V4.215A.849.849,0,0,1,.843,5.058Z"
            transform="translate(12.657 16.035)"
            fill="#143258"
          />
          <Path
            id="Vector-3"
            data-name="Vector"
            d="M0,0H27V27H0Z"
            fill="none"
            opacity="0"
          />
        </G>
      </G>
    </Svg>
  );
};

export default Home;
