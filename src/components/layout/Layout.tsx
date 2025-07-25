import { FC, PropsWithChildren } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LayoutProps extends PropsWithChildren {
  id: string;
}

const Layout: FC<LayoutProps> = ({ id, children }) => {
  return (
    <div className='layout-wrapper'>
      <div>
        <Header />
        <main id={id}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
