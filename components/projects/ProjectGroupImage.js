/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScroll } from '../../helpers/UseScroll';
import { fade } from '../../elements';

const ProjectGroupImage = ({ img }) => {
  const [element, controls] = useScroll();
  return (
    <StyledGroupImg
    // variants={fade}
    // initial="hidden"
    // animate={controls}
    // ref={element}
    // exit="exit"
    >
      <img src={img} alt="group image" />
    </StyledGroupImg>
  );
};

const StyledGroupImg = styled(motion.div)`
  margin: 4rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0 5rem; */
  margin: 4rem 2rem;
  img {
    width: 100%;
    filter: drop-shadow(2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02))
      drop-shadow(6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028))
      drop-shadow(12.5px 12.5px 10px rgba(0, 0, 0, 0.035))
      drop-shadow(22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042))
      drop-shadow(41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05))
      drop-shadow(100px 100px 80px rgba(0, 0, 0, 0.07));
  }

  @media (min-width: 768px) {
    margin: 4rem 10rem;
    img {
      /* width: 90%; */
    }
  }
`;
export default ProjectGroupImage;
