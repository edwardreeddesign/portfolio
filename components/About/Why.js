import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade, H1, lineAnim, P, scrollReveal } from '../../elements';
import { useScroll } from '../../helpers/UseScroll';
import Link from 'next/link';
import Button from '../../elements/Button';

const Why = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  return (
    <Hide ref={element} animate={controls} variants={scrollReveal}>
      <motion.div>
        <H1 variants={fade} margin=".5rem 0" color="dark1">
          Why Choose Me?
        </H1>
        <motion.div variants={lineAnim} className="line"></motion.div>
      </motion.div>
      <P color="dark1" height="large">
        In a world of ever changing ways of doing almost everything. Now is the
        time to create a website that will change with how people use the
        internet.
      </P>
      <P color="dark1" height="large">
        With online shopping now outpacing retail shopping, your business needs
        to keep up with demand. From curbside delivery to conventional delivery,
        your business must be able to adapt to what your customer needs.
      </P>
      <P color="dark1" height="large">
        From retail stores that needs for customers to be able to purchase items
        for immediate pickup, to restaurants customers can choose their own
        menus for delivery or pickup, you need to be able to handle all
        requests.
      </P>
      <P color="dark1" height="large">
        I see small businesses choosing to use templates to create a website.
        That&apos;s fine, if you want to be the same, and have a &apos;cookie
        cutter&apos; website. One that you will see everywhere.
      </P>
      <P color="dark1" height="large">
        By choosing a person that actually creates sites from scratch,
        businesses will get exactly what they want, instead of getting what they
        can.
      </P>
      <Link href="/contact">
        <Button secondary>Contact</Button>
      </Link>
    </Hide>
  );
};

const Hide = styled(motion.div)`
  overflow: hidden;
  margin-bottom: 3rem;

  P {
    margin-bottom: 0.8rem;
  }
  Button {
    display: inline-block;
    width: 100%;
    margin: 1rem auto;
  }
`;
export default Why;
