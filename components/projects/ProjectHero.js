/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { fade2, H3, titleAnim } from '../../elements';
import { useScroll } from '../../helpers/UseScroll';

const ProjectHero = ({ project }) => {
  const [element, controls] = useScroll();
  return (
    <StyledHero
      variants={fade2}
      initial="hidden"
      animate={controls}
      ref={element}
      exit="exit"
    >
      <img src={project.mainImg} alt={project.title} />
      <Role>
        <H3 color="dark2" variants={titleAnim}>
          <span>Role:</span> {project.role}
        </H3>
        <H3 color="dark1" variants={titleAnim}>
          <span>Technologies:</span> {project.tech}
        </H3>
      </Role>
    </StyledHero>
  );
};

const StyledHero = styled(motion.div)`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 3rem;
  position: relative;
  margin: 0;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    z-index: -1;
  }
`;

const Role = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.425);
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 2rem;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 100%;
  gap: 1rem;
  /* margin-bottom: 6rem; */
  margin: 0 2rem 5rem 2rem;
  padding: 2rem;

  @media (min-width: 768px) {
    margin: 0 8rem 5rem 8rem;
  }

  span {
    color: ${props => props.theme.colors.main2};
  }
`;
export default ProjectHero;
