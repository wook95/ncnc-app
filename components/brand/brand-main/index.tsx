import classNames from "classnames/bind";
import { ConCategory2 } from "@/types/brandList";

import DefaultHeader from "@/components/headers/default-header";
import styles from "./styles.module.scss";
import BrandCategory from "@/components/brand/brand-category";
import BrandGrid from "@/components/brand/brand-grid";
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
      <DefaultHeader />
      <div className={cx("nav-bar")}>
        {category.conCategory1s.map((sort, sortIdx) => {
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
