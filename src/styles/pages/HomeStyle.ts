import styled from 'styled-components';

const HomeContainer = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1; 
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;

    @media(max-width: 600px){
    display: flex;
    flex-direction:column;
    }
  }
`;

export { HomeContainer};