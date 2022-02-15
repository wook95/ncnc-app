import { useState } from "react";
import classNames from "classnames/bind";
import { ConCategory2 } from "@/types/brandList";

import styles from "./styles.module.scss";
import { brandStores } from "constants/BRAND_TEST_MOCK";
import BrandCategory from "@/components/brand/brand-category";
import BrandGrid from "../brand-grid";
import { CategoryType } from "@/types/category";

interface BrandMainProps {
  conCategory1: ConCategory2;
  category: CategoryType;
  params: number;
}

const cx = classNames.bind(styles);

const Brand = ({
  conCategory1,
  category,
  params,
}: BrandMainProps): JSX.Element => {
  const BrandValues = Object.entries(conCategory1);

  return (
    <div>
      <div className={cx("nav-bar")}>
        {console.log(params)}
        {category.conCategory1s.map((sort, sortIdx) => {
          console.log(sort);
          return (
            <BrandCategory
              key={sortIdx}
              name={sort.name}
              id={sort.id}
              params={params}
            />
          );
        })}
      </div>
      <div className={cx("main-wrapper")}>
        {BrandValues.map((store, storeIdx) => (
          <BrandGrid
            key={storeIdx}
            name={store[1].name}
            imageUrl={store[1].imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Brand;
