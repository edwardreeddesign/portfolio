import Full from './Full';
import Mobile from './Mobile';
import { useMatchMedia } from '../../helpers/useMatchMedia';

const Nav = () => {
  const desktopResolution = useMatchMedia('(min-width: 768px)', true);

  return <div>{desktopResolution ? <Full /> : <Mobile />}</div>;
};

export default Nav;
