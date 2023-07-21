import { FC, useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { Outlet, useLocation } from 'react-router-dom';
import './App.scss'

export const App: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}