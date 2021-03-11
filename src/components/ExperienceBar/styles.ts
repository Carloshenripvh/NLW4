import styled from 'styled-components';

const ExperienceBarheader = styled.header`
  display: flex;
  align-items: center;

  &> span{
  font-size: 1rem;
  }
  
  &> div{
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: ${props => props.theme.colors.grayline};
  margin: 0 1.5rem;
  position: relative;
  }

  &> div > div{
  height: 4px;
  border-radius: 4px;
  background: ${props => props.theme.colors.buttonSucess};
  }

  span.currentExperience{
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
  }
  /* switch dark */
  span.SwitchToggle{  /* SwitchToggle */
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 1rem 0 1rem 1.6rem;
  }
`;

export {ExperienceBarheader};