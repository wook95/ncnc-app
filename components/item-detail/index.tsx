import { useState } from 'react';
import classNames from 'classnames/bind';

import { ItemDetailType } from '@/types/productDetail';
import styles from '@/components/item-detail/styles.module.scss';
import ItemBox from '../item-box';
import { calcDiscountRate } from '@/utils/calcDiscountRate';
import { addComma } from '@/utils/addComma';

interface ItemDetailProps {
  conItem: ItemDetailType;
}

const cx = classNames.bind(styles);

const ItemDetail = ({ conItem }: ItemDetailProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const openOption = () => setIsActive(true);
  const closeOption = () => setIsActive(false);

  const newOptions = conItem.options.map((option, idx) => {
    return (option = {
      ...option,
      id: idx,
      expireAt: `${new Intl.DateTimeFormat('ko-KR').format(new Date(option.expireAt))} 까지`,
      sellingPrice: option.sellingPrice,
    });
  });
  const warningArray = conItem.warning.split('\n\n');
  const splitWarningArray = warningArray
    .map(strings => strings.split(']\n'))
    .map(strings => (strings = [strings[0].replace('[', ''), strings[1].replaceAll('-', '·')]));

  return (
    <div className={cx('container')}>
      <nav className={cx('nav')}>네브바</nav>
      <main className={cx('content-wrapper')}>
        <ItemBox
          name={conItem.name}
          discount={conItem.discountRate}
          price={conItem.minSellingPrice}
          original={conItem.originalPrice}
          image={conItem.imageUrl}
        />
        <div className={cx('content-box')}>
          {splitWarningArray.map(warning => {
            return (
              <div key={warning[0]}>
                <div className={cx('content-title')}>{warning[0]}</div>
                <div className={cx('content-paragraph')}>{warning[1]}</div>
              </div>
            );
          })}
        </div>
      </main>
      <section className={cx('option-section', { hide: !isActive })}>
        <div className={cx('option-box')}>
          <div className={cx('option-header')}>
            옵션 선택하기
            <p>X</p>
          </div>
          <ul>
            {newOptions.map(option => (
              <li key={option.id}>
                <button type='button' className={cx('option-each')}>
                  <div className={cx('option-contents')}>
                    <div className={cx('option-content')}>
                      <p className={cx('option-content-title')}>유효기간</p>
                      <p className={cx('option-content-title')}>할인가</p>
                    </div>
                    <div className={cx('option-content')}>
                      <p className={cx('option-content-detail')}>{option.expireAt}</p>
                      <p className={cx('option-content-detail')}>{addComma(option.sellingPrice)}</p>
                    </div>
                  </div>
                  <p className={cx('option-discount')}>
                    {calcDiscountRate(conItem.originalPrice, option.sellingPrice)} %
                  </p>
                </button>
              </li>
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
