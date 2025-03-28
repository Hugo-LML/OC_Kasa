import { FC, PropsWithChildren } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LayoutProps extends PropsWithChildren {
  id: string;
}

const Layout: FC<LayoutProps> = ({ id, children }) => {
  return (
    <>
      <Header />
      <main id={id}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
