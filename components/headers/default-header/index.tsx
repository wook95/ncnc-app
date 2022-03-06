import { useRouter } from 'next/router';

import classNames from 'classnames/bind';

import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon';

import styles from '@/components/headers/default-header/styles.module.scss';

const cx = classNames.bind(styles);

function DefaultHeader({ title }: { title?: string }) {
  const router = useRouter();

  return (
    <header className={cx('header')}>
      {title && title}
      <button onClick={() => router.back()}>
        <ChevronLeftIcon className={cx('icon')} />
      </button>
    </header>
  );
}

export default DefaultHeader;
