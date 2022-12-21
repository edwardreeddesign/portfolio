import Image from 'next/image';
import Link from 'next/link';
import { links } from './Links';
import { useRouter } from 'next/router';
import { Header, Nav, Logo, ListItems } from './NavStyles';

const Full = () => {
  const router = useRouter();

  return (
    <Nav>
      <Logo>
        <Link href="/">
          <Image
            src="/images/Logos/full-logo.svg"
            alt="Edward Reed Designs Logo"
            layout="fill"
          />
        </Link>
      </Logo>
      <ListItems>
        <li>
          {links.map(link => (
            <Link
              href={link.url}
              key={link.name}
              className={router.pathname === link.url ? 'active' : ''}
            >
              {link.name}
            </Link>
          ))}
        </li>
      </ListItems>
    </Nav>
  );
};
export default Full;
