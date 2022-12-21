import { motion } from 'framer-motion';
import styled from 'styled-components';
import Form from '../components/Contact.js/Form';
import { pageAnimation } from '../elements';

const ContactPage = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Form />
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)``;
export default ContactPage;
