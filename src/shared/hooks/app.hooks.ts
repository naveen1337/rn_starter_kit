import {themeSelector} from '@state/state.app/app.selector';
import {useSelector} from 'react-redux';
import colors from '@colors';

export function useTheme() {
  const theme = useSelector(themeSelector);
  return {theme, colors};
}
