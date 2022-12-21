import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCodepen, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const SocialLinks = () => {
  return (
    <StyledLinks>
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
    </StyledLinks>
  );
};

const StyledLinks = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.125);
  border-radius: 0.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  font-size: 2rem;
  padding: 2rem 0;
  backdrop-filter: blur(10px);
  margin: 2rem 0;

  @media (min-width: 768px) {
    font-size: 5rem;
  }

  a {
    color: ${props => props.theme.colors.dark2};
    transition: all 350ms ease-in-out;
    transform-origin: top;

    &:hover {
      color: ${props => props.theme.colors.dark3};
      transform: scale(1.2);
    }
  }
`;
export default SocialLinks;
