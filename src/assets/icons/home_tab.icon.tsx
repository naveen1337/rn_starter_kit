import React from 'react';
import Svg, {SvgProps, Path, Defs, Rect, G, ClipPath} from 'react-native-svg';
import {useSelector} from 'react-redux';
import styles from '../../constants/constents.styles';
import {themeSelector} from '../../store/state.app/app.selector';

interface PropTypes {
  theme: boolean;
  active: boolean;
}

function Icon(props: PropTypes) {
  const theme = useSelector(themeSelector);
  const fillClr = theme.dT ? styles.dark.bg : styles.light.primary;
  const strokeClr = theme.dT ? '#0D1320' : '#3A2B13';

  return (
    <Svg width="24" height="21" viewBox="0 0 24 21" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke={props.active ? 'transparent' : strokeClr}
        d="M14.1155 13.4504C12.5193 13.4504 10.9483 13.4504 9.35857 13.4504C9.35857 15.7978 9.35857 18.1374 9.35857 20.4865C7.40709 20.4865 5.47385 20.4865 3.52766 20.4865C3.52766 17.3505 3.52766 14.2209 3.52766 11.0761C2.36078 11.0761 1.20683 11.0761 0.0534694 11.0761C0.048176 11.0655 0.0428827 11.0543 0.0381775 11.0437C3.93231 7.53308 7.82703 4.02301 11.7347 0.5C15.6359 4.01654 19.533 7.52955 23.4618 11.0708C22.2655 11.0708 21.1121 11.0708 19.9453 11.0708C19.9453 14.2203 19.9453 17.3552 19.9453 20.5C17.9979 20.5 16.0646 20.5 14.1155 20.5C14.1155 18.1574 14.1155 15.8125 14.1155 13.4504Z"
        fill={props.active ? fillClr : 'transparent'}
      />
    </Svg>
  );
}

export default Icon;
