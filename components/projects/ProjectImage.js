/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { fade2, H1, H4 } from '../../elements';
import { useScroll } from '../../helpers/UseScroll';

const ProjectImage = ({ img }) => {
  const [element, controls] = useScroll();
  return (
    <StyledImage
    // variants={fade2}
    // initial="hidden"
    // animate={controls}
    // ref={element}
    // exit="exit"
    >
      <H4 size="small" weight="medium">
        UI & Components
      </H4>
      <H1 weight="bold" margin="1rem 0 2rem 0">
        Design
      </H1>
      <img src={img} alt="project image" lazy />
    </StyledImage>
  );
};

const StyledImage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 5rem;
  margin: 5rem auto;

  img {
    width: 100%;
  }

  @media (min-width: 1080px) {
    margin: 5rem 10rem;
  }
`;

export default ProjectImage;
