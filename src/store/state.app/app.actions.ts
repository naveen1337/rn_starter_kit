import {changeTheme} from './index';

export function changeThemeAction() {
  return (dispatch: any, getState: any) => {
    const currentTheme = getState().app.darkTheme;
    dispatch(changeTheme(!currentTheme));
  };
}
