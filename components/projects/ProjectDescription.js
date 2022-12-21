import { motion } from 'framer-motion';
import styled from 'styled-components';
import { fade, fade2, H1, P, titleReveal } from '../../elements';
import Button from '../../elements/Button';
import { useScroll } from '../../helpers/UseScroll';

const ProjectDescription = ({ project }) => {
  const [element, controls] = useScroll();

  return (
    <Wrapper
      //   variants={fade2}
      initial="hidden"
      animate={controls}
      ref={element}
      exit="exit"
    >
      <Title>
        <H1 weight="medium" color="light2" variants={fade}>
          The Project
        </H1>
        <Reveal variants={titleReveal}></Reveal>
      </Title>
      <P color="light2">{project.longDescription}</P>
      <a href={project.visit} target="_blank" rel="noopener noreferrer">
        <Button accent>View Website</Button>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  margin: 2rem 0;
  overflow: hidden;
  display: flex;
  min-height: 50vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3rem 5rem;
  background: ${props => props.theme.colors.dark1};
  box-shadow: ${props => props.theme.shadows.shadow1};
  P {
    margin: 2rem 0;
  }

  @media (min-width: 768px) {
    P {
      padding: 2rem 10rem;
    }
  }
`;
const Title = styled(motion.div)`
  position: relative;

  H1 {
    position: relative;
  }
`;
const Reveal = styled(motion.div)`
  position: absolute;
  background-color: ${props => props.theme.colors.light1};
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export default ProjectDescription;
