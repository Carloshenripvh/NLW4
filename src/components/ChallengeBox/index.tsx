import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengsContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import {
  ChallengeBoxContainer,
  ChallengeActive, 
  FooterButton,
  ChallengeNotActive}
  from './styles';

export function ChallengeBox() {
  const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSuceeeded(){
    completeChallenge();
    resetCountdown();
  }

  function handleChallegengeFailed(){
    resetChallenge();
    resetCountdown();
  }
  return (
    <ChallengeBoxContainer>
      {activeChallenge ? (
       <ChallengeActive>
          <header> Ganhe {activeChallenge.amount}xp </header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <FooterButton>
            <button 
              type="button"
              onClick={handleChallegengeFailed}
            >
              Falhei
              </button>
            <button
              type="button"
              onClick={handleChallengeSuceeeded}
            >
              Completei
              </button>
          </FooterButton>
        </ChallengeActive>
      ) : (
          <ChallengeNotActive>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level up" />
          Avance de level completando desafios.
        </p>
          </ChallengeNotActive>
        )
      }
    </ChallengeBoxContainer>
  );
}