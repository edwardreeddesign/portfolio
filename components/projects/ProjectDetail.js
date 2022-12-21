import { motion } from 'framer-motion';
import styled from 'styled-components';
import { fade, H1, H4, lineAnim, pageAnimation } from '../../elements';
import ProjectBranding from './ProjectBranding';
import ProjectDescription from './ProjectDescription';
import ProjectGroupImage from './ProjectGroupImage';
import ProjectHero from './ProjectHero';
import ProjectImage from './ProjectImage';
import ProjectStyles from './ProjectStyles';

/* eslint-disable @next/next/no-img-element */
const ProjectDetail = ({ project }) => {
  console.log(project);

  return (
    <>
      {project && (
        <Main
        // variants={pageAnimation}
        // initial="hidden"
        // animate="show"
        // exit="exit"
        >
          <ProjectHero project={project} />
          <ProjectDescription project={project} />
          <Branding>
            <H4 size="small" weight="light" align="center">
              Analysis & Creation
            </H4>
            {project.creation.map((create, idx) => (
              <ProjectBranding
                key={idx}
                title={create.title}
                desc1={create.desc1}
                desc2={create.desc2}
              />
            ))}
            <ProjectGroupImage img={project.groupImg} />
            {project.styles.map((style, idx) => (
              <ProjectStyles
                key={idx}
                colors={style.colors}
                fonts={style.fonts}
              />
            ))}
          </Branding>
          <ProjectImage img={project.design} />
        </Main>
      )}
    </>
  );
};

const Main = styled(motion.div)`
  margin: 4rem 0;
  overflow: hidden;
`;

const Branding = styled(motion.div)`
  padding: 2rem 0;
  background: ${props => props.theme.colors.light1};
`;
export default ProjectDetail;
