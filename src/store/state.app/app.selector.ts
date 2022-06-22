import {createSelector} from '@reduxjs/toolkit';
import styles from '../../constants/constents.styles';
const DarkThemeState = (state: any) => state.app.darkTheme;

export const themeSelector = createSelector(DarkThemeState, darkTheme => {
  if (darkTheme) {
    return {
      dT: true,
      ...styles.dark,
    };
  } else {
    return {
      dT: false,
      ...styles.light,
    };
  }
});
