import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { links } from './Links';
import { useRouter } from 'next/router';
import { Nav, Logo, Hamburger, MobileList } from './NavStyles';

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();

  return (
    <Nav>
      <Logo>
        <Link href="/">
          <Image
            src="/images/Logos/logo-small.svg"
            alt="Edward Reed Designs Logo"
            layout="full"
            height="64"
            width="64"
          />
        </Link>
      </Logo>
      <Hamburger onClick={toggle} isOpen={isOpen}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </Hamburger>
      <MobileList toggle={toggle} isOpen={isOpen}>
        <li>
          {links.map(link => (
            <Link
              href={link.url}
              key={link.name}
              className={router.pathname === link.url ? 'active' : ''}
              onClick={toggle}
            >
              {link.name}
            </Link>
          ))}
        </li>
      </MobileList>
    </Nav>
  );
};
export default Mobile;
