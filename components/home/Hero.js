import styled from 'styled-components';
import { H1, H2 } from '../../elements';
import Button from '../../elements/Button';

//Framer Motion
import { motion } from 'framer-motion';
import Wave from '../../elements/Wave';
import { titleAnim, fade, photoAnim } from '../../elements/Animations';
import Link from 'next/link';

const Hero = () => {
  return (
    <StyledHero>
      <Wave />
      <Background>
        <ImageContainer>
          <motion.img
            variants={photoAnim}
            src="/images/ed-reed.jpeg"
          ></motion.img>
        </ImageContainer>
        <Intro>
          <Hide>
            <H1
              variants={titleAnim}
              margin="0 0 0 1rem "
              weight="normal"
              color="dark2"
              align="center"
            >
              Ed Reed
            </H1>
          </Hide>
          <Hide>
            <H2
              variants={titleAnim}
              weight="bold"
              // margin="0 0 0 1rem "
              color="dark1"
              align="center"
            ></H2>
          </Hide>
          <Hide>
            <H2
              variants={titleAnim}
              weight="bold"
              margin="0 0 1rem 0"
              color="dark1"
              align="center"
              size="large"
            >
              Web Developer, Programmer, Front-End Designer, UI/UX
            </H2>
          </Hide>

          <Buttons>
            <motion.div variants={fade}>
              <Link href="/contact">
                <Button primary> LET&apos;S WORK TOGETHER</Button>
              </Link>
            </motion.div>
            <motion.div variants={fade}>
              <Link href="/about">
                <Button secondary>VIEW MY WORK</Button>
              </Link>
            </motion.div>
          </Buttons>
        </Intro>
      </Background>
    </StyledHero>
  );
};

const StyledHero = styled(motion.div)`
  min-height: 80vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: rgba(255, 255, 255, 0.125);
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 2rem;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 3;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 3rem 8rem;

    h1,
    h2 {
      margin-left: 2rem;
      text-align: left;
    }
    h1 {
      margin-bottom: 3rem;
    }
    h2 {
      margin-bottom: 0.5rem;
      margin-top: 0;
    }
  }
`;
const ImageContainer = styled(motion.div)`
  flex: 1;
  position: relative;

  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: ${props => props.theme.shadows.shadow1};
    @media (min-width: 768px) {
      height: 70vh;
    }
    @media (min-width: 1030px) {
      height: 80vh;
    }
  }
`;

const Intro = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Buttons = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 0 2rem;
  gap: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export default Hero;
