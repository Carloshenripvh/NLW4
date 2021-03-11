import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengsContext';
import {CompletedChallengesContainer} from '../CompletedChallenges/styles';

export function CompletedChallenges(){
  const {challengesCompleted} = useContext(ChallengesContext);
  return(
    <CompletedChallengesContainer>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </CompletedChallengesContainer>
  );
}