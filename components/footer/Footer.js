/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import { H4 } from '../../elements';
import Links from './Links';
import Socials from './Socials';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLogo>
        <img
          src="/images/Logos/full-logo.svg"
          alt="Edward Reed Designs full logo"
        />
      </StyledLogo>
      <Socials />
      <Links />
      <CopyRight>
        <h4>©2021 Edward Reed Designs</h4>
      </CopyRight>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background: ${props => props.theme.colors.dark1};
  padding: 1rem 0;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.45);
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 4rem;
  }
`;

const CopyRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: cursive;
  color: ${props => props.theme.colors.light2};

  h4 {
    font-size: 0.75rem;
  }
`;
export default Footer;
