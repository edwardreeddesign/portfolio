import styled from 'styled-components';
import { motion } from 'framer-motion';
const Button = ({
  children,
  primary,
  secondary,
  outline,
  disabled,
  submit,
  onClick,
  a,
}) => {
  return (
    <StyledButton
      primary={primary}
      secondary={secondary}
      outline={outline}
      disabled={disabled}
      submit={submit}
      onClick={onClick}
      a={a}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(motion.button)`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-family: ${props => props.theme.fonts.accent};
  border-radius: 0.5rem;
  font-size: clamp(0.5rem, 3vw, 1.1rem);
  font-weight: 600;
  padding: 1.25rem 2.25rem;
  border: ${p =>
    p.outline
      ? '1px  solid hsl(220, 30%, 12%)'
      : '1px solid rgba(220, 30%, 52%)'};
  box-shadow: ${p => (p.outline ? 'none' : '0px 5px 15px rgba(0, 0, 0, 0.35)')};
  background: ${p =>
    p.primary
      ? 'hsl(220, 30%, 32%)'
      : p.secondary
      ? 'hsl(240, 100%, 90%)'
      : p.outline
      ? 'transparent'
      : ''};
  color: ${p =>
    p.outline ? 'hsl(220, 40%, 22%)' : p.primary ? 'hsl(217, 50%, 99%)' : ''};
  transition: all 350ms ease-in-out;

  &:disabled, &:disabled:hover, &:disabled:active {
    cursor: not-allowed;
    background-color: #ccc;
    color: #292929;
    border-color: #ccc;
    transform: scale(1) ;
    }
  }

  &:hover,
  &:focus,
  &:active {
    transform: scale(0.9);
    background: ${p =>
      p.primary
        ? 'hsl(220, 30%, 42%)'
        : p.secondary
        ? 'hsl(240, 100%,80%)'
        : ''};
  }
  border: ${p =>
    p.outline
      ? '1px solid hsl(216, 64%, 87%)'
      : '1px solid rgba(255, 255, 255, 0.3)'};
`;

export default Button;
