import SocialLinks from '../../components/About/SocialLinks';
import ProjectCard from '../../components/projects/Projectcard';

import {
  H1,
  lineAnim,
  pageAnimation,
  slider,
  sliderContainer,
} from '../../elements';
import { projects } from '../../helpers/ProjectsData';
import { motion } from 'framer-motion';
import Wave from '../../elements/Wave2';
import styled from 'styled-components';

const ProjectsPage = () => {
  return (
    <Wrapper
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="title">
        <H1 color="dark1" margin=".5rem 0">
          Projects
        </H1>
        <motion.div variants={lineAnim} className="line"></motion.div>
      </div>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Wave />
      <ProjectCard projects={projects} />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  padding: 5rem 2rem;
  transition: all 300ms ease;

  .title {
    margin-bottom: 5rem;
  }
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: hsl(0, 0%, 90%);
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: hsl(240, 100%, 90%);
`;
const Frame3 = styled(Frame1)`
  background: hsl(216, 64%, 77%);
`;
const Frame4 = styled(Frame1)`
  background: hsl(220, 30%, 12%);
`;
export default ProjectsPage;
