import { FC, ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import './Layout.scss';

export const Layout: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <div>
      <Navbar />
        {children}
      <Footer />
    </div>
  );
};