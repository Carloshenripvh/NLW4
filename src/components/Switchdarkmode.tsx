import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../contexts/ThemeContext';
import { ThemeContext as StyledComponentThemeProvider } from 'styled-components';

export function SwitchButton() {

  const color = useContext(StyledComponentThemeProvider);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return(
    <Switch 
      onChange={toggleTheme}
      checked={theme === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      offHandleColor={color.colors.blueDark}
      onColor={color.colors.primary}
      offColor={color.colors.grayline}
    >
    </Switch>
)
}
