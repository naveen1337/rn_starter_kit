import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

interface ArrowProps {
  width?: number;
  height?: number;
  active: boolean;
}

const Task = ({width = 27, height = 27}: ArrowProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 27 27">
      <G
        id="vuesax_outline_task-square"
        data-name="vuesax/outline/task-square"
        transform="translate(-492 -316)">
        <G id="task-square" transform="translate(492 316)">
          <Path
            id="Vector"
            d="M6.694,1.673H.837A.843.843,0,0,1,0,.837.843.843,0,0,1,.837,0H6.694a.837.837,0,1,1,0,1.673Z"
            transform="translate(13.115 9.14)"
            fill="#143258"
          />
          <Path
            id="Vector-2"
            data-name="Vector"
            d="M1.671,4.181a.828.828,0,0,1-.591-.245L.243,3.1A.836.836,0,0,1,1.425,1.916l.245.245L3.59.243A.836.836,0,0,1,4.772,1.425l-2.51,2.51A.836.836,0,0,1,1.671,4.181Z"
            transform="translate(6.337 7.473)"
            fill="#143258"
          />
          <Path
            id="Vector-3"
            data-name="Vector"
            d="M6.694,1.673H.837A.843.843,0,0,1,0,.837.843.843,0,0,1,.837,0H6.694a.837.837,0,0,1,0,1.673Z"
            transform="translate(13.115 17.019)"
            fill="#143258"
          />
          <Path
            id="Vector-4"
            data-name="Vector"
            d="M1.671,4.181a.828.828,0,0,1-.591-.245L.243,3.1A.836.836,0,0,1,1.425,1.916l.245.245L3.59.243A.836.836,0,0,1,4.772,1.425l-2.51,2.51A.836.836,0,0,1,1.671,4.181Z"
            transform="translate(6.337 15.36)"
            fill="#143258"
          />
          <Path
            id="Vector-5"
            data-name="Vector"
            d="M0,0H27V27H0Z"
            fill="none"
            opacity="0"
          />
          <Path
            id="Vector-6"
            data-name="Vector"
            d="M15.484,24.211H8.727C2.613,24.211,0,21.6,0,15.484V8.727C0,2.613,2.613,0,8.727,0h6.757c6.115,0,8.727,2.613,8.727,8.727v6.757C24.211,21.6,21.6,24.211,15.484,24.211ZM8.727,1.689c-5.191,0-7.038,1.847-7.038,7.038v6.757c0,5.191,1.847,7.038,7.038,7.038h6.757c5.191,0,7.038-1.847,7.038-7.038V8.727c0-5.191-1.847-7.038-7.038-7.038Z"
            transform="translate(1.395 1.395)"
            fill="#143258"
          />
        </G>
      </G>
    </Svg>
  );
};

export default Task;
