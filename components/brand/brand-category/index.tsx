import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

interface BrandCategoryProps {
  name: string;
}

const BrandCategory = (props: BrandCategoryProps): JSX.Element => {
  return (
    <button
      className={cx("nav-button")}
      onClick={() => {
        console.log("버튼 클릭시 링크");
      }}
    >
      {props.name}
    </button>
  );
};

export default BrandCategory;
