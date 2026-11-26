# Neon Station 소개 사이트

사이버펑크 도트 방치형 RPG **Neon Station**의 소개 홈페이지입니다. 빌드 과정 없는 정적 사이트라 이 폴더를 그대로 GitHub Pages에 올리면 됩니다.

| 파일 | 내용 |
| --- | --- |
| `index.html` | 게임 소개 — 인트로 컷신, 스토리(3막 10장), 세계관, 게임, 외형 실험실, 안내, 아트 팩토리, 제작기 |
| `studio.html` | 제작사 데이터스테이션 소개 |
| `guide.html` | 시작 가이드 — 처음 온 유저용 안내서(설치·첫 10분·화면·성장 순서·해금 레벨·하루 할 일·재화·팁·용어) |
| `news.html` | 공지 — 업데이트·안내·이벤트·점검. 내용은 `assets/js/news-data.js` 하나에서 읽음 |
| `assets/css/style.css` | 스타일 (색은 게임 `src/constants/theme.ts`·`grades.ts`와 같은 값) |
| `assets/js/main.js` | 컷신, 노선도 표시, 상인 초상, 아트 팩토리 탭, 외형 실험실 |
| `assets/js/data.js` | 장비 외형 목록(11등급)·시그니처 세트 (게임 `assets/sprites/gear`, `docs/art-factory.json`에서 추출) |
| `assets/img/` | 게임 도트 에셋 사본, 스토어 스크린샷(webp), 공유용 이미지 `og-image.png` |
| `assets/audio/` | 배경음악 10곡 (코드 합성 칩튠) |
| `assets/fonts/` | 갈무리(Galmuri) 폰트 — 사이트에 쓰인 글자만 남긴 woff2, SIL OFL 1.1 (`OFL.txt`) |

## GitHub Pages로 올리기

1. GitHub에서 새 저장소를 만듭니다 (공개 저장소): https://github.com/new
   예: `hanarostation/neon-station-web`
2. 이 폴더에서 아래 명령으로 올립니다.
   ```bash
   git init
   git add .
   git commit -m "Neon Station 소개 사이트"
   git branch -M main
   git remote add origin https://github.com/hanarostation/neon-station-web.git
   git push -u origin main
   ```
3. 저장소 **Settings → Pages**에서 Source를 `Deploy from a branch`, Branch를 `main` / `/ (root)`로 저장합니다.
   안내: https://docs.github.com/ko/pages/getting-started-with-github-pages/creating-a-github-pages-site
4. 1~2분 뒤 `https://neon-station.com/` 에서 열립니다.

## 올린 뒤 손볼 것

- **도메인:** `neon-station.com` (GitHub Pages 맞춤 도메인, 저장소 맨 위 `CNAME` 파일). 공유 미리보기(`og:image`)도 이 주소 기준입니다. 도메인을 바꾸면 `index.html`, `studio.html`의 `og:image`·`og:url`도 함께 고치세요.
- **비공개 테스트 신청 링크:** 인스타그램 @_neon_station DM(`https://ig.me/m/_neon_station`)으로 연결됩니다. 바꾸려면 `index.html`의 `#guide-test` 버튼 주소를 고치세요.
- **새 에셋 반영:** 게임의 `assets/sprites/`에서 해당 PNG를 `assets/img/` 같은 경로로 복사하면 됩니다. 장비 외형을 추가했다면 `assets/js/data.js`의 `NS_GEAR`에도 추가합니다.
- **글자 추가:** 폰트는 지금 쓰인 글자만 남겨 둔 파일이라, 새 문장에 처음 쓰는 한글이 들어가면 그 글자만 기본 글꼴로 보입니다. 원본 TTF(게임 `assets/fonts/`)로 다시 서브셋하거나 원본 woff2로 바꾸면 됩니다.

로컬에서 미리 보려면 이 폴더에서 `python -m http.server 8000` 실행 후 http://localhost:8000 을 엽니다.

## 갱신 기록

- 2026-11-24: 1.1.0 기준으로 갱신 — 장비 11등급(퀀텀·보이드·오리진)·외형 264종, 스킬트리·칩, 특수 의뢰 5종(중계 서버 해킹), 온라인 탭(PVP·라인), 3개 언어, 무기상 Lv50, 배경음악 10곡, 프로필 204장, 스토어 스크린샷 v1.1.0, 새 앱 아이콘(파비콘), 테스트 안내(비공개 테스트 테스터 모집·App Store 출시 준비), 바닥글에 인스타그램·고객 지원 링크, 제작사 페이지에 데이터스테이션 로고.

## 공지 올리는 법

1. `assets/js/news-data.js`를 엽니다.
2. `NS_NEWS` 맨 위 항목 하나를 복사해 바로 위에 붙이고 `id` · `date` · `type` · `title` · `summary` · `sections`를 바꿉니다. 파일 맨 위 주석에 항목 설명이 있습니다.
3. 심사가 끝나 적용되면 그 공지의 `status`만 `'pending'` → `'live'`로 바꿉니다.
4. 저장하고 올리면 공지 페이지와 첫 화면 「최신 소식」(최근 3개)이 함께 바뀝니다.
5. 공지 하나를 링크로 보내려면 `https://neon-station.com/news.html#공지id` (공지 아래 「이 공지 주소 복사」).

공지에 새 한글 글자를 쓰면 그 글자만 기본 글꼴로 보일 수 있습니다(사이트 폰트는 쓰인 글자만 남긴 파일). 보기 싫으면 폰트 서브셋을 다시 만들어 달라고 요청하세요.

## App Store 링크

`assets/js/news-data.js`의 `NS_SITE.appStoreUrl`에 App Store 주소를 넣으면 첫 화면 · 시작 가이드의 「App Store에서 받기」 버튼이 그 주소로 연결됩니다. 비워 두면 「App Store에서 'Neon Station' 검색」 안내로 보입니다.

- 2026-11-25: 시작 가이드(`guide.html`)·공지(`news.html`) 추가, 상단에 [가이드] [공지] 버튼, 첫 화면 「최신 소식」, iOS 출시 반영, 시그니처 세트 30종, 제작기 11/25까지.
- 2026-11-26: 1.1.3 반영 — 공지 「1.1.3 업데이트 안내」(심사·배포 중) 추가, 첫 화면·가이드에 진압열차 10단계·스킬트리 여섯 계열 18층·펫 55종·세트 40종·칭호 232종·외형 594종 반영, 외형 실험실에 상위 외형과 세트 31~40, 아트 팩토리 펫 55종 · 진압열차 10대, 제작기 11/26.
