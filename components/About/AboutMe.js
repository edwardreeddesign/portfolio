import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade, lineAnim, scrollReveal } from '../../elements/Animations';
import Button from '../../elements/Button';
import { H1, P } from '../../elements';
import { useScroll } from '../../helpers/UseScroll';

const AboutMe = () => {
  const [element, controls] = useScroll();

  return (
    <Container>
      <Hide ref={element} animate={controls} variants={scrollReveal}>
        <H1 variants={fade} margin=".5rem 0" color="dark1">
          About Me
        </H1>
        <motion.div variants={lineAnim} className="line"></motion.div>
      </Hide>
      <Hide ref={element} animate={controls} variants={scrollReveal}>
        <P color="dark1" height="large">
          Hello, my name is <span>Ed Reed</span>. I live in Windsor Ontario
          Canada.
        </P>
        <P color="dark1" height="large">
          I had a career in construction, before suffering a life altering
          accident.
        </P>
        <P color="dark1" height="large">
          After high school I started in sales. I did extremely well with that,
          but I was always told &ldquo;you need to learn a trade&rdquo;. So
          that&lsquo;s what I did. I started in HVAC installation.
        </P>
        <P color="dark1" height="large">
          I started out as a &ldquo;helper&rdquo;, and quickly moved up to lead
          installer, running my own crew.
        </P>
        <P color="dark1" height="large">
          With construction being a semi-seasonal job (winter months are very
          slow), I grew tired of being laid off for the season.
        </P>
        <P color="dark1" height="large">
          {' '}
          I decided at the age of 36 to go back to school. I received a diploma
          in Network Engineering. In my city of Windsor Ontario, there
          weren&apos;t very many jobs in that field, and having a family with 2
          young children moving to a new city for a fresh start wasn&apos;t in
          the books for me. So I fell back to my trade.
        </P>
        <P color="dark1" height="large">
          Then December of 2012 came. While crossing the street, I was hit by a
          car, and my life would never be the same again.
        </P>
        <P color="dark1" height="large">
          I suffered major injuries and would never be able to do what I did
          before. It took many years of rehab and learning what I now could do,
          to get me where I am today.
        </P>
        <P color="dark1" height="large">
          My oldest son was just about to graduate High School, and decided he
          wanted to go to College for Web Development.
        </P>
        <P color="dark1" height="large">
          That was always something I wanted to do, so i started looking into it
          for myself. I started taking online courses. In a few short weeks, I
          created my first Website. Windsor Lodge 403 is a local Freemason Lodge
          and needed a site. They had asked me almost 5 years ago, because I
          mentioned I was going to start learning how to do it. I wasn&apos;t
          ready yet, still recouping from my injuries.
        </P>
        <P color="dark1" height="large">
          For most people, 2020 and 2021 haven&apos;t been very good for them.
          For me it has been a lifesaver. Going from not knowing what I was
          going to do with my career, to finding something I truly love. I enjoy
          creating something from just a vision in my head, to something that
          others will enjoy.
        </P>
        <P color="dark1" height="large">
          My previous employment really helps with my new career. I always
          worked with the homeowners on how they wanted their installation, and
          now I get to work with individuals and businesses to create a site
          that will help them get more business.
        </P>
        <P color="dark1" height="large">
          I have always had the ability to see what works and doesn't work for
          the companies I worked for. I can changes that are needed for them to
          succeed and what they are doing wrong, that is losing them business.
        </P>
        <P color="dark1" height="large">
          When I work for a company, I always make it part of my family. I go
          above and beyond what is asked of me, because if they succeed, then I
          too succeed.
        </P>
      </Hide>
      {/* <SocialLinks /> */}
    </Container>
  );
};

const Container = styled(motion.div)``;

const Hide = styled(motion.div)`
  overflow: hidden;

  P {
    margin-bottom: 0.8rem;
  }
`;
export default AboutMe;
