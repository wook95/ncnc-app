import classNames from 'classnames/bind';

import Header from '@/components/header';
import DrawerMenu from '@/components/drawer-menu';

import styles from '@/components/layout/styles.module.scss';
import { Dispatch, SetStateAction } from 'react';

const cx = classNames.bind(styles);

function Layout({
  drawerOpen,
  setDrawerOpen,
  children,
}: {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  return (
    <main className={cx('container')}>
      <Header setDrawerOpen={setDrawerOpen} />
      {children}
      <DrawerMenu drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </main>
  );
}

export default Layout;
