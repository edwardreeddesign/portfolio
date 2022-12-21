import styled from 'styled-components';
import { motion } from 'framer-motion';

export const P = styled(motion.p)`
  font-family: ${props => props.theme.fonts.main};
  margin: ${props => (props.margin ? props.margin : 0)};

  font-size: ${props => {
    switch (props.size) {
      case 'medium':
        return '1.125rem';
      case 'small':
        return '1rem';
      case 'xSmall':
        return '.875rem';
      case 'xxSmall':
        return '.575rem';
      default:
        return '1.125rem';
    }
  }};

  line-height: ${props => {
    switch (props.height) {
      case 'large':
        return '1.8375rem';
      case 'medium':
        return '1.4375rem';
      case 'small':
        return '1.275rem';
      case 'xSmall':
        return '1.125';
      case 'xxSmall':
        return '1';
      default:
        return '1.4375rem';
    }
  }};

  font-weight: ${props => {
    switch (props.weight) {
      case 'thin':
        return 100;
      case 'light':
        return 200;
      case 'medium':
        return 300;
      case 'normal':
        return 400;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};

  color: ${props => {
    switch (props.color) {
      case 'main1':
        return props.theme.colors.main1;
      case 'main2':
        return props.theme.colors.main2;
      case 'dark1':
        return props.theme.colors.dark1;
      case 'dark2':
        return props.theme.colors.dark2;
      case 'dark3':
        return props.theme.colors.dark3;
      case 'light1':
        return props.theme.colors.light1;
      case 'light2':
        return props.theme.colors.light2;
      default:
        return props.theme.colors.dark4;
    }
  }};

  text-align: ${props => (props.align ? props.align : 'left')};
`;

export const H1 = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.title};
  font-size: ${props => {
    switch (props.size) {
      case 'regular':
        return 'clamp(2rem, 3vw, 2.45rem)';
      case 'large':
        return 'clamp(2.25rem, 5vw, 3.25rem)';
      default:
        return 'clamp(2rem, 3vw, 2.45rem)';
    }
  }};
  line-height: 2.25rem;
  color: ${props => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1;
      case 'dark2':
        return props.theme.colors.dark2;
      case 'dark3':
        return props.theme.colors.dark3;
      case 'main1':
        return props.theme.colors.main1;
      case 'main2':
        return props.theme.colors.main2;
      case 'main3':
        return props.theme.colors.main3;
      case 'light1':
        return props.theme.colors.light1;
      case 'light2':
        return props.theme.colors.light2;
      case 'accent':
        return props.theme.colors.accent1;
      default:
        return props.theme.colors.dark1;
    }
  }};
  font-weight: ${props => {
    switch (props.weight) {
      case 'thin':
        return 100;
      case 'light':
        return 200;
      case 'medium':
        return 300;
      case 'normal':
        return 400;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};

  text-align: ${props => (props.align ? props.align : 'left')};
  margin: ${props => (props.margin ? props.margin : 0)};
  letter-spacing: ${props => props.theme.letterSpacing.medium};
`;

export const H2 = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.title};
  font-size: ${props => {
    switch (props.size) {
      case 'regular':
        return 'clamp(1.375rem, 3vw, 1.675)';
      case 'large':
        return 'clamp(1.75, 5vw, 1.975rem)';
      default:
        return 'clamp(1.375rem, 3vw, 1.675rem)';
    }
  }};
  line-height: 1.975rem;
  color: ${props => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1;
      case 'dark2':
        return props.theme.colors.dark2;
      case 'dark3':
        return props.theme.colors.dark3;
      case 'main1':
        return props.theme.colors.main1;
      case 'main2':
        return props.theme.colors.main2;
      case 'main3':
        return props.theme.colors.main3;
      case 'light1':
        return props.theme.colors.light1;
      case 'light2':
        return props.theme.colors.light2;
      case 'light3':
        return props.theme.colors.light2;
      case 'accent1':
        return props.theme.colors.accent1;
      default:
        return props.theme.colors.dark1;
    }
  }};

  font-weight: ${props => {
    switch (props.weight) {
      case 'thin':
        return 100;
      case 'light':
        return 200;
      case 'medium':
        return 300;
      case 'normal':
        return 400;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};

  text-align: ${props => (props.align ? props.align : 'left')};
  margin: ${props => (props.margin ? props.margin : 0)};
  letter-spacing: ${props => props.theme.letterSpacing.medium};
`;

export const H3 = styled(motion.h3)`
  font-family: ${props => {
    switch (props.font) {
      case 'title':
        return props.theme.fonts.title;
      case 'main':
        return props.theme.fonts.main;
      case 'accent':
        return props.theme.fonts.accent;
      default:
        return props.theme.fonts.title;
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case 'small':
        return 'clamp(.9rem, 3vw, 1.17rem)';
      case 'regular':
        return 'clamp(1.17rem, 3vw, 1.375rem)';
      case 'large':
        return 'clamp(1.27rem, 3vw, 1.875rem)';
      default:
        return 'clamp(1.17rem, 3vw, 1.375rem)';
    }
  }};
  line-height: 1.575rem;
  color: ${props => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1;
      case 'dark2':
        return props.theme.colors.dark2;
      case 'dark3':
        return props.theme.colors.dark3;
      case 'main1':
        return props.theme.colors.main1;
      case 'main2':
        return props.theme.colors.main2;
      case 'main3':
        return props.theme.colors.main3;
      case 'light1':
        return props.theme.colors.light1;
      case 'light2':
        return props.theme.colors.light2;
      default:
        return props.theme.colors.dark1;
    }
  }};

  font-weight: ${props => {
    switch (props.weight) {
      case 'thin':
        return 100;
      case 'light':
        return 200;
      case 'medium':
        return 300;
      case 'normal':
        return 400;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};

  text-align: ${props => (props.align ? props.align : 'left')};
  margin: ${props => (props.margin ? props.margin : 0)};
  letter-spacing: ${props => props.theme.letterSpacing.small};
`;

export const H4 = styled(motion.h4)`
  font-family: ${props => props.theme.fonts.title};
  font-size: ${props => {
    switch (props.size) {
      case 'small':
        return 'clamp(.785rem, 3vw, .9rem)';
      case 'regular':
        return 'clamp(1.075rem, 3vw, 1.275rem)';
      case 'large':
        return 'clamp(1.75, 5vw, 1.975rem)';
      default:
        return 'clamp(1.075rem, 3vw, 1.275rem)';
    }
  }};
  line-height: 1.875rem;
  color: ${props => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1;
      case 'dark2':
        return props.theme.colors.dark2;
      case 'dark3':
        return props.theme.colors.dark3;
      case 'main1':
        return props.theme.colors.main1;
      case 'main2':
        return props.theme.colors.main2;
      case 'main3':
        return props.theme.colors.main3;
      case 'light1':
        return props.theme.colors.light1;
      case 'light2':
        return props.theme.colors.light2;
      default:
        return props.theme.colors.dark1;
    }
  }};

  font-weight: ${props => {
    switch (props.weight) {
      case 'thin':
        return 100;
      case 'light':
        return 200;
      case 'medium':
        return 300;
      case 'normal':
        return 400;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};

  text-align: ${props => (props.align ? props.align : 'left')};
  margin: ${props => (props.margin ? props.margin : 0)};
  letter-spacing: ${props => props.theme.letterSpacing.medium};
`;
