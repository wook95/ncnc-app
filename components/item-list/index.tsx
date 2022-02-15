import classNames from "classnames/bind";

import ItemBox from "@/components/item-box";

import styles from "@/components/item-list/styles.module.scss";
import { calcDiscountRate } from "utils/calcDiscountRate";
import { BrandItemType } from "@/types/brandItem";

interface ItemListProps {
  brandItem: BrandItemType;
}

const cx = classNames.bind(styles);

const ItemList = (props: ItemListProps): JSX.Element => {
  const { brandItem } = props;
  return (
    <div>
      <div className={cx("top")}>
        <span className={cx("count")}>{brandItem.conItems.length}</span>개의
        상품
      </div>

      {brandItem.conItems.map((item, idx) => (
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
