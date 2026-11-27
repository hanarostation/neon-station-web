# Neon Station 소개 사이트

사이버펑크 도트 방치형 RPG **Neon Station**의 소개 홈페이지입니다. 빌드 과정 없는 정적 사이트라 이 폴더를 그대로 GitHub Pages에 올리면 됩니다. 주소: https://neon-station.com/

## 언어

| 주소 | 언어 |
| --- | --- |
| `/` (`index.html` 등) | 한국어 (원문) |
| `/en/` | English |
| `/ja/` | 日本語 |
| `/zh/` | 中文(简体) |

- 페이지마다 오른쪽 위 언어 메뉴로 같은 페이지의 다른 언어로 이동합니다. 검색엔진용 `hreflang` 링크도 들어 있습니다.
- `/en/` `/ja/` `/zh/`의 HTML은 한국어 원문에서 **자동으로 만든 파일**입니다. 직접 고치지 말고, 한국어 원문과 번역표를 고친 뒤 다시 만듭니다(작업 폴더 `홈페이지/_작업파일/i18n-tools`, 아래 「번역 다시 만들기」).
- 개인정보처리방침은 한국어(`privacy/`)와 영어(`privacy/en/`)만 있습니다. 일본어 · 중국어 페이지는 영어 방침으로 연결합니다. 이용약관 · 고객 지원 · 계정 삭제 안내는 한국어 페이지로 연결합니다(링크에 「(Korean)」 표시).

## 파일

| 파일 | 내용 |
| --- | --- |
| `index.html` | 게임 소개 — 인트로 컷신, 스토리(3막 10장), 세계관, 게임, 외형 실험실, 안내, 아트 팩토리, 제작기 |
| `studio.html` | 제작사 데이터스테이션 소개 |
| `guide.html` | 시작 가이드 — 처음 온 유저용 안내서 |
| `news.html` | 공지 — 내용은 `assets/js/news-data.js` 하나에서 읽음 |
| `en/` `ja/` `zh/` | 위 네 페이지의 번역본 (자동 생성) |
| `assets/js/i18n.js` | 스크립트가 쓰는 화면 문구(등급 이름, 공지 분류 등) 네 언어 |
| `assets/js/news-data.js` | 공지 데이터 (언어별 제목 · 요약 · 본문) |
| `assets/js/data.js` | 장비 외형 목록 · 시그니처 세트 (이름 · 효과는 게임 번역 사전과 같은 네 언어) |
| `assets/js/main.js` · `news.js` | 컷신, 외형 실험실, 공지 목록 |
| `assets/css/style.css` | 스타일 (일본어 · 중국어 페이지는 맨 아래 글꼴 설정) |
| `assets/fonts/` | 갈무리(Galmuri), Fusion Pixel 12px 일본어 · 중국어 — 사이트에 쓰인 글자만 남긴 woff2, 모두 SIL OFL 1.1 (`OFL.txt`, `OFL-FusionPixel.txt`) |

## 공지 올리는 법 (네 언어)

1. `assets/js/news-data.js`를 엽니다. 파일 맨 위 주석에 항목 설명이 있습니다.
2. `NS_NEWS` 맨 위 항목 하나를 복사해 바로 위에 붙이고 `id` · `date` · `type` · `status` · `version`을 바꿉니다.
3. 글은 언어마다 따로 씁니다: `ko: { title, summary, sections }`(필수), `en`, `ja`, `zh`(같은 모양). 링크 이름도 `label: { ko, en, ja, zh }`.
4. 번역이 아직 없으면 그 언어를 빼 두면 됩니다. 그 공지는 한국어 페이지에만 보이고, 번역을 넣는 순간 해당 언어 페이지에도 나타납니다.
5. 심사가 끝나 적용되면 `status`만 `'pending'` → `'live'`로 바꿉니다.
6. 저장하고 올리면 네 언어의 공지 페이지와 첫 화면 「최신 소식」이 함께 바뀝니다.
7. 공지 하나를 링크로 보내려면 `https://neon-station.com/news.html#공지id` (영어는 `/en/news.html#공지id`).

공지에 처음 쓰는 글자(특히 한자 · 가나)가 들어가면 그 글자만 기본 글꼴로 보일 수 있습니다. 폰트 서브셋을 다시 만들면 됩니다(`_작업파일/i18n-tools/fonts.py`).

## 스토어 링크

`assets/js/news-data.js`의 `NS_SITE`에 주소를 넣으면 모든 언어의 다운로드 버튼이 연결됩니다.
- `appStoreUrl`: App Store 주소. 비워 두면 「App Store에서 「Neon Station」 검색」 안내가 보입니다.
- `playStoreUrl`: Google Play 정식 출시 후 `https://play.google.com/store/apps/details?id=com.datastation.neonstation`. 비워 두면 「Google Play 출시 준비 중」이 보입니다.

## 번역 다시 만들기

한국어 페이지 문장을 고쳤다면 번역본도 다시 만들어야 합니다. 이 채팅(Claude)에 「사이트 번역 다시 만들어 줘」라고 요청하면 됩니다. 도구는 `홈페이지/_작업파일/i18n-tools`에 있습니다.
- `src/*.html`: 한국어 원문 (`<!--LANGS-->` · `<!--HREFLANG-->` 자리 표시)
- `tr/*.txt`: 직접 번역한 문장, 게임 사전(`C:\Dev\src\i18n\*.json`)에 있는 문장은 그대로 씀
- `i18n_build.py`: 원문 + 번역표 → `/` `/en/` `/ja/` `/zh/` 페이지, 번역이 빠진 문장은 `i18n_missing.json`에 기록
- `fonts.py`: 폰트 서브셋

## 올리기

```powershell
cd "C:\Users\rlack\OneDrive\바탕 화면\네온스테이션_게임개발_261116\홈페이지\neon-station-web"
robocopy ..\neon-station-site . /E
git add .
git commit -m "메시지"
git push
```
`/MIR`는 쓰지 않습니다(저장소에만 있는 `CNAME` · `privacy/` · `terms/` · `support/` · `delete-account/` · `app-ads.txt`가 지워짐).
GitHub Pages 안내: https://docs.github.com/ko/pages/getting-started-with-github-pages/creating-a-github-pages-site

로컬에서 미리 보려면 이 폴더에서 `python -m http.server 8000` 실행 후 http://localhost:8000 을 엽니다.

## 갱신 기록

- 2026-11-24: 1.1.0 기준 — 장비 11등급, 스킬트리 · 칩, 특수 의뢰 5종, 온라인 탭, 무기상 Lv50, 배경음악 10곡, 스토어 스크린샷.
- 2026-11-25: 시작 가이드 · 공지 추가, iOS 출시 반영.
- 2026-11-26: 1.1.3 반영 — 진압열차 10단계, 스킬트리 여섯 계열, 펫 55종, 세트 40종, 칭호 232종, 외형 594종.
- 2026-11-27: 영어 · 일본어 · 중국어 사이트(`/en/` `/ja/` `/zh/`)와 언어 메뉴, 네 언어 공지. 1.1.4 반영 — 게스트 백업 · 복구 코드, 방어 계산, 일본어 앱, Google Play 정식 출시 심사(테스터 모집 종료), 개인정보처리방침 변경 공지(12월 4일 시행).
