import Link from 'next/link';
import classNames from 'classnames/bind';

import styles from '@/components/error-container/styles.module.scss';

const cx = classNames.bind(styles);

interface ErrorContainerProps {
  message?: string;
}

const ErrorContainer = ({ message = '404' }: ErrorContainerProps) => {
  return (
    <div className={cx('four-o-four')}>
      <h1 className={cx('title')}>{message}</h1>
      <Link href="/">
        <a className={cx('button')}>홈으로 돌아가기</a>
      </Link>
    </div>
  );
};

export default ErrorContainer;
