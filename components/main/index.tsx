import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';

import ItemBox from '@/components/item-box';
import Carousel from '@/components/main/carousel';
import BrandGrid from '@/components/brand/brand-grid';

import styles from '@/components/main/styles.module.scss';
import { SaleItemType } from '@/types/saleItem';
import { CategoryType } from '@/types/category';
import { getCategory, getSaleItem } from '@/lib/home-api';

const cx = classNames.bind(styles);

const Main = (): JSX.Element => {
  const [saleItem, setSaleItem] = useState<SaleItemType | null>(null);
  const [category, setCategory] = useState<CategoryType | null>(null);

  useEffect(() => {
    const getAPI = async () => {
      const saleItemResponse = await getSaleItem();
      const categoryResponse = await getCategory();
      if (saleItemResponse.data !== null && categoryResponse.data !== null) {
        setSaleItem(saleItemResponse.data);
        setCategory(categoryResponse.data);
      }
    };
    getAPI();
  }, []);

  return (
    <div>
      <Carousel />
      <div className={cx('category')}>
        {category?.conCategory1s.map((item, idx) => (
          <Link
            key={idx}
            href={{
              pathname: `/categories/${item.id}`,
            }}>
            <a className={cx('link')}>
              <BrandGrid name={item.name} imageUrl={item.imageUrl} />
            </a>
          </Link>
        ))}
      </div>
      <div>
        <div className={cx('text-box')}>
          <div className={cx('highlight')}>놓치지 마세요</div>
          <div className={cx('title')}>오늘의 땡처리콘!</div>
        </div>
        {saleItem?.conItems.map((item, idx) => (
          <ItemBox
            key={idx}
            name={item.name}
            store={item.conCategory2.name}
            discount={item.discountRate}
            price={item.ncSellingPrice}
            original={item.originalPrice}
            image={item.imageUrl}
          />
        ))}
      </div>
      <div className={cx('footer')}>
        회사소개서
        <br />
        사업/제휴 문의
        <br />
        개인정보처리방침
        <div className={cx('footer-title')}>(주) 더블엔씨</div>
      </div>
    </div>
  );
};

export default Main;
