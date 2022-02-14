import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames/bind';

import styles from '@/components/drawer-menu/styles.module.scss';
import CloseIcon from '@/components/icons/CloseIcon';
import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon';

const cx = classNames.bind(styles);

function DrawerMenu({
  drawerOpen,
  setDrawerOpen,
}: {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const drawerClassName = cx({
    drawer: true,
    open: drawerOpen,
  });

  return (
    <aside className={drawerClassName}>
      <header className={cx('drawer-header')}>
        <button type='button' onClick={() => setDrawerOpen((prev) => !prev)}>
          <CloseIcon className={cx('close-icon')} />
        </button>
        마이 페이지
      </header>
      <section className={cx('drawer-contents')}>
        <button type='button' className={cx('customer-center-button')}>
          <span>고객 센터</span>
          <ChevronLeftIcon />
        </button>
        <div className={cx('empty')}></div>
      </section>
    </aside>
  );
}

export default DrawerMenu;
