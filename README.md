LoL 챔피언 & 아이템 정보 웹사이트

프로젝트 소개
이 프로젝트는 인기 게임 리그 오브 레전드(LoL) 의 챔피언과 아이템 정보를 확인할 수 있는 웹사이트입니다. 
사용자는 챔피언과 아이템 목록을 조회하고, 개별 챔피언의 상세 정보를 볼 수 있습니다. 
또한, 매주 변경되는 무료 챔피언 로테이션 목록도 확인할 수 있습니다.

기능
1. 홈
- 챔피언 페이지, 아이템 페이지, 챔피언 로테이션 페이지로 이동할 수 있는 네비게이션 제공

2. 챔피언 페이지
- 챔피언 목록을 사진과 이름으로 표시
- 특정 챔피언 클릭 시 디테일 페이지로 이동하여 상세 정보 제공

3. 아이템 페이지
- 아이템 목록을 사진과 이름으로 표시

4. 챔피언 로테이션 페이지
- 이번 주 무료 챔피언 목록 제공
- 챔피언 클릭 시 디테일 페이지로 이동

기술 스택
- Next.js - React 기반의 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG) 프레임워크
- React - UI 라이브러리
- TanStack Query - 비동기 데이터 페칭 및 상태 관리

설치 및 실행 방법
1. 프로젝트 클론
   git clone https://github.com/your-repo/lol-champion-site.git
   cd lol-champion-site
2. 패키지 설치
   pnpm install
3. 개발 서버 실행
   pnpm dev
4. 브라우저에서 접속
   http://localhost:3000

프로젝트 
```
lol-champion-site/
├── app/            # Next.js App Router 구조
│   ├── api/        # API 엔드포인트
│   │   ├── rotation/  # 챔피언 로테이션 데이터 제공
│   │       ├── route.ts
│   ├── champions/  # 챔피언 목록 페이지
│   │   ├── page.tsx  # 챔피언 목록 페이지
│   │   ├── [id]/     # 챔피언 상세 페이지 (동적 라우팅)
│   │       ├── page.tsx
│   ├── items/       # 아이템 목록 페이지
│   │   ├── page.tsx
│   ├── rotation/    # 챔피언 로테이션 페이지
│   │   ├── page.tsx
│   ├── layout.tsx  # 공통 레이아웃 (헤더 포함)
│   ├── Provider.tsx  # TanStack Query 설정
│   ├── globals.css  # 전역 스타일링 파일
│   ├── page.tsx   # 홈 페이지
└── README.md      # 프로젝트 설명 파일
```

기여 방법
1. 이슈를 확인하고 작업할 내용을 정합니다.
2. 새로운 브랜치를 생성합니다.
3. 기능을 추가하거나 버그를 수정합니다.
4. PR(Pull Request)을 생성하여 리뷰를 요청합니다.

배포 페이지
https://league-of-legends-info.vercel.app/

  



