# Node-init

> node + Express 개발 시 반복되는 부분 작성
>
> boilerplate라고 생각하면 됨.



### 구조

- `assets` 
  - 프론트 관련 js, css

- `controllers` : 백엔드 처리부분

- `middlewares`
  - `winston` : log 기록을 위한 코드
- `model`
  - `mysql` : 관련 코드
- `routes` : route 관련 
- `views` 
  - 프론트 관련 렌더페이지
  - view engine : ejs



### 컴파일

- `pkg` 라이브러리 사용
- `pkg` 라이브러리를 es5만 지원 
- 그래서 `webpack`으로 먼저 번딜링 하고 진행해야함.
  - ` "build": "webpack && pkg . --out-path dist"`



### CSS

- `tailwindCSS` 사용