import classNames from 'classnames/bind';
import styles from '@/components/layout/styles.module.scss';

const cx = classNames.bind(styles);

function Layout({ children }: { children: React.ReactNode }) {
  return <main className={cx('container')}>{children}</main>;
}

export default Layout;
