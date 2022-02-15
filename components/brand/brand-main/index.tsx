import classNames from "classnames/bind";
import { ConCategory1 } from "@/types/brandList";

import styles from "./styles.module.scss";
import BrandCategory from "@/components/brand/brand-category";
import BrandGrid from "@/components/brand/brand-grid";
import { CategoryType } from "@/types/category";

import { useRouter } from "next/router";

interface BrandMainProps {
  conCategory1: ConCategory1[];
  category: CategoryType;
  params: number;
}

const cx = classNames.bind(styles);

const Brand = ({
  conCategory1,
  category,
  params,
}: BrandMainProps): JSX.Element => {
  const router = useRouter();

  return (
    <div>
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
        {conCategory1.map((store, storeIdx) => (
          <button
            key={storeIdx}
            className={cx("link")}
            type="button"
            onClick={() => {
              router.push(
                {
                  pathname: "/brands/[id]",
                  query: { id: store.id, categoryId: params },
                },
                `/brands/${store.id}`
              );
            }}
          >
            <BrandGrid name={store.name} imageUrl={store.imageUrl} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Brand;
