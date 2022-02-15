import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

interface BrandCategoryProps {
  name: string;
  setCurCategoryIdx: (curCategory: number) => void;
}

const BrandCategory = (props: BrandCategoryProps): JSX.Element => {
  return (
    <button
      className={cx("nav-button")}
      onClick={() => {
        props.setCurCategoryIdx(props.sortIdx);
      }}
    >
      {props.name}
    </button>
  );
};

export default BrandCategory;
