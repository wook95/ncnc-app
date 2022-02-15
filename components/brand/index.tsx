import Image from "next/image";

import classNames from "classnames/bind";

import logo0 from "assets/TEST_IMAGES/0.jpg";
import logo1 from "assets/TEST_IMAGES/1.jpg";
import logo2 from "assets/TEST_IMAGES/2.jpg";
import logo3 from "assets/TEST_IMAGES/3.jpg";
import logo4 from "assets/TEST_IMAGES/4.jpg";
import logo5 from "assets/TEST_IMAGES/5.jpg";
import logo6 from "assets/TEST_IMAGES/6.jpg";
import logo7 from "assets/TEST_IMAGES/7.jpg";
import logo8 from "assets/TEST_IMAGES/8.jpg";
import logo9 from "assets/TEST_IMAGES/9.jpg";
import logo10 from "assets/TEST_IMAGES/10.jpg";
import logo11 from "assets/TEST_IMAGES/11.jpg";
import logo12 from "assets/TEST_IMAGES/12.jpg";
import styles from "@/components/brand/styles.module.scss";

const cx = classNames.bind(styles);

interface Brand {
  name: string;
  img: string;
}

type BrandList = Brand[];

// 테스트 데이터 삭제 예정
const TEST_DATAS = [
  "스타벅스",
  "빽다방",
  "달콤커피",
  "투썸플레이스",
  "이디야",
  "할리스 커피",
  "파스쿠찌",
  "커피빈",
  "탐앤탐스",
  "엔젤리너스",
  "풀바셋",
  "쥬씨",
  "커피 707",
];

//테스트 이미지 데이터 삭제 예정
const TEST_IMG_DATAS = [
  logo0,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
];

function BrandGrid({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={cx("nav-bar")}>navbar</div>
      <div className={cx("main-wrapper")}>
        {TEST_DATAS.map((data, idx) => (
          <div key={idx} className={cx("grid-wrapper")}>
            <div className={cx("brand-img")}>
              <Image
                src={TEST_IMG_DATAS[idx]}
                alt="브랜드 로고 사진"
                width={36}
                height={36}
              />
            </div>
            <p className={cx("brand-name")}>{data}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default BrandGrid;
