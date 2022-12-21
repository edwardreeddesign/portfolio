import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScroll } from '../../helpers/UseScroll';
import { scrollReveal } from '../../elements/Animations';
import { H1 } from '../../elements';
import Card from './Card';
import Wave from '../../elements/Wave3';

const Technologies = () => {
  const [element, controls] = useScroll();
  return (
    <Wrapper
      transition={{ duration: 0.75 }}
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
      exit="exit"
    >
      <Wave />
      <H1 color="dark1">Technologies Used</H1>
      <Cards>
        <Card />
      </Cards>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  min-height: 90vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 5rem;
  /* background-image: linear-gradient(
    to right bottom,
    #05224d,
    #0b2e62,
    #113a78,
    #18468e,
    #1e53a5,
    #2a5eb1,
    #3569bd,
    #3f74c9,
    #507fcc,
    #608ace,
    #6f95d0,
    #7fa0d2
  ); */
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 5rem 0;
`;
export default Technologies;
