import { useState } from "react";

import classNames from "classnames/bind";

import styles from "./styles.module.scss";
import { brandStores } from "constants/BRAND_TEST_MOCK";
import BrandCategory from "@/components/brand/brand-category";
import BrandGrid from "../brand-grid";

const cx = classNames.bind(styles);

const Main = (): JSX.Element => {
  const [curCategoryIdx, setCurCategoryIdx] = useState(0);

  return (
    <div>
      <div className={cx("nav-bar")}>
        {brandStores.map((sort, sortIdx) => {
          return (
            <BrandCategory
              key={sortIdx}
              sortIdx={sortIdx}
              name={sort.name}
              setCurCategoryIdx={setCurCategoryIdx}
            />
          );
        })}
      </div>
      <div className={cx("main-wrapper")}>
        {brandStores[curCategoryIdx].stores.map((store, storeIdx) => (
          <BrandGrid
            key={storeIdx}
            id={store.id}
            name={store.name}
            imageUrl={store.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
