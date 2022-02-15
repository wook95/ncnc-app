import classNames from 'classnames/bind';

import HamburgerIcon from '@/components/icons/HamburgerIcon';

import styles from '@/components/headers/home-header/styles.module.scss';

const cx = classNames.bind(styles);

function HomeHeader({ toggleDrawer }: { toggleDrawer: () => void }) {
  return (
    <header className={cx('header')}>
      <button type='button' onClick={toggleDrawer}>
        <HamburgerIcon className={cx('hamburger')} />
      </button>
      니콘내콘
    </header>
  );
}

export default HomeHeader;
