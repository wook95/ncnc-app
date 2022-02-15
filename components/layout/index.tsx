import Head from 'next/head';
import classNames from 'classnames/bind';

import DrawerMenu from '@/components/drawer-menu';

import { useDrawer } from '@/context/DrawerContext';
import styles from '@/components/layout/styles.module.scss';

const cx = classNames.bind(styles);

function Layout({ children }: { children: React.ReactNode }) {
  const { drawerOpen } = useDrawer();

  const className = cx({
    container: true,
    hide: drawerOpen,
  });

  return (
    <>
      <Head>
        <title>니콘내콘</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={className}>
        {children}
        <DrawerMenu />
      </main>
    </>
  );
}

export default Layout;
