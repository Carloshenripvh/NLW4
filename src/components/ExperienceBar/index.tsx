import { useContext } from 'react';
import { ThemeContext as StyledComponentThemeProvider } from 'styled-components';
import { ChallengesContext } from '../../contexts/ChallengsContext';

import {ExperienceBarheader} from '../ExperienceBar/styles'
import { SwitchButton } from '../Switchdarkmode'

export function ExperienceBar(){
  const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);

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

      <SwitchButton  />

      </span>
      
    </ExperienceBarheader>
  );
}