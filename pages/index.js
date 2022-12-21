import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { H1, H2, H3, H4, P } from '../elements/Typography';
import Hero from '../components/home/Hero';
import { motion } from 'framer-motion';
import { pageAnimation } from '../elements/Animations';
import About from '../components/home/About';
import Technologies from '../components/home/Technologies';
import styled from 'styled-components';

export default function Home() {
  return (
    <Wrapper
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Hero />
      <About />
      <Technologies />
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  padding: 5rem 2rem;
  transition: all 300ms ease;
`;
