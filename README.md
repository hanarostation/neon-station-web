# Neon Station 소개 사이트

사이버펑크 도트 방치형 RPG **Neon Station**의 소개 홈페이지입니다. 빌드 과정 없는 정적 사이트라 이 폴더를 그대로 GitHub Pages에 올리면 됩니다.

| 파일 | 내용 |
| --- | --- |
| `index.html` | 게임 소개 — 인트로 컷신, 스토리(3막 10장), 세계관, 게임, 외형 실험실, 안내, 아트 팩토리, 제작기 |
| `studio.html` | 제작사 데이터스테이션 소개 |
| `assets/css/style.css` | 스타일 (색은 게임 `src/constants/theme.ts`·`grades.ts`와 같은 값) |
| `assets/js/main.js` | 컷신, 노선도 표시, 상인 초상, 아트 팩토리 탭, 외형 실험실 |
| `assets/js/data.js` | 장비 외형 목록·시그니처 세트 (게임 `assets/sprites/gear`, `docs/art-factory.json`에서 추출) |
| `assets/img/` | 게임 도트 에셋 사본, 스토어 스크린샷(webp), 공유용 이미지 `og-image.png` |
| `assets/audio/` | 배경음악 7곡 (코드 합성 칩튠) |
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
4. 1~2분 뒤 `https://hanarostation.github.io/neon-station-web/` 에서 열립니다.

## 올린 뒤 손볼 것

- **공유 미리보기 이미지:** 카카오톡·SNS 미리보기는 절대 주소가 필요합니다. 주소가 정해지면 `index.html`, `studio.html`의 `og:image`를 `https://hanarostation.github.io/neon-station-web/assets/img/og-image.png`처럼 바꿔 주세요.
- **비공개 테스트 신청 링크:** 지금은 데이터스테이션 홈페이지로 연결됩니다. 테스트 신청 폼이나 Google Play 링크가 생기면 `index.html`의 `#guide-test` 버튼 주소를 바꿔 주세요.
- **새 에셋 반영:** 게임의 `assets/sprites/`에서 해당 PNG를 `assets/img/` 같은 경로로 복사하면 됩니다. 장비 외형을 추가했다면 `assets/js/data.js`의 `NS_GEAR`에도 추가합니다.
- **글자 추가:** 폰트는 지금 쓰인 글자만 남겨 둔 파일이라, 새 문장에 처음 쓰는 한글이 들어가면 그 글자만 기본 글꼴로 보입니다. 원본 TTF(게임 `assets/fonts/`)로 다시 서브셋하거나 원본 woff2로 바꾸면 됩니다.

로컬에서 미리 보려면 이 폴더에서 `python -m http.server 8000` 실행 후 http://localhost:8000 을 엽니다.
