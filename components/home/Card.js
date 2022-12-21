/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { wrap } from 'popmotion';
import { tech } from '../../helpers/tech';
import { H2, P, scrollReveal } from '../../elements';
import { useScroll } from '../../helpers/UseScroll';

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = ({ offset, velocity }) => {
  return Math.abs(offset) * velocity;
};

const Card = () => {
  const [element, controls] = useScroll();
  const [[page, direction], setPage] = useState([0, 0]);

  const techIndex = wrap(0, tech.length, page);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <Wrapper
      //   transition={{ duration: 0.75 }}
      variants={variants}
      ref={element}
      animate={controls}
      initial="hidden"
      custom={direction}
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
          paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
          paginate(-1);
        }
      }}
    >
      <StyledCard>
        <Icon>
          <img src={tech[techIndex].img} alt={tech[techIndex].title} />
          <H2 color="dark1" weight="bold" size="large">
            {tech[techIndex].title}
          </H2>
        </Icon>
        <CardInfo>
          <P color="dark2" align="center">
            {' '}
            &ldquo;{tech[techIndex].info}&rdquo;
          </P>
        </CardInfo>
        {/* <Image src={tech[techIndex].img} alt={tech[techIndex].title} />
        <Title>{tech[techIndex].title}</Title>
        <Content>&ldquo;{tech[techIndex].info}&rdquo;</Content> */}
        <Next
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
        >
          {'▶'}
        </Next>
        <Prev
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
        >
          {'◀'}
        </Prev>
      </StyledCard>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;

  background-color: rgba(255, 255, 255, 0.425);
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 20px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const StyledCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 5rem;
  width: 100%;
  object-fit: contain;
  border-radius: 8px 8px 0 0;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const Content = styled.p`
  font-size: 16px;
  margin-top: 8px;
  line-height: 1.5;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
  background-color: rgba(255, 255, 255, 0.125);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  img {
    height: 5rem;
    width: 5rem;
    object-fit: contain;
    /* background: ${props => props.theme.colors.dark1}; */
    /* mix-blend-mode: color-burn; */
  }
`;

const CardInfo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem;
  flex: 1;

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 3rem 4rem;
  }
`;

const Next = styled(motion.div)`
  right: 10px;
  top: calc(50% - 20px);
  position: absolute;
  background: ${props => props.theme.colors.light2};
  color: ${props => props.theme.colors.dark1};
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 24px;
  z-index: 2;
  box-shadow: ${props => props.theme.shadows.shadow1};
`;

const Prev = styled(motion.div)`
  left: 10px;

  top: calc(50% - 20px);
  position: absolute;
  background: ${props => props.theme.colors.light2};
  color: ${props => props.theme.colors.dark1};
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 24px;
  z-index: 2;
  box-shadow: ${props => props.theme.shadows.shadow1};
`;
export default Card;
