import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext as StyledComponentThemeProvider } from 'styled-components';
import { ChallengesContext } from '../contexts/ChallengsContext';
import { ThemeContext } from '../contexts/ThemeContext';


import {ExperienceBarheader} from '../styles/components/ExperienceBar'

export function ExperienceBar(){
  const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themme = useContext(StyledComponentThemeProvider);
  const percentToNextLevel = Math.round(currentExperience * 100 ) / experienceToNextLevel;
  
  return(
    <ExperienceBarheader>
      <span> 0 xp</span>
      <div>
        <div style={{width: `${percentToNextLevel}%` }}/>

        <span className='currentExperience' style={{left: `${percentToNextLevel}%`}}>
          {currentExperience}xp 
        </span>
        
      </div>
      <span>{experienceToNextLevel}xp</span>
      
      <span className='SwitchToggle'> 
        <Switch 
          onChange={toggleTheme}
          checked={theme === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offHandleColor={themme.colors.blueDark}
          onColor={themme.colors.primary}
          offColor={themme.colors.grayline}
        >
        </Switch>
      </span>
      
    </ExperienceBarheader>
  );
}