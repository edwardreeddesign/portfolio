import { useScroll } from '../helpers/UseScroll';

//Styles
import styled from 'styled-components';
//Animations
import { motion } from 'framer-motion';
import {
  fade,
  lineAnim,
  pageAnimation,
  scrollReveal,
} from '../elements/Animations';
import ScrollTop from '../helpers/ScrollTop';
import AboutMe from '../components/About/AboutMe';
import SocialLinks from '../components/About/SocialLinks';
import { H1 } from '../elements';
import Why from '../components/About/Why';

const About = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  return (
    <StyledAbout
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutMe />
      <motion.div ref={element2} animate={controls2} variants={scrollReveal}>
        <SocialLinks />
      </motion.div>
      <Why />
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  padding: 5rem 2rem;
  transition: all 300ms ease;

  @media (min-width: 768px) {
    padding: 5rem 9rem;
  }

  @media (min-width: 1060px) {
    padding: 5rem 15rem;
  }
`;
export default About;
