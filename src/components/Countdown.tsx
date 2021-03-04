import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import { CountdownButton, CountdownContainer,CountdownButtonActive } from '../styles/components/Countdown';



export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinshed,
    isActive,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      {hasFinshed ? (
        <CountdownButton
          disabled
         
        >
          Ciclo encerrado
        </CountdownButton>
      ) : (
          <>
            {isActive ? (
              <CountdownButtonActive
                type="button"
                onClick={resetCountdown}
              >
                Stop
                <img src="icons/close.svg" alt="close" />

              </CountdownButtonActive>
              
            ) : (
                <CountdownButton
                  type="button"
                  onClick={startCountdown}
                >
                  Start
                </CountdownButton>
              )}
          </>
        )}


    </div>
  );

}