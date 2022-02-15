import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";

import styles from "@/components/main/carousel/styles.module.scss";
import bannerList from "constants/banner";

const cx = classNames.bind(styles);

const bannerLength = [2, 1, 0];

const Carousel = (): JSX.Element => {
  const [bannerActive, setBannerActive] = useState(0);

  const clickBannerBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setBannerActive(Number(e.currentTarget.value));
  };

  return (
    <div className={cx("box")}>
      <div className={cx("carousel")} style={{}}>
        {bannerList.map((item, idx) => (
          <div key={idx} className={cx("banner")}>
            <Image
              className={cx("img")}
              src={item}
              layout="fill"
              objectFit="cover"
              alt="banner"
            />
          </div>
        ))}
      </div>
      {bannerLength.map((v, idx) => (
        <button
          key={idx}
          className={cx({ btn: true, active: bannerActive === v })}
          type="button"
          onClick={clickBannerBtn}
          value={v}
          style={{ right: `${(idx + 1) * 2}rem` }}
        />
      ))}
    </div>
  );
};

export default Carousel;
