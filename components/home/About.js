import Button from '../../elements/Button';
import { H1, P } from '../../elements';

//Styles
import styled from 'styled-components';

//Animations
import { motion } from 'framer-motion';
import { useScroll } from '../../helpers/UseScroll';
import { scrollReveal } from '../../elements/Animations';
import Link from 'next/link';
import Wave2 from '../../elements/Wave2';

const About = () => {
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
      <Wave2 />
      <Background>
        <H1 margin="0 0  2rem 0" weight="light" align="center">
          About Me
        </H1>
        <Text>
          <p>
            “Anybody who can go down 3,000 feet in a mine can sure as hell learn
            to program as well... Anybody who can throw coal into a furnace can
            learn how to program, for God&apos;s sake!” <cite>- Joe Biden</cite>
          </p>
          <p>
            While I did not go down 3,000 feet into a mine, I did start my adult
            life in a completely different route from Web Development. I started
            my career in Sales, moved to Construction, then went to school for
            Network Engineering, then back to construction.
          </p>
          <p>
            After a life altering accident (I was hit by a car), I was unable to
            go back to my previous job. I spent years rehabilitating just to get
            back to a semi normal life again. I started online courses and
            taught myself Web Development.
          </p>
        </Text>
        <Link href="/">
          <Button secondary>Learn More About Me</Button>
        </Link>
      </Background>
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
  padding: 3rem;

  Button {
    margin: 0 auto;
  }
`;

const Background = styled.div`
  background-color: rgba(255, 255, 255, 0.125);
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 2rem;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Text = styled(motion.div)`
  margin-bottom: 4rem;
  p {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.dark2};
  }

  cite {
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    padding: 0 10rem;
  }
`;
export default About;
