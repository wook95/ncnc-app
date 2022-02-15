import classNames from "classnames/bind";

import ItemBox from "@/components/item-box";

import styles from "@/components/main/styles.module.scss";
import { discount } from "constants/mock";

const cx = classNames.bind(styles);

const Main = (): JSX.Element => {
  return (
    <div>
      <div className={cx("carousel")}>carousel</div>
      <div className={cx("category")}>category</div>
      <div>
        <div className={cx("text-box")}>
          <div className={cx("highlight")}>놓치지 마세요</div>
          <div className={cx("title")}>오늘의 땡처리콘!</div>
        </div>
        {discount.conItems.map((item, idx) => (
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
