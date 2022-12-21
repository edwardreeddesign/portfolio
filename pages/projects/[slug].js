import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ProjectDescription from '../../components/projects/ProjectDescription';
import ProjectDetail from '../../components/projects/ProjectDetail';
import ProjectHero from '../../components/projects/ProjectHero';
import { fade, H1, H3, lineAnim, pageAnimation } from '../../elements';
import Button from '../../elements/Button';
import { projects } from '../../helpers/ProjectsData';

const ProjectScreen = () => {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find(project => project.url === slug);

  console.log(project);

  return (
    <div>
      <Main
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Link href="/projects">
          <H3
            color="light2"
            margin="2rem 0 2rem 2rem"
            weight="bold"
            spacing="small"
            font="main"
          >
            Back to Projects
          </H3>
        </Link>
        <H1 variants={fade} margin="1rem 2rem" weight="bold" color="light1">
          {project?.title}
        </H1>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <ProjectDetail project={project} />
      </Main>
    </div>
  );
};

const Main = styled(motion.div)`
  margin: 4rem 0;
  overflow: hidden;

  Button {
    margin: 2rem 0 4rem 2rem;
  }
`;
export default ProjectScreen;
