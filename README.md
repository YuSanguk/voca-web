# 노션 DB에서 데이터를 가져와 단어장 생성
## 7월 22일 프로젝트 시작

### 목표
- 모바일 웹 단어장
- 노션에 모르는 단어를 추가하면 자동 연동
- 웹 개발 실력 유지 및 간편 단어장 생성
- 간단하게 사용 가능
- https://yusanguk.github.io/voca-web/

### 노션 주소 api
- https://github.com/splitbee/notion-api-worker

### 본인만의 웹 단어장을 만드는 법
- 해당 코드를 가져간 뒤, .env파일을 만들고 REACT_APP_NOTION = (노션주소) 를 추가 후 빌드하면 끝!

### 7월 22일
- 프로젝트 생성
- 노션 데이터 테이블에서 데이터를 가져오는 법 확인
- 디자인 1차 완료
- 라이트 나이트 테마 완성
- 입력 시스템 완료

### 7월 27일
- 카드 플립 완료
- 카드 이동 완료
- 카드 영어 단어 순서 랜덤화 단계 에러

### 7월 31일
- 카드 영어 단어 순서 랜덤화 단계 에러 수정
  - 에러 원인
    - 함수가 비동기적으로 실행되어서 아직 로딩되지 않은 요소를 사용하려다 발생된 오류
    - useEffect를 2개로 분리해 

### 8월 1일
- 랜딩 페이지 파이 차트 추가
- 랜딩 페이지 입력값 비례 파이 차트 게이지 변동 기능 추가
- 랜딩 페이지 css 디자인

### 8월 8일
- 카드 페이지에 단어를 표로 볼 수 있도록 기능 추가
- 카드 페이지 단어 표 css 작성
- 카드 페이지 표를 클릭하면 해당 단어로 카드가 이동하도록 변화