import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengsContext';
import { ProfileContainer } from '../styles/components/Profile';


export function Profile(){
  const {level} = useContext(ChallengesContext);
  return(
    <ProfileContainer>
      <img src="https://github.com/Carloshenripvh.png" alt="Carlos Araujo"/>
      <div>
        <strong>Carlos Araujo</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
          </p>
      </div>
    </ProfileContainer>
  );
}