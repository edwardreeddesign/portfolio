import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wave = () => {
  return (
    <WaveSvg viewBox="0 0 4548 800" fill="none">
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        d="M5.99447 244.513C1132.5 -700.999 5177 1591.5 6464.99 231.501"
        stroke="hsl(240, 100%, 70%)"
        stroke-width="17"
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
