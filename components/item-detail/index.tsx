import { useState } from 'react';
import classNames from 'classnames/bind';

import { ItemDetailType } from '@/types/productDetail';
import styles from '@/components/item-detail/styles.module.scss';

interface ItemDetailProps {
  conItem: ItemDetailType;
}

const cx = classNames.bind(styles);

const ItemDetail = ({ conItem }: ItemDetailProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const openOption = () => setIsActive(true);
  const closeOption = () => setIsActive(false);

  const newOptions = conItem.options.map((option, idx) => (option = { ...option, id: idx }));

  return (
    <div className={cx('container')}>
      <nav className={cx('nav')}>네브바</nav>
      <main className={cx('content-wrapper')}>
        <div className={cx('image-box')}>
          <img src={conItem.imageUrl} alt='product image' />
          <div>
            <p>{conItem.conCategory2.name}</p>
            <p>{conItem.name}</p>
            <p>{conItem.discountRate}</p>
            <p>{conItem.minSellingPrice}</p>
            <p>{conItem.originalPrice}</p>
          </div>
        </div>
        <div className={cx('content-box')}>{conItem.warning}</div>
      </main>
      <section className={cx('option-section', { hide: !isActive })}>
        <div className={cx('option-box')}>
          <div>헤더</div>
          <ul>
            {newOptions.map(option => (
              <li key={option.id}>{option.expireAt}</li>
            ))}
          </ul>
        </div>
      </section>
      <button type='button' onClick={openOption} className={cx('select-button')}>
        {isActive ? PURCHASE_MESSAGE : SELECT_OPTION_MESSAGE}
      </button>
      <section className={cx('option-background', { hide: !isActive })}>
        <button className={cx('close-button')} type='button' onClick={closeOption}></button>
      </section>
    </div>
  );
};

const PURCHASE_MESSAGE = '구매하기';
const SELECT_OPTION_MESSAGE = '옵션 선택하기';

export default ItemDetail;
