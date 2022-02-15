import classNames from 'classnames/bind';
import styles from '@/components/centered-container/styles.module.scss';

const cx = classNames.bind(styles);

const CenteredContainer = ({ message }: { message: string }) => {
  return (
    <div className={cx('container')}>
      <p className={cx('content')}>{message}</p>
    </div>
  );
};

export default CenteredContainer;
