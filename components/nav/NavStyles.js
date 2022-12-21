import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0.5rem 0; */
  padding: 0;
  background: ${props => props.theme.colors.dark1};
  z-index: 1000;
  height: 4.2rem;
  position: fixed;
  width: 100%;
  margin-top: -4rem;
  box-shadow: ${props => props.theme.shadows.shadow2};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 10rem;
  height: 8rem;
  object-fit: cover;
  position: relative;
  z-index: 1111;
  margin-left: 2rem;
`;

export const ListItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  margin-right: 2rem;

  li {
    position: relative;
    display: flex;
    gap: 2rem;

    a {
      color: ${props => props.theme.colors.light1};
    }
  }

  .active {
    position: relative;
    color: ${props => props.theme.colors.light2};
    font-weight: bold;
    transition: all 350ms ease;
  }

  .active::after {
    content: '';
    height: 3px;
    background: ${props => props.theme.colors.main1};
    position: absolute;
    bottom: -20%;
    right: 0%;
    width: 100%;
  }
`;

export const MobileList = styled.div`
  position: fixed;
  top: 6.4rem;
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? '.9' : '0')};
  bottom: ${({ isOpen }) => (isOpen ? '0' : '100%')};
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '100vh' : '0')};
  background: ${props => props.theme.colors.dark1};
  /* margin: 4rem; */
  padding: 0 0 12rem;
  margin-top: -6rem;
  z-index: 1;
  transition: all 300ms ease-in-out;

  li {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    margin-top: 3rem;
  }

  a {
    color: ${props => props.theme.colors.light1};
    letter-spacing: ${props => props.theme.letterSpacing.small};
    font-size: 1.55rem;
  }

  .active {
    position: relative;
    color: ${props => props.theme.colors.light2};
    font-weight: bold;
    transition: all 350ms ease;
  }
  .active::after {
    content: '';
    height: 3px;
    background: ${props => props.theme.colors.main1};
    position: absolute;
    bottom: -12%;
    right: 0%;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  cursor: pointer;
  z-index: 10000;
  padding: 0 2rem;

  .line {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 1.7rem;
    height: 3px;
    background: ${props => props.theme.colors.main1};
    margin-bottom: 0.3rem;
    transition: all 350ms ease-in-out;
  }

  .line1 {
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(45deg) translate(0, 9.5px) ' : '0'};
    background: ${({ isOpen }) =>
      isOpen ? '${props => props.theme.colors.dark3}' : ''};
  }

  .line2 {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }

  .line3 {
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(-45deg) translate(0, -10.5px)' : '0'};
    color: ${({ isOpen }) =>
      isOpen ? '${props => props.theme.colors.dark3}' : ''};
  }
`;
