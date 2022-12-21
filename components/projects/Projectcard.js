/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { H1, H3, P } from '../../elements';
import Button from '../../elements/Button';
// import { projects } from '../../helpers/ProjectsData';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const ProjectCard = ({ projects }) => {
  console.log(projects);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current Index by 1
      setCurrentIndex((currentIndex + 1) % projects.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, projects]);

  // const { title, description, cta, tech, mainImg } = projects;

  return (
    <Container>
      <>
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{ display: idx === currentIndex ? 'block' : 'none' }}
          >
            <ProjectContainer>
              <Img>
                <img src={project.mainImg} alt={project.title} />
              </Img>
              <div className="cta">
                <Button
                  outline
                  onClick={() =>
                    setCurrentIndex(
                      (currentIndex - 1 + projects.length) % projects.length
                    )
                  }
                >
                  Previous
                </Button>
                <Button
                  outline
                  onClick={() =>
                    setCurrentIndex((currentIndex + 1) % projects.length)
                  }
                >
                  Next
                </Button>
              </div>
              <div className="info">
                <H1 margin="0 0 1rem 0">{project.title}</H1>
                <P align="left" color="dark2" margin="0 0 .5rem 0">
                  {project.description}
                </P>
                <H3 margin="2rem 0 1rem">Framework - {project.tech}</H3>
                <Link href={`/projects/${project.url}`}>
                  <Button primary>{project.cta}</Button>
                </Link>
              </div>
            </ProjectContainer>
          </div>
        ))}
      </>
    </Container>
  );
};

const Container = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15rem;

  .info {
    position: absolute;
    top: 50%;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.425);
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    padding: 2rem 5rem;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin: 2rem auto;

    @media (max-width: 768px) {
      position: relative;
      margin-bottom: 1rem;
      padding: 2rem;
    }
  }

  img {
    border-radius: 0.5rem;
    width: 75%;
    height: 80%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    object-fit: contain;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Img = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectContainer = styled.div`
 display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
  }
  .cta {
    position: absolute;
    top: 40%;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      position: relative;
      margin-bottom: 1rem;
    }

    Button {
      margin: 0 2rem;
    }
`;

export default ProjectCard;
