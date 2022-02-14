import { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames/bind';

import HamburgerIcon from '@/components/icons/HamburgerIcon';

import styles from '@/components/header/styles.module.scss';

const cx = classNames.bind(styles);

function Header({
  setDrawerOpen,
}: {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header className={cx('header')}>
      <button type='button' onClick={() => setDrawerOpen((prev) => !prev)}>
        <HamburgerIcon className={cx('hamburger')} />
      </button>
      니콘내콘
    </header>
  );
}

export default Header;
