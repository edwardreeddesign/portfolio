import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  fade2,
  H2,
  P,
  slideInLeft,
  slideInRight,
  titleAnim,
} from '../../elements';
import { projects } from '../../helpers/ProjectsData';
import { useScroll } from '../../helpers/UseScroll';

const ProjectBranding = ({ title, desc1, desc2 }) => {
  const [element, controls] = useScroll();
  return (
    <Wrapper
    // variants={fade2}
    // initial="hidden"
    // animate={controls}
    // ref={element}
    // exit="exit"
    >
      <H2 align="center" margin="0 0 1rem 0" variants={titleAnim}>
        {title}
      </H2>
      <P variants={slideInLeft}>{desc1}</P>
      <P variants={slideInRight}>{desc2}</P>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  padding: 0 2rem;
`;

export default ProjectBranding;
