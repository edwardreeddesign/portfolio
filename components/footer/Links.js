import Link from 'next/link';
import styled from 'styled-components';
import { H4 } from '../../elements';

const Links = () => {
  return (
    <StyledLinks>
      <Link href="/">
        <H4 color="light1" size="small" margin="0 .55rem">
          Home
        </H4>
      </Link>
      <Link href="/about">
        <H4 color="light1" size="small" margin="0 .55rem">
          About
        </H4>
      </Link>
      <Link href="/projects">
        <H4 color="light1" size="small" margin="0 .55rem">
          Projects
        </H4>
      </Link>
      <Link href="/Contact">
        <H4 color="light1" size="small" margin="0 .55rem">
          Contact
        </H4>
      </Link>
    </StyledLinks>
  );
};

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;
export default Links;
