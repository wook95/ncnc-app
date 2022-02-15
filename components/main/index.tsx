import classNames from "classnames/bind";

import ItemBox from "@/components/item-box";
import Carousel from "@/components/main/carousel";

import styles from "@/components/main/styles.module.scss";
import { discount } from "constants/mock";
import { SaleItemType } from "@/types/saleItem";

interface SaleItemProps {
  conItems: SaleItemType[];
}

const cx = classNames.bind(styles);

const Main = ({ conItems }: SaleItemProps): JSX.Element => {
  return (
    <div>
      <Carousel />
      <div className={cx("category")}>category</div>
      <div>
        <div className={cx("text-box")}>
          <div className={cx("highlight")}>놓치지 마세요</div>
          <div className={cx("title")}>오늘의 땡처리콘!</div>
        </div>
        {conItems.map((item, idx) => (
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
    </div>
  );
};

export default Main;
