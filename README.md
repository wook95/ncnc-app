# 더블엔씨 니콘내콘 모바일 웹페이지

중고 기프티콘 거래 웹 어플리케이션입니다.

<a href="https://ncnc-app.netlify.app/" target="_blank" >배포링크</a> (투썸플레이스 - 아메리카노가 제일 데이터 양이 많습니다.)

<br />

## 📌 팀원

| [이욱창](https://github.com/wook95)                                           | [김태희](https://github.com/tae100k)                                           | [문현돈](https://github.com/hyundonny)                                         | [이경은](https://github.com/2kyung19)                                          |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| <img src="https://avatars.githubusercontent.com/u/80494742?v=4" width="200"/> | <img src="https://avatars.githubusercontent.com/u/78027252?v=4" width="200" /> | <img src="https://avatars.githubusercontent.com/u/10048956?v=4" width="200" /> | <img src="https://avatars.githubusercontent.com/u/32586712?v=4" width="200" /> |

<br />

## 📌 요구 사항

다음 페이지들을 클론하는 것이 이번 과제의 주된 요구사항이었습니다.

- [니콘내콘 홈페이지](https://ncnc.app/)
- [카테고리별 브랜드 페이지](https://ncnc.app/categories/67)
- [각 브랜드당 제품 페이지](https://ncnc.app/brands/63)
- [제품별 상세설명 페이지](https://ncnc.app/items/137)
- 사이드 메뉴

<br />

## 📌 기술 스택

- NextJS
- TypeScript
- SCSS + CSS Modules
- ESLint + Prettier
- Cypress

<br />

## 📌 역할 및 회고

- 역할

  - 상품 상세 페이지 구현
    - 3단으로 움직이는 버튼클릭 기능 (옵션 선택하기 -> 옵션 선택 modal -> 구매 및 수정 )
    - 옵션 선택시 아래에서 등장하는 modal 기능
    - 옵션이 많아질 경우 스크롤 기능 추가
  - cypress를 통한 e2e 테스트 구현

- 회고
  - 백엔드와 소통할 할수 없는 상황에서, 데이터 바인딩을 위해 받아온 api의 데이터를 원하는대로 바꿔야 했습니다.  
    이를 통해 자바스크립트에 더 알아갈 수 있었습니다. replaceAll은 es12에서 추가된 함수라는것도 . .
  - typescript를 사용하면서 타입 이름을 유의미하게 지어주는것이 나중에 보았을때 헷갈리지 않겠다고 다시 한번 생각했습니다.
  - `getServersideProps`사용시 속도가 너무 느려져서, 꼭 필요한 경우가 아니라면 getStaticProps만 사용할것 같습니다. 그래도 SSR을 통해 pre-rendering을 시켜주는 경험이 좋아 앞으로도 쭉 next를 공부하면서 어떤 때에 SSR을 써야되는지 잘 고민해보겠습니다!
