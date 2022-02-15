import classNames from "classnames/bind";

import ItemBox from "@/components/item-box";

import styles from "@/components/item-list/styles.module.scss";
import { calcDiscountRate } from "utils/calcDiscountRate";
import { starbucksItem } from "constants/mock";

const cx = classNames.bind(styles);

const ItemList = (): JSX.Element => {
  return (
    <div>
      <div className={cx("top")}>
        <span className={cx("count")}>{starbucksItem.length}</span>개의 상품
      </div>

      {starbucksItem.map((item, idx) => (
        <ItemBox
          key={idx}
          name={item.name}
          discount={calcDiscountRate(item.originalPrice, item.minSellingPrice)}
          price={item.minSellingPrice}
          original={item.originalPrice}
          image={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default ItemList;
