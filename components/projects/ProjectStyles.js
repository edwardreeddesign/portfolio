/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScroll } from '../../helpers/UseScroll';
import { fade } from '../../elements';

const ProjectStyles = ({ colors, fonts }) => {
  const [element, controls] = useScroll();
  return (
    <Wrapper
      variants={fade}
      ref={element}
      animate={controls}
      initial="hidden"
      exit="exit"
    >
      {fonts?.map(font => (
        <Fonts key={font.img}>
          <img src={font.img} alt="font" />
        </Fonts>
      ))}
      {colors?.map(color => (
        <Color key={color.img}>
          <img src={color.img} alt="font" />
          <p>{color.color}</p>
        </Color>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: var(--clr-dark);
`;

const Fonts = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    margin: 1rem;
    box-shadow: ${props => props.theme.shadows.shadow1};
    transition: all 350ms ease-in-out;
    border-radius: 1rem 0 1rem;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Color = styled(motion.div)`
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;

    img {
      width: 5rem;
      height: 5rem;
      filter: drop-shadow(2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02))
        drop-shadow(6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028))
        drop-shadow(12.5px 12.5px 10px rgba(0, 0, 0, 0.035))
        drop-shadow(22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042))
        drop-shadow(41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05))
        drop-shadow(100px 100px 80px rgba(0, 0, 0, 0.07));
      margin: 0 1rem 1rem 1rem;
      transition: all 350ms ease-in-out;

      @media (min-width: 768px) {
        height: 7rem;
        width: 7rem;
      }
    }
    &:hover {
      filter: drop-shadow(-0.8px -1.8px 2.2px rgba(0, 0, 0, 0.02))
        drop-shadow(-4.7px -5.7px 5.3px rgba(0, 0, 0, 0.028))
        drop-shadow(-9.5px -11.5px 10px rgba(0, 0, 0, 0.035))
        drop-shadow(-19.3px -21.3px 17.9px rgba(0, 0, 0, 0.042))
        drop-shadow(-38.8px -40.8px 33.4px rgba(0, 0, 0, 0.05))
        drop-shadow(-93px -90px 80px rgba(0, 0, 0, 0.07));
    }
  }
  `;
export default ProjectStyles;
