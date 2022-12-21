import Head from 'next/head';
import Footer from './footer/Footer';
import Nav from './nav/Nav';

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>
          {title ? title + ' - Edward Reed Designs' : 'Edward Reed Designs'}
        </title>
        <meta name="description" content="Edward Reed Designs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="layout">
        <Nav />
        {children}
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
