import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 4548 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        d="M16 733.001C5821.77 -1070.02 2094.08 1141.5 4532 733.001"
        stroke="hsl(240, 100%, 80%)"
        stroke-width="30"
        strokeOpacity="0.7"
      />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: -1;
`;

export default Wave;
