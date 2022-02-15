import Image from "next/image";

import classNames from "classnames/bind";

import styles from "./styles.module.scss";

interface BrandGridProps {
  name: string;
  imageUrl: string;
}

const cx = classNames.bind(styles);

const BrandGrid = (props: BrandGridProps): JSX.Element => {
  return (
    <div className={cx("grid-wrapper")}>
      <div className={cx("brand-img-Wrapper")}>
        <img
          src={props.imageUrl}
          alt="브랜드 로고 사진"
          width={36}
          height={36}
        />
      </div>
      <p className={cx("brand-name")}>{props.name}</p>
    </div>
  );
};

export default BrandGrid;
