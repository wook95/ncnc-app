import Link from "next/link";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

interface BrandCategoryProps {
  name: string;
  id: number;
  params: number;
}

const BrandCategory = (props: BrandCategoryProps): JSX.Element => {
  return (
    <button
      className={cx({
        "nav-button": true,
        active: props.params === props.id,
      })}
    >
      <Link href={`/categories/${props.id}`}>
        <a> {props.name}</a>
      </Link>
    </button>
  );
};

export default BrandCategory;
