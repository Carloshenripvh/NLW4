import styled from 'styled-components';

const CountdownContainer = styled.div`
  display: flex; 
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${props => props.theme.colors.title};

  &> div{
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${props => props.theme.colors.primary};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  &> div span{
   flex: 1;
  }

  &> div span:first-child{
    border-right: 1px solid ${props => props.theme.colors.background};;
  }

  &> div span:last-child{
   border-left: 1px solid ${props => props.theme.colors.background};;
  }

  &> span{
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  @media(max-width: 600px){
 

  }
  
`;

const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${props => props.theme.colors.buttonCownt};
  color: ${props => props.theme.colors.white};
  
  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color .2s;

  &:not(:disabled):hover{
    background: ${props => props.theme.colors.blueDark};
  }

  &:disabled{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.2);

    cursor: not-allowed;
  }
`;

const CountdownButtonActive = styled(CountdownButton)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.title};

  &:not(:disabled):hover{
    background: ${props => props.theme.colors.buttonHover};
    color: ${props => props.theme.colors.primary};
  }

  &:disabled{
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    cursor: not-allowed;
  }

  span {
    /* width: 2.25rem; */
    /* height: 5rem; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

export { CountdownContainer, CountdownButton, CountdownButtonActive}