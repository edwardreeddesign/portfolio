import styled from 'styled-components';
import { FaCodepen, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Socials = () => {
  return (
    <StyledSocials>
      <a
        href="https://www.linkedin.com/in/edward-reed-designs"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/edwardreeddesign"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a href="">
        <FaCodepen />
      </a>
      <a
        href="https://www.instagram.com/edwardreeddesigns/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
    </StyledSocials>
  );
};

const StyledSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    cursor: pointer;
    margin: 1.25rem;
    font-size: 1.4rem;
    color: ${props => props.theme.colors.light1};
    transition: all 350ms ease;

    &:hover {
      transform: scale(1.5);
      color: ${props => props.theme.colors.accent2};
    }
  }
`;

export default Socials;
