/*
 * Neon Station notices. news.html and the 「최신 소식」 list on the home page and the guide read this file,
 * in every language (/ = 한국어, /en/, /ja/, /zh/).
 *
 * How to add a notice: copy the top entry, paste it at the top of NS_NEWS and change the content.
 *   id        Name after the address (letters, numbers, -). Example: news.html#2026-12-01-v1-2-0
 *   date      YYYY-MM-DD
 *   type      'update' · 'notice' · 'event' (events, coupons) · 'maint' (maintenance)
 *   status    (optional) 'live' · 'pending' (store review / rollout) · 'open' (recruiting) · 'ended'
 *   version   (optional) app version
 *   platforms (optional) ['Android', 'iOS']
 *   links     (optional) [{ href, label: { ko, en, ja, zh } }]
 *             Write href for the Korean root pages (news.html#…, guide.html, privacy/, terms/, support/).
 *             The /en/ /ja/ /zh/ pages fix the path themselves (privacy/ opens the English policy).
 *   ko        { title, summary, sections: [{ title, items: ['one line', …] }] }   ← required
 *   en, ja, zh  same shape as ko. A notice shows on a language page only when it has that language.
 *             If a translation is not ready, leave it out: the notice shows in Korean only.
 * When the status changes (for example, store review passed), change only status to 'live'.
 */
window.NS_SITE = {
  // Put the App Store address here when it is set (example: 'https://apps.apple.com/kr/app/neon-station/id0000000000').
  // When empty, the button shows the 「data-fallback」 text.
  appStoreUrl: '',
  // Put the Google Play address here when the production release is live:
  // 'https://play.google.com/store/apps/details?id=com.datastation.neonstation'
  playStoreUrl: '',
  testerUrl: 'https://ig.me/m/_neon_station',
  instagramUrl: 'https://www.instagram.com/_neon_station/',
};

window.NS_NEWS = [
  {
    id: '2026-11-27-v1-1-4',
    date: '2026-11-27',
    type: 'update',
    status: 'pending',
    version: '1.1.4',
    platforms: ['Android', 'iOS'],
    ko: {
      title: '1.1.4 업데이트 안내 — 게스트 백업 · 복구 코드, 방어 계산, 일본어',
      summary: '연동하지 않은 게스트 계정도 진행이 서버에 자동으로 백업되고, 복구 코드로 다시 불러올 수 있습니다. 전투력의 방어 계산이 장비 기준으로 바뀌고, 일본어를 고를 수 있습니다.',
      sections: [
        {
          title: '새로운 것',
          items: [
            '게스트 계정도 진행이 10분마다, 그리고 앱을 내릴 때 서버에 자동으로 백업됩니다.',
            '프로필 › 계정 연동 아래에서 16자리 「복구 코드」를 만들 수 있습니다. 앱을 다시 설치했다면 종족 선택 화면이나 프로필에서 코드를 넣어 진행을 불러옵니다.',
            '복구 코드는 만든 기기에서만 다시 볼 수 있습니다. 메모 앱이나 사진으로 따로 보관하세요. 잃어버렸다면 [새 코드 만들기]로 바꿀 수 있습니다.',
            '[전투] · [프로필] 능력치에 근거리 · 원거리 공격력이 보입니다. 장착한 무기 종류와 다르면 「(무기 다름)」이 붙습니다.',
            '노선 무전에 「11/27 09:05」처럼 날짜가 보입니다.',
            '프로필 › 설정 › 언어에서 日本語를 고를 수 있습니다. 일본어 기기에서는 처음부터 일본어로 시작합니다.',
            '새 펫에 공격 동작이 생기고, 투구와 장비 착용 모습이 아이콘과 같아집니다.',
          ],
        },
        {
          title: '바뀐 것',
          items: [
            '전투력의 방어 계산이 계정 레벨 대신 장비 기준으로 바뀌었습니다. 방어를 올리면 높은 등급에서도 전투력이 오릅니다.',
            '방치 사냥 · 보스전에서 실제로 받는 피해는 그대로입니다.',
            'PVP 랭킹의 전투력 숫자는 각자 1.1.4로 처음 접속할 때 한 번 바뀝니다.',
          ],
        },
        {
          title: '고친 것',
          items: [
            '아이폰에서 시그니처 세트를 발견할 때 화면이 멈추던 문제를 고쳤습니다. 이제 다른 창이 모두 닫힌 뒤에 발견 알림이 뜹니다.',
          ],
        },
        {
          title: '운영',
          items: [
            '앱 안정성을 위해 충돌 기록(기기 모델 · OS 버전 · 앱 버전 · 오류 내용)을 모읍니다. 이름 · 계정 id · 화면 캡처는 보내지 않습니다.',
            '신고된 채팅 글을 운영자가 더 빨리 확인하도록 알림을 붙였습니다.',
            '이 내용에 맞춰 개인정보처리방침을 고쳤습니다(12월 4일 시행).',
          ],
        },
      ],
    },
    en: {
      title: '1.1.4 update — guest backup, recovery code, defense formula, Japanese',
      summary: 'Guest accounts without a linked account now back up progress to the server, and you can load it again with a recovery code. Defense in combat power now comes from your gear, and Japanese is available.',
      sections: [
        {
          title: 'New',
          items: [
            'Guest accounts now back up progress to the server every 10 minutes and when you close the app.',
            'Under Profile › Account Link you can make a 16-digit recovery code. After a reinstall, enter the code on the race select screen or in Profile to load your progress.',
            'A recovery code shows again only on the device that made it. Keep it in a notes app or a screenshot. If you lose it, tap [Create new code] to replace it.',
            'Battle and Profile stats now show Melee Attack and Ranged Attack. When the bonus does not match your weapon type, it shows 「(other weapon)」.',
            'Line Radio messages now show the date, for example 「11/27 09:05」.',
            'Japanese is available in Profile › Settings › Language. Devices set to Japanese start in Japanese.',
            'New pets get attack animations, and helmets and worn gear now match their icons.',
          ],
        },
        {
          title: 'Changed',
          items: [
            'Defense in combat power now comes from your gear, not your account level. Raising defense now raises combat power at high grades too.',
            'Damage you actually take while idle hunting and in boss fights does not change.',
            'Your PVP ranking power changes once, the first time you sign in on 1.1.4.',
          ],
        },
        {
          title: 'Fixed',
          items: [
            'Fixed the iPhone screen freezing when you discover a Signature Set. The discovery alert now opens after all other windows close.',
          ],
        },
        {
          title: 'Operations',
          items: [
            'To keep the app stable, we collect crash reports (device model, OS version, app version, error details). Names, account ids and screenshots are not sent.',
            'Reported chat messages now alert the operator so they are checked sooner.',
            'The privacy policy is updated to match (in effect December 4).',
          ],
        },
      ],
    },
    ja: {
      title: '1.1.4 アップデートのお知らせ — ゲストバックアップ・復旧コード、防御計算、日本語',
      summary: '連携していないゲストアカウントも進行がサーバーに自動でバックアップされ、復旧コードで読み込めるようになりました。戦闘力の防御計算が装備基準に変わり、日本語を選べるようになりました。',
      sections: [
        {
          title: '新しい内容',
          items: [
            'ゲストアカウントも、10分ごととアプリを閉じたときに進行がサーバーへ自動でバックアップされます。',
            'プロフィール › アカウント連携の下で16桁の「復旧コード」を作成できます。再インストールしたときは、種族選択画面またはプロフィールでコードを入力して進行を読み込みます。',
            '復旧コードは作成した端末でのみ再表示できます。メモアプリや写真で別に保管してください。なくした場合は［新しいコードを作成］で作り直せます。',
            'バトル・プロフィールの能力値に近接攻撃力・遠距離攻撃力が表示されます。装備中の武器の種類と違う場合は「(武器違い)」と表示されます。',
            '路線無線に「11/27 09:05」のように日付が表示されます。',
            'プロフィール › 設定 › 言語で日本語を選べます。日本語の端末では最初から日本語で始まります。',
            '新しいペットに攻撃モーションが追加され、兜と装備の着用イラストがアイコンと同じになります。',
          ],
        },
        {
          title: '変更点',
          items: [
            '戦闘力の防御計算が、アカウントレベルではなく装備基準に変わりました。防御を上げると高い等級でも戦闘力が上がります。',
            '放置狩り・ボス戦で実際に受けるダメージは変わりません。',
            'PVPランキングの戦闘力は、各自が1.1.4で初めて接続したときに一度だけ変わります。',
          ],
        },
        {
          title: '修正',
          items: [
            'iPhoneでシグネチャーセットを発見したときに画面が止まる問題を修正しました。発見の通知は、ほかのウィンドウがすべて閉じたあとに表示されます。',
          ],
        },
        {
          title: '運営',
          items: [
            'アプリの安定性のため、クラッシュ記録（端末モデル・OSバージョン・アプリバージョン・エラー内容）を収集します。名前・アカウントID・画面キャプチャは送信しません。',
            '通報されたチャットを運営がより早く確認できるよう、通知を追加しました。',
            'これに合わせてプライバシーポリシーを改定しました（12月4日施行）。',
          ],
        },
      ],
    },
    zh: {
      title: '1.1.4 更新公告 — 游客备份 · 恢复码、防御计算、日语',
      summary: '未绑定账号的游客账号也会将进度自动备份到服务器，并可用恢复码重新读取。战力中的防御计算改为以装备为准，并新增日语。',
      sections: [
        {
          title: '新增',
          items: [
            '游客账号每 10 分钟以及关闭应用时，进度会自动备份到服务器。',
            '可在 资料 › 账号绑定 下方生成 16 位「恢复码」。重新安装后，在种族选择界面或资料中输入恢复码即可读取进度。',
            '恢复码只能在生成它的设备上再次查看。请用备忘录或截图另行保存。若遗失，可点击［生成新码］更换。',
            '战斗 · 资料的属性中显示近战攻击力与远程攻击力。与所装备武器类型不同时，会标注「(武器不符)」。',
            '线路无线电显示日期，例如「11/27 09:05」。',
            '可在 资料 › 设置 › 语言 中选择日本語。日语设备首次启动即为日语。',
            '新宠物增加攻击动作，头盔与装备穿戴外观改为与图标一致。',
          ],
        },
        {
          title: '变更',
          items: [
            '战力中的防御计算由账号等级改为以装备为准。提升防御后，在高等级下战力也会上升。',
            '放置狩猎与首领战中实际受到的伤害不变。',
            'PVP 排行榜中的战力数字会在各位首次以 1.1.4 登录时变化一次。',
          ],
        },
        {
          title: '修复',
          items: [
            '修复了 iPhone 上发现签名套装时画面卡住的问题。发现提示现在会在其他窗口全部关闭后弹出。',
          ],
        },
        {
          title: '运营',
          items: [
            '为保证应用稳定，我们会收集崩溃记录（设备型号 · 系统版本 · 应用版本 · 错误内容）。不会发送名字、账号 ID 或截图。',
            '为让运营更快处理被举报的聊天消息，新增了举报提醒。',
            '隐私政策已随之修订（12 月 4 日起施行）。',
          ],
        },
      ],
    },
    links: [
      { href: 'news.html#2026-11-27-privacy', label: { ko: '개인정보처리방침 변경 안내', en: 'Privacy policy changes', ja: 'プライバシーポリシー改定のお知らせ', zh: '隐私政策变更公告' } },
      { href: 'guide.html', label: { ko: '시작 가이드', en: 'Starter guide', ja: 'スタートガイド', zh: '入门指南' } },
    ],
  },
  {
    id: '2026-11-27-privacy',
    date: '2026-11-27',
    type: 'notice',
    ko: {
      title: '개인정보처리방침 변경 안내 (2026년 12월 4일 시행)',
      summary: '1.1.3 · 1.1.4에 들어간 게스트 백업, 복구 코드, 충돌 기록, 재화 변동 기록에 맞춰 개인정보처리방침을 고칩니다. 12월 4일부터 적용됩니다.',
      sections: [
        {
          title: '바뀌는 내용',
          items: [
            '게스트 백업: 계정을 연동하지 않은 이용자도 게임 진행을 서버에 백업합니다(10분마다 · 앱을 내릴 때). 계정을 지우면 함께 지웁니다.',
            '복구 코드: 서버에는 코드 원문이 아닌 확인용 해시만 저장합니다. 무차별 입력을 막으려고 입력 기록을 남기고, 정해진 기간이 지나면 지웁니다.',
            '충돌 기록: 기기 모델 · OS 버전 · 앱 버전 · 오류 내용을 모읍니다. 처리 위탁: Functional Software, Inc.(Sentry, 미국). 국외 이전 항목에도 적었습니다.',
            '재화 변동 기록: 부정 이용을 막으려고 크레딧 등 재화가 바뀐 기록을 서버에 남깁니다.',
            '시행일: 2026년 12월 4일 (공고 2026년 11월 27일).',
          ],
        },
      ],
    },
    en: {
      title: 'Privacy policy changes (in effect December 4, 2026)',
      summary: 'We are updating the privacy policy for the guest backup, recovery code, crash reports and currency records added in 1.1.3 and 1.1.4. The changes apply from December 4.',
      sections: [
        {
          title: 'What changes',
          items: [
            'Guest backup: progress of players without a linked account is backed up to the server (every 10 minutes and when the app closes). It is deleted with the account.',
            'Recovery code: the server stores only a hash for checking, not the code itself. Attempts are logged to stop brute-force guessing and deleted after a set period.',
            'Crash reports: device model, OS version, app version and error details. Processor: Functional Software, Inc. (Sentry, United States), also listed under international transfers.',
            'Currency records: changes to Credits and other currencies are logged on the server to prevent fraud.',
            'Effective date: December 4, 2026 (announced November 27, 2026).',
          ],
        },
      ],
    },
    ja: {
      title: 'プライバシーポリシー改定のお知らせ（2026年12月4日施行）',
      summary: '1.1.3・1.1.4で追加したゲストバックアップ、復旧コード、クラッシュ記録、通貨変動記録に合わせてプライバシーポリシーを改定します。12月4日から適用されます。',
      sections: [
        {
          title: '主な変更点',
          items: [
            'ゲストバックアップ：アカウントを連携していない方もゲームの進行をサーバーにバックアップします（10分ごと・アプリを閉じたとき）。アカウントを削除すると一緒に削除します。',
            '復旧コード：サーバーにはコードそのものではなく、確認用のハッシュのみを保存します。総当たり入力を防ぐため入力記録を残し、一定期間が過ぎると削除します。',
            'クラッシュ記録：端末モデル・OSバージョン・アプリバージョン・エラー内容を収集します。委託先：Functional Software, Inc.（Sentry、米国）。国外移転の項目にも記載しました。',
            '通貨変動記録：不正利用を防ぐため、クレジットなどの通貨が変動した記録をサーバーに残します。',
            '施行日：2026年12月4日（公告 2026年11月27日）。',
          ],
        },
      ],
    },
    zh: {
      title: '隐私政策变更公告（2026 年 12 月 4 日起施行）',
      summary: '我们将根据 1.1.3 · 1.1.4 新增的游客备份、恢复码、崩溃记录与货币变动记录修订隐私政策，自 12 月 4 日起适用。',
      sections: [
        {
          title: '变更内容',
          items: [
            '游客备份：未绑定账号的用户，游戏进度也会备份到服务器（每 10 分钟 · 关闭应用时）。删除账号时一并删除。',
            '恢复码：服务器只保存用于校验的哈希值，不保存恢复码原文。为防止暴力尝试，会保留输入记录，并在规定期限后删除。',
            '崩溃记录：收集设备型号 · 系统版本 · 应用版本 · 错误内容。受托处理方：Functional Software, Inc.（Sentry，美国），已同时列入境外转移项目。',
            '货币变动记录：为防止违规使用，会在服务器保留点券等货币的变动记录。',
            '施行日期：2026 年 12 月 4 日（公告日期 2026 年 11 月 27 日）。',
          ],
        },
      ],
    },
    links: [
      { href: 'privacy/', label: { ko: '개인정보처리방침', en: 'Privacy policy', ja: 'プライバシーポリシー（英語）', zh: '隐私政策（英文）' } },
      { href: 'delete-account/', label: { ko: '계정 삭제 안내', en: 'Delete your account', ja: 'アカウント削除（韓国語）', zh: '删除账号（韩文）' } },
    ],
  },
  {
    id: '2026-11-26-v1-1-3',
    date: '2026-11-26',
    type: 'update',
    status: 'pending',
    version: '1.1.3',
    platforms: ['Android', 'iOS'],
    ko: {
      title: '1.1.3 업데이트 안내 — 진압열차 10단계, 스킬트리 확장, 펫 55종, 세트 40종',
      summary: '진압열차가 10단계가 되고, 스킬트리에 임플란트 · 펫 계열이 생깁니다. 임플란트 · 펫에 퀀텀 · 보이드 · 오리진 등급과 새 펫 39종이 더해지고, 같은 등급에서 레벨이 높은 장비가 더 약하던 문제를 고쳤습니다.',
      sections: [
        {
          title: '진압열차 10단계',
          items: [
            '매주 1호부터 시작해, 한 대를 멈추면 바로 다음 열차가 내려옵니다(최대 10호). 4호 하울링 · 5호 데드볼트 · 6호 크림슨게이트 · 7호 사일런트노드 · 8호 메리디안 · 9호 노바크러시 · 10호 종착역이 새로 생겼습니다.',
            '열차 체력은 단계마다 정해져 있고(1호 300만 → 10호 1,000억), 단계가 오를수록 보상(토큰 · 크레딧 · 노선 경험치)이 커집니다.',
            '보상은 단계마다 그 열차에 넣은 피해(기여도)에 따라 나뉩니다.',
            '진압열차 탭에서 「n / 10단계」와 단계표를 볼 수 있고, 다른 라인 카드에 이번 주 멈춘 수가 보입니다.',
            '업데이트가 적용되는 순간 이번 주 열차는 1호부터 다시 시작합니다. 이번 주 피해 순위는 비워지고, 이미 받은 보상 · 토큰 · 아직 받지 않은 크레딧 · 누적 격파 수는 그대로입니다.',
          ],
        },
        {
          title: '무기상',
          items: [
            '1.1.2에서 같은 등급 안 레벨이 높은 장비가 오히려 약하게 나오던 문제를 고쳤습니다. 이제 무기상 레벨이 오를수록 장비도 계속 강해집니다.',
            '이미 가진 장비는 능력치 · 외형 그대로이고, 아이템 레벨 숫자만 새 기준으로 바뀝니다.',
            '업그레이드 진행 바를 한 줄로 줄이고 [30분 단축] · [즉시 완료] 버튼을 작게 바꿔 인벤토리가 더 많이 보입니다.',
            '무기상 초상을 누르면 레벨별 확률표가 열립니다(◀ ▶ 1레벨, « » 10레벨씩).',
          ],
        },
        {
          title: '스킬트리 · 능력치',
          items: [
            '모든 계열이 18층으로 깊어졌습니다. 이미 올린 단계는 그대로입니다.',
            '새 계열 [임플란트](신경 부하 한도 · 계열 효과 · 기술 발동 주기)와 [펫](펫 피해 · 펫 능력 발동 주기)이 생겨 모두 여섯 계열이 되었습니다.',
            '새 능력치 「근거리 공격력」 · 「원거리 공격력」: 장착한 무기 종류가 맞을 때 공격력이 오릅니다. 장비 · 펫 옵션, 임플란트, 스킬트리에서 얻습니다.',
            '에드온 계열 감소 상한이 올랐습니다(무기상 시간 35% · 임플란트/펫 비용 30%).',
          ],
        },
        {
          title: '임플란트 · 펫 · 수집',
          items: [
            '리퍼메딕 · 펫 브리더가 Lv15까지 오르고, 퀀텀(Lv12) · 보이드(Lv14) · 오리진(Lv15) 등급이 열립니다. 확률 정보에도 함께 공개됩니다.',
            '새 펫 39종이 더해져 펫이 55종(등급마다 5종)이 되었습니다.',
            '임플란트 상세에 「신경 부하 · 장착 합계 / 한도」가 보입니다.',
            '시그니처 세트 31~40번(상위 외형 세트)이 생겨 40종이 되었습니다.',
            '업적 100종이 더해져 칭호가 232종이 되었습니다(새 분류: 진압열차 · 펫 · 임플란트 · 스킬트리).',
            '프리미엄 프로필 이미지 10종이 추가되었습니다.',
          ],
        },
        {
          title: '운영',
          items: [
            '공정한 게임을 위해 재화 변동을 서버에서 확인합니다. 결제 · 쿠폰 · 게임 보상으로 설명되지 않는 크레딧은 서버 기록에 맞게 조정될 수 있습니다.',
            '1.1.2 업데이트 내용(아이템 레벨, 상위 외형, 진압열차 기여도 보상, PVP 내 순위 등)도 이 버전에 함께 들어 있습니다.',
          ],
        },
      ],
    },
    en: {
      title: '1.1.3 update — 10-stage Riot Train, bigger Skill Tree, 55 pets, 40 sets',
      summary: 'The Riot Train now has 10 stages, and the Skill Tree gets Implant and Pet branches. Implants and pets get Quantum, Void and Origin grades plus 39 new pets, and we fixed higher-level gear being weaker within the same grade.',
      sections: [
        {
          title: 'Riot Train in 10 stages',
          items: [
            'Each week starts at Train 1. Stop one and the next comes down right away (up to Train 10). New: 4 Howling, 5 Deadbolt, 6 Crimson Gate, 7 Silent Node, 8 Meridian, 9 Nova Crush, 10 Terminus.',
            'Each stage has fixed HP (Train 1: 3 million → Train 10: 100 billion). Higher stages give bigger rewards (Tokens, Credits, route XP).',
            'Rewards for each stage are split by the damage you dealt to that train (contribution).',
            'The Riot Train tab shows 「n / 10」 and the stage table. Other Line cards show how many trains they stopped this week.',
            'When the update goes live, this week restarts at Train 1. The weekly damage ranking resets. Rewards and Tokens you got, unclaimed Credits and total kills stay.',
          ],
        },
        {
          title: 'Arms Dealer',
          items: [
            'Fixed higher-level gear within the same grade coming out weaker in 1.1.2. Gear now keeps getting stronger as the Arms Dealer levels up.',
            'Gear you already own keeps its stats and look. Only the item level number moves to the new scale.',
            'The upgrade bar is now one line, and the [−30 min] and [Finish now] buttons are smaller, so you see more of your inventory.',
            'Tap the Arms Dealer portrait to open the odds table by level (◀ ▶ one level, « » ten levels).',
          ],
        },
        {
          title: 'Skill Tree and stats',
          items: [
            'Every branch now goes 18 tiers deep. Levels you already raised stay.',
            'New branches [Implants] (neural load cap, branch effects, skill cooldown) and [Pets] (pet damage, pet ability cooldown) bring the total to six.',
            'New stats Melee Attack and Ranged Attack raise attack when your weapon type matches. Get them from gear and pet options, implants and the Skill Tree.',
            'Add-ons reduction caps went up (Arms Dealer time 35%, implant and pet costs 30%).',
          ],
        },
        {
          title: 'Implants, pets and collection',
          items: [
            'Ripper Medic and Pet Breeder now reach Lv15 and unlock Quantum (Lv12), Void (Lv14) and Origin (Lv15). The odds are published in the probability info.',
            '39 new pets bring the total to 55 (five per grade).',
            'Implant details now show neural load: equipped total / cap.',
            'Signature Sets 31–40 (upper look sets) bring the total to 40.',
            '100 new achievements bring titles to 232 (new groups: Riot Train, Pets, Implants, Skill Tree).',
            '10 premium profile images were added.',
          ],
        },
        {
          title: 'Operations',
          items: [
            'For fair play, the server checks currency changes. Credits that payments, coupons or game rewards cannot explain may be adjusted to match server records.',
            'This version also includes everything in 1.1.2 (item levels, upper looks, Riot Train contribution rewards, your PVP rank and more).',
          ],
        },
      ],
    },
    ja: {
      title: '1.1.3 アップデートのお知らせ — 鎮圧列車10段階、スキルツリー拡張、ペット55種、セット40種',
      summary: '鎮圧列車が10段階になり、スキルツリーにインプラント・ペット系統が追加されます。インプラント・ペットにクォンタム・ヴォイド・オリジン等級と新ペット39種が加わり、同じ等級でレベルの高い装備のほうが弱かった問題を修正しました。',
      sections: [
        {
          title: '鎮圧列車10段階',
          items: [
            '毎週1号から始まり、1両止めるとすぐに次の列車が下りてきます（最大10号）。4号ハウリング・5号デッドボルト・6号クリムゾンゲート・7号サイレントノード・8号メリディアン・9号ノヴァクラッシュ・10号終着駅が追加されました。',
            '列車の体力は段階ごとに決まっており（1号 300万 → 10号 1,000億）、段階が上がるほど報酬（トークン・クレジット・路線経験値）が大きくなります。',
            '報酬は段階ごとに、その列車に与えたダメージ（貢献度）に応じて分配されます。',
            '鎮圧列車タブで「n / 10段階」と段階表を確認でき、ほかのラインのカードに今週止めた数が表示されます。',
            'アップデートが適用された時点で、今週の列車は1号からやり直しになります。今週のダメージ順位はリセットされ、受け取った報酬・トークン・未受取のクレジット・累計撃破数はそのままです。',
          ],
        },
        {
          title: '武器商',
          items: [
            '1.1.2で、同じ等級内でレベルの高い装備のほうが弱く出ていた問題を修正しました。武器商のレベルが上がるほど装備も強くなり続けます。',
            '所持中の装備は能力値・外見そのままで、アイテムレベルの数字だけが新しい基準に変わります。',
            'アップグレードの進行バーを1行にまとめ、［30分短縮］・［即時完了］ボタンを小さくしてインベントリが広く見えるようにしました。',
            '武器商の肖像をタップすると、レベル別の確率表が開きます（◀ ▶ 1レベル、« » 10レベルずつ）。',
          ],
        },
        {
          title: 'スキルツリー・能力値',
          items: [
            'すべての系統が18層まで深くなりました。上げた段階はそのままです。',
            '新しい系統［インプラント］（神経負荷の上限・系統効果・スキル発動間隔）と［ペット］（ペットダメージ・ペット能力の発動間隔）が加わり、全6系統になりました。',
            '新しい能力値「近接攻撃力」・「遠距離攻撃力」：装備中の武器の種類が合うと攻撃力が上がります。装備・ペットのオプション、インプラント、スキルツリーで得られます。',
            'アドオン系統の短縮上限が上がりました（武器商の時間 35%・インプラント/ペットの費用 30%）。',
          ],
        },
        {
          title: 'インプラント・ペット・収集',
          items: [
            'リッパーメディック・ペットブリーダーがLv15まで上がり、クォンタム（Lv12）・ヴォイド（Lv14）・オリジン（Lv15）等級が解放されます。確率情報にもあわせて公開します。',
            '新ペット39種が加わり、ペットは55種（等級ごとに5種）になりました。',
            'インプラントの詳細に「神経負荷・装備合計 / 上限」が表示されます。',
            'シグネチャーセット31〜40番（上位外見セット）が追加され、40種になりました。',
            '実績100種が加わり、称号は232種になりました（新しい分類：鎮圧列車・ペット・インプラント・スキルツリー）。',
            'プレミアムプロフィール画像10種を追加しました。',
          ],
        },
        {
          title: '運営',
          items: [
            '公正なゲームのため、通貨の変動をサーバーで確認します。決済・クーポン・ゲーム報酬で説明できないクレジットは、サーバー記録に合わせて調整されることがあります。',
            '1.1.2の内容（アイテムレベル、上位外見、鎮圧列車の貢献度報酬、PVPの自分の順位など）もこのバージョンに含まれています。',
          ],
        },
      ],
    },
    zh: {
      title: '1.1.3 更新公告 — 镇压列车 10 阶段、技能树扩展、宠物 55 种、套装 40 种',
      summary: '镇压列车扩展为 10 个阶段，技能树新增植入体 · 宠物分支。植入体与宠物新增量子 · 虚空 · 起源等级及 39 种新宠物，并修复了同一等级中等级更高的装备反而更弱的问题。',
      sections: [
        {
          title: '镇压列车 10 阶段',
          items: [
            '每周从 1 号开始，停下一列后下一列会立刻驶来（最多 10 号）。新增 4 号嚎叫 · 5 号死锁 · 6 号绯红之门 · 7 号静默节点 · 8 号子午线 · 9 号新星粉碎 · 10 号终点站。',
            '列车体力按阶段固定（1 号 300 万 → 10 号 1,000 亿），阶段越高奖励（代币 · 点券 · 线路经验）越多。',
            '每个阶段的奖励按你对该列车造成的伤害（贡献度）分配。',
            '镇压列车页签可查看「n / 10 阶段」与阶段表，其他线路的卡片会显示本周停下的列车数。',
            '更新生效时，本周列车会从 1 号重新开始。本周伤害排名清空，已获得的奖励 · 代币 · 尚未领取的点券 · 累计击破数保持不变。',
          ],
        },
        {
          title: '军火商',
          items: [
            '修复了 1.1.2 中同一等级内等级更高的装备反而更弱的问题。现在军火商等级越高，装备也会持续变强。',
            '已拥有的装备属性与外观不变，只有物品等级数字改为新标准。',
            '升级进度条缩为一行，［缩短 30 分钟］·［立即完成］按钮变小，背包可显示更多内容。',
            '点击军火商头像可打开各等级概率表（◀ ▶ 每次 1 级，« » 每次 10 级）。',
          ],
        },
        {
          title: '技能树 · 属性',
          items: [
            '所有分支加深到 18 层。已提升的阶段保持不变。',
            '新增［植入体］（神经负荷上限 · 分支效果 · 技能触发间隔）与［宠物］（宠物伤害 · 宠物能力触发间隔）分支，共六个分支。',
            '新属性「近战攻击力」·「远程攻击力」：所装备武器类型相符时提升攻击力。可从装备 · 宠物词条、植入体与技能树获得。',
            '扩展分支的减免上限提高（军火商时间 35% · 植入体/宠物费用 30%）。',
          ],
        },
        {
          title: '植入体 · 宠物 · 收集',
          items: [
            '义体医生 · 宠物饲养员可升到 Lv15，解锁量子（Lv12）· 虚空（Lv14）· 起源（Lv15）等级，并同步公开在概率信息中。',
            '新增 39 种宠物，宠物共 55 种（每个等级 5 种）。',
            '植入体详情显示「神经负荷 · 装备合计 / 上限」。',
            '新增签名套装 31~40 号（高阶外观套装），共 40 种。',
            '新增 100 项成就，称号共 232 种（新分类：镇压列车 · 宠物 · 植入体 · 技能树）。',
            '新增 10 种高级头像。',
          ],
        },
        {
          title: '运营',
          items: [
            '为保证公平，服务器会核对货币变动。无法以付款、兑换码或游戏奖励解释的点券，可能会按服务器记录进行调整。',
            '本版本同时包含 1.1.2 的内容（物品等级、高阶外观、镇压列车贡献度奖励、PVP 本人排名等）。',
          ],
        },
      ],
    },
    links: [{ href: 'news.html#2026-11-25-v1-1-2', label: { ko: '1.1.2 업데이트 안내', en: '1.1.2 update', ja: '1.1.2 アップデート', zh: '1.1.2 更新公告' } }],
  },
  {
    id: '2026-11-25-v1-1-2',
    date: '2026-11-25',
    type: 'update',
    status: 'pending',
    version: '1.1.2',
    platforms: ['Android', 'iOS'],
    ko: {
      title: '1.1.2 업데이트 안내 — 아이템 레벨, 상위 외형, 진압열차 기여도 보상',
      summary: '무기상 장비에 등급 안 레벨(1~50)이 붙고, Lv26 이상 장비는 새 「상위 외형」을 입습니다. 진압열차 보상은 기여도에 따라 나뉩니다. 아이폰에는 1.1.1 내용(상점 결제·계정 연동 등)이 함께 들어갑니다.',
      sections: [
        {
          title: '새로운 것',
          items: [
            '무기상 아이템 레벨이 「등급 안 레벨」(1~50)로 바뀝니다. 등급이 처음 열리면 Lv1 근처로 나오고, 다음 등급이 열릴 때쯤 Lv40~50이 됩니다. 능력치 계산은 예전과 같아 세기는 그대로입니다.',
            '이미 가진 장비는 레벨 숫자·능력치·외형 모두 그대로입니다.',
            '아이템 Lv26 이상 장비는 등급마다 부위별 5종의 「상위 외형」을 입습니다(외형 도감 594칸). 그림은 준비되는 대로 업데이트로 바뀝니다.',
            '진압열차 격파 보상이 기여도(내 피해 ÷ 라인 전체 피해)에 따라 50%~200%로 나뉩니다. 평균만큼 공격했다면 지금과 같습니다.',
            'PVP 이번 주 순위에서 내 줄이 강조되고, 10위 밖이면 10위 아래에 내 바로 위 · 나 · 바로 아래가 보입니다.',
          ],
        },
        {
          title: '다듬은 것',
          items: [
            '스킬트리 효과 설명이 잘리지 않고, [강화] · [즉시 완료] 아래에 보유 / 필요 재화가 보입니다.',
            '상점에서 상품을 사면 [구매 완료] 창이 뜹니다.',
            '자동 뽑기의 「보관할 등급」에는 지금 열린 등급만 보입니다.',
            '시그니처 세트 21~30번을 발견했을 때 다른 프로필 그림이 보이던 문제를 고쳤습니다.',
          ],
        },
        {
          title: '1.1.1에서 바뀐 것 (함께 적용)',
          items: [
            '상점에서 크레딧 충전 · 전투 건너뛰기권 · 광고 영구 제거를 살 수 있습니다. 광고 제거는 [구매 복원]으로 다시 적용됩니다.',
            '프로필 › 계정 연동: Google · Apple 계정을 연동하면 진행이 서버에 자동으로 백업되고, 새 기기에서 같은 계정으로 불러올 수 있습니다.',
            '스토어에서 환불된 결제는 지급했던 상품을 회수합니다.',
            '신고가 여러 번 들어온 채팅 글은 운영자 확인 전에도 자동으로 가려집니다.',
            '오프라인 보상은 최대 3시간까지 쌓입니다(이전 8시간).',
            '[전투] 화면의 스킬트리 버프를 제목을 눌러 접고 펼칠 수 있습니다.',
          ],
        },
      ],
    },
    en: {
      title: '1.1.2 update — item levels, upper looks, Riot Train contribution rewards',
      summary: 'Arms Dealer gear now has a level within its grade (1–50), and gear at Lv26 and above wears a new upper look. Riot Train rewards are split by contribution. iPhone also gets the 1.1.1 changes (shop purchases, Account Link and more).',
      sections: [
        {
          title: 'New',
          items: [
            'Arms Dealer item level is now a level within the grade (1–50). A newly opened grade starts near Lv1 and reaches Lv40–50 around the time the next grade opens. Stats are calculated as before, so strength does not change.',
            'Gear you already own keeps its level number, stats and look.',
            'Gear at item Lv26 and above wears one of five upper looks per slot in each grade (594 entries in the look collection). Art is replaced in updates as it is ready.',
            'Riot Train rewards are now 50%–200% based on contribution (your damage ÷ total Line damage). If you dealt average damage, you get the same as before.',
            'In the weekly PVP ranking your row is highlighted. Outside the top 10, the players right above and below you show under 10th place.',
          ],
        },
        {
          title: 'Polished',
          items: [
            'Skill Tree effect text no longer gets cut off, and owned / needed currency shows under [Upgrade] and [Finish now].',
            'A [Purchase complete] window opens after you buy something in the Shop.',
            'Auto Trade 「grades to keep」 now lists only the grades you have unlocked.',
            'Fixed the wrong profile image showing when you discover Signature Sets 21–30.',
          ],
        },
        {
          title: 'From 1.1.1 (included)',
          items: [
            'The Shop sells Credits, Battle skip tickets and permanent ad removal. [Restore Purchases] brings back ad removal.',
            'Profile › Account Link: link a Google or Apple account to back up progress to the server automatically and load it on a new device.',
            'Purchases refunded by the store take back the items they gave.',
            'Chat messages reported several times are hidden automatically before an operator checks them.',
            'Offline rewards now build up for up to 3 hours (was 8 hours).',
            'Tap the title of the Skill Tree buffs on the Battle screen to fold or unfold them.',
          ],
        },
      ],
    },
    ja: {
      title: '1.1.2 アップデートのお知らせ — アイテムレベル、上位外見、鎮圧列車の貢献度報酬',
      summary: '武器商の装備に等級内レベル（1〜50）が付き、Lv26以上の装備は新しい「上位外見」になります。鎮圧列車の報酬は貢献度に応じて分配されます。iPhoneには1.1.1の内容（ショップ決済・アカウント連携など）もあわせて入ります。',
      sections: [
        {
          title: '新しい内容',
          items: [
            '武器商のアイテムレベルが「等級内レベル」（1〜50）に変わります。等級が初めて解放されるとLv1前後で出て、次の等級が解放されるころにLv40〜50になります。能力値の計算は以前と同じなので、強さは変わりません。',
            '所持中の装備は、レベルの数字・能力値・外見すべてそのままです。',
            'アイテムLv26以上の装備は、等級ごとに部位別5種の「上位外見」になります（外見図鑑594枠）。イラストは準備ができしだいアップデートで差し替えます。',
            '鎮圧列車の撃破報酬が、貢献度（自分のダメージ ÷ ライン全体のダメージ）に応じて50%〜200%で分配されます。平均どおり攻撃していれば今までと同じです。',
            'PVPの今週の順位で自分の行が強調され、10位圏外なら10位の下に自分のすぐ上・自分・すぐ下が表示されます。',
          ],
        },
        {
          title: '改善点',
          items: [
            'スキルツリーの効果説明が切れなくなり、［強化］・［即時完了］の下に所持 / 必要な通貨が表示されます。',
            'ショップで商品を購入すると［購入完了］ウィンドウが表示されます。',
            '自動取引の「保管する等級」には、解放済みの等級だけが表示されます。',
            'シグネチャーセット21〜30番を発見したときに、別のプロフィール画像が表示されていた問題を修正しました。',
          ],
        },
        {
          title: '1.1.1の変更点（あわせて適用）',
          items: [
            'ショップでクレジットのチャージ・バトルスキップチケット・広告の永久削除を購入できます。広告削除は［購入の復元］で再び適用されます。',
            'プロフィール › アカウント連携：Google・Appleアカウントを連携すると進行がサーバーに自動でバックアップされ、新しい端末で同じアカウントから読み込めます。',
            'ストアで返金された決済は、付与した商品を回収します。',
            '複数回通報されたチャットは、運営の確認前でも自動で非表示になります。',
            'オフライン報酬は最大3時間までたまります（以前は8時間）。',
            'バトル画面のスキルツリーのバフは、タイトルをタップして折りたたみ・展開できます。',
          ],
        },
      ],
    },
    zh: {
      title: '1.1.2 更新公告 — 物品等级、高阶外观、镇压列车贡献度奖励',
      summary: '军火商装备新增等级内等级（1~50），Lv26 以上的装备会换上新的「高阶外观」。镇压列车奖励按贡献度分配。iPhone 版同时包含 1.1.1 的内容（商店付款 · 账号绑定等）。',
      sections: [
        {
          title: '新增',
          items: [
            '军火商物品等级改为「等级内等级」（1~50）。等级刚解锁时约为 Lv1，到下一等级解锁时约为 Lv40~50。属性计算与之前相同，强度不变。',
            '已拥有的装备，等级数字、属性与外观全部保持不变。',
            '物品 Lv26 以上的装备，每个等级每个部位有 5 种「高阶外观」（外观图鉴 594 格）。美术资源准备好后会随更新替换。',
            '镇压列车击破奖励按贡献度（本人伤害 ÷ 线路总伤害）在 50%~200% 之间分配。若伤害达到平均水平，与之前相同。',
            'PVP 本周排名中会突出显示本人那一行；若在前 10 名之外，会在第 10 名下方显示本人上一名 · 本人 · 下一名。',
          ],
        },
        {
          title: '优化',
          items: [
            '技能树效果说明不再被截断，［强化］·［立即完成］下方显示拥有 / 所需货币。',
            '在商店购买商品后会弹出［购买完成］窗口。',
            '自动抽取的「保留等级」只显示已解锁的等级。',
            '修复了发现签名套装 21~30 号时显示错误头像的问题。',
          ],
        },
        {
          title: '1.1.1 的变更（一并适用）',
          items: [
            '商店可购买点券、战斗跳过券与永久移除广告。移除广告可通过［恢复购买］重新生效。',
            '资料 › 账号绑定：绑定 Google · Apple 账号后，进度会自动备份到服务器，可在新设备上用同一账号读取。',
            '在商店被退款的付款，会收回已发放的商品。',
            '被多次举报的聊天消息，在运营确认前会自动隐藏。',
            '离线奖励最多累积 3 小时（之前为 8 小时）。',
            '战斗界面的技能树增益，可点击标题折叠或展开。',
          ],
        },
      ],
    },
  },
  {
    id: '2026-11-24-policy',
    date: '2026-11-24',
    type: 'notice',
    ko: {
      title: '개인정보처리방침 개정 · 이용약관 게시 안내 (2026년 12월 1일 시행)',
      summary: '앱 안 결제, 광고, Google · Apple 계정 연동이 추가되어 개인정보처리방침을 고치고 이용약관을 새로 게시했습니다. 12월 1일부터 적용됩니다.',
      sections: [
        {
          title: '주요 내용',
          items: [
            '결제 확인과 환불 처리를 위해 처리하는 정보를 추가했습니다.',
            '보상형 광고 표시를 위해 광고 SDK가 처리하는 정보를 추가했습니다.',
            '계정 연동과 세이브 백업에 쓰는 정보를 추가했습니다.',
            '이용약관, 환불 안내, 사업자 정보를 새로 게시했습니다.',
          ],
        },
      ],
    },
    en: {
      title: 'Privacy policy update and new Terms of Service (in effect December 1, 2026)',
      summary: 'With in-app purchases, ads and Google / Apple account linking, we updated the privacy policy and published Terms of Service. They apply from December 1.',
      sections: [
        {
          title: 'Main points',
          items: [
            'Added the information we process to confirm payments and handle refunds.',
            'Added the information the ad SDK processes to show rewarded ads.',
            'Added the information used for account linking and save backups.',
            'Published the Terms of Service, refund guide and business information.',
          ],
        },
      ],
    },
    ja: {
      title: 'プライバシーポリシー改定・利用規約掲載のお知らせ（2026年12月1日施行）',
      summary: 'アプリ内決済、広告、Google・Appleアカウント連携の追加に伴い、プライバシーポリシーを改定し、利用規約を新たに掲載しました。12月1日から適用されます。',
      sections: [
        {
          title: '主な内容',
          items: [
            '決済の確認と返金処理のために取り扱う情報を追加しました。',
            'リワード広告の表示のために広告SDKが取り扱う情報を追加しました。',
            'アカウント連携とセーブのバックアップに使う情報を追加しました。',
            '利用規約、返金案内、事業者情報を新たに掲載しました。',
          ],
        },
      ],
    },
    zh: {
      title: '隐私政策修订 · 用户协议发布公告（2026 年 12 月 1 日起施行）',
      summary: '因新增应用内付款、广告及 Google · Apple 账号绑定，我们修订了隐私政策并新发布了用户协议，自 12 月 1 日起适用。',
      sections: [
        {
          title: '主要内容',
          items: [
            '新增为确认付款与处理退款而处理的信息。',
            '新增广告 SDK 为展示激励广告而处理的信息。',
            '新增账号绑定与存档备份所用的信息。',
            '新发布用户协议、退款说明与经营者信息。',
          ],
        },
      ],
    },
    links: [
      { href: 'privacy/', label: { ko: '개인정보처리방침', en: 'Privacy policy', ja: 'プライバシーポリシー（英語）', zh: '隐私政策（英文）' } },
      { href: 'terms/', label: { ko: '이용약관', en: 'Terms (Korean)', ja: '利用規約（韓国語）', zh: '用户协议（韩文）' } },
      { href: 'support/', label: { ko: '고객 지원', en: 'Support (Korean)', ja: 'サポート（韓国語）', zh: '客服（韩文）' } },
    ],
  },
  {
    id: '2026-11-24-ios-launch',
    date: '2026-11-24',
    type: 'notice',
    status: 'live',
    version: '1.1.0',
    platforms: ['iOS'],
    ko: {
      title: 'iOS App Store 출시',
      summary: 'Neon Station이 App Store 심사를 통과해 아이폰·아이패드에 출시되었습니다. App Store에서 「Neon Station」을 검색하세요.',
      sections: [
        {
          title: '안내',
          items: [
            '중국 본토를 뺀 국가·지역의 App Store에서 받을 수 있습니다.',
            '한국어 · English · 中文(简体)을 지원합니다. 프로필 › 설정 › 언어에서 바꿉니다. 日本語는 1.1.4부터 들어갑니다.',
            '처음 시작하면 계정이 자동으로 만들어집니다. 기기를 바꿀 계획이라면 프로필 › 계정 연동을 하거나 1.1.4의 복구 코드를 만들어 두세요.',
          ],
        },
      ],
    },
    en: {
      title: 'Out now on the iOS App Store',
      summary: 'Neon Station passed App Store review and is out on iPhone and iPad. Search 「Neon Station」 on the App Store.',
      sections: [
        {
          title: 'Good to know',
          items: [
            'Available on the App Store in every country and region except mainland China.',
            'Supports 한국어, English and 中文(简体). Change it in Profile › Settings › Language. 日本語 arrives in 1.1.4.',
            'An account is made automatically when you first start. If you plan to change devices, use Profile › Account Link or make a recovery code in 1.1.4.',
          ],
        },
      ],
    },
    ja: {
      title: 'iOS App Storeでリリース',
      summary: 'Neon StationがApp Storeの審査を通過し、iPhone・iPadでリリースされました。App Storeで「Neon Station」を検索してください。',
      sections: [
        {
          title: 'ご案内',
          items: [
            '中国本土を除く国・地域のApp Storeでダウンロードできます。',
            '한국어・English・中文(简体)に対応しています。プロフィール › 設定 › 言語で変更できます。日本語は1.1.4から対応します。',
            '初めて起動するとアカウントが自動で作成されます。端末を変える予定がある場合は、プロフィール › アカウント連携を行うか、1.1.4の復旧コードを作成しておいてください。',
          ],
        },
      ],
    },
    zh: {
      title: 'iOS App Store 正式上线',
      summary: 'Neon Station 已通过 App Store 审核，在 iPhone · iPad 上线。请在 App Store 搜索「Neon Station」。',
      sections: [
        {
          title: '说明',
          items: [
            '除中国大陆外的国家和地区均可在 App Store 下载。',
            '支持 한국어 · English · 中文(简体)，可在 资料 › 设置 › 语言 中切换。日本語将于 1.1.4 加入。',
            '首次启动会自动创建账号。若计划更换设备，请在 资料 › 账号绑定 中绑定账号，或在 1.1.4 中生成恢复码。',
          ],
        },
      ],
    },
    links: [{ href: 'guide.html', label: { ko: '시작 가이드', en: 'Starter guide', ja: 'スタートガイド', zh: '入门指南' } }],
  },
  {
    id: '2026-11-24-v1-1-0',
    date: '2026-11-24',
    type: 'update',
    status: 'live',
    version: '1.1.0',
    platforms: ['Android', 'iOS'],
    ko: {
      title: '1.1.0 업데이트 — 무기상 Lv50, 쿠폰, 싱크로 프레임 외형, 세트 30종',
      summary: '무기상이 Lv50까지 오르고, 쿠폰 입력과 새 외형·세트가 생겼습니다. 전투 탭 배경음악이 4곡으로 늘었습니다.',
      sections: [
        {
          title: '새로운 것',
          items: [
            '무기상 최대 레벨이 Lv50이 되었습니다. Lv31부터는 새 등급 없이 퀀텀 · 보이드 · 오리진 확률이 오릅니다.',
            '각 무기상 레벨에서 나올 수 있는 최고 등급은 그 레벨에서 열린 등급까지입니다. 예) Lv7은 블랙마켓까지, Lv12는 프로토타입까지.',
            '모든 등급에 「싱크로 프레임」 외형이 부위마다 1종씩 생겼습니다.',
            '시그니처 세트 10종(21~30번)이 추가되어 30종이 되었습니다.',
            '프로필 › [쿠폰 입력]: 공식 채널에서 받은 쿠폰 코드를 넣으면 보상을 받습니다(계정당 한 번).',
            '스킬트리에 「에드온」 계열이 생겼습니다. 무기상 업그레이드 시간, 임플란트 크롬, 펫 식량, 도색·도면 조각 비용을 줄입니다.',
            '앱을 켜 두고 10분 사냥하면 [전투] › [접속 보상]에서 그동안 번 코인의 3배를 받을 수 있습니다(하루 12번).',
            '근거리 무기는 받는 피해 −8%, PVP에서는 추가 보정이 붙습니다.',
            '전투 탭 배경음악이 4곡이 되었고, [전투]로 돌아올 때마다 무작위로 바뀝니다.',
          ],
        },
        {
          title: '바뀐 것',
          items: [
            '도색 비용이 코인에서 도면 조각으로 바뀌었습니다. 파레트 빌더 › 도감 탭에 크롬·식량 → 도면 조각 교환소가 생겼습니다.',
            '라인 기관사가 가입 방식을 「자유 가입」 또는 「승인형」으로 고를 수 있습니다.',
            '채팅에 금칙어 필터와 이용 규칙 동의가 생겼습니다.',
            '프로필에 [게임 가이드] 버튼이 생겼습니다.',
          ],
        },
      ],
    },
    en: {
      title: '1.1.0 update — Arms Dealer Lv50, coupons, Synchro Frame looks, 30 sets',
      summary: 'The Arms Dealer now goes to Lv50, and coupons, new looks and new sets arrived. The Battle tab now has 4 music tracks.',
      sections: [
        {
          title: 'New',
          items: [
            'The Arms Dealer max level is now Lv50. From Lv31 there are no new grades, but Quantum, Void and Origin odds go up.',
            'The highest grade each Arms Dealer level can give is the grade unlocked at that level. Example: Lv7 up to Black Market, Lv12 up to Prototype.',
            'Every grade gets one Synchro Frame look per slot.',
            '10 Signature Sets (21–30) bring the total to 30.',
            'Profile › [Enter Coupon]: enter a coupon code from our official channels to get a reward (once per account).',
            'The Skill Tree gets an Add-ons branch. It cuts Arms Dealer upgrade time, implant Chrome, pet Food, and paint and Blueprint shard costs.',
            'Hunt for 10 minutes with the app open to claim 3× the Coins you earned at Battle › [Playtime reward] (12 times a day).',
            'Melee weapons take −8% damage, with an extra adjustment in PVP.',
            'The Battle tab now has 4 tracks and picks one at random each time you return to Battle.',
          ],
        },
        {
          title: 'Changed',
          items: [
            'Painting now costs Blueprint shards instead of Coins. Palette Builder › Collection has an exchange for Chrome and Food → Blueprint shards.',
            'Line Drivers can set joining to open or approval.',
            'Chat now has a word filter and asks you to agree to the rules.',
            'Profile has a [Game guide] button.',
          ],
        },
      ],
    },
    ja: {
      title: '1.1.0 アップデート — 武器商Lv50、クーポン、シンクロフレーム外見、セット30種',
      summary: '武器商がLv50まで上がるようになり、クーポン入力と新しい外見・セットが追加されました。バトルタブのBGMが4曲になりました。',
      sections: [
        {
          title: '新しい内容',
          items: [
            '武器商の最大レベルがLv50になりました。Lv31からは新しい等級はなく、クォンタム・ヴォイド・オリジンの確率が上がります。',
            '各武器商レベルで出る最高等級は、そのレベルで解放された等級までです。例）Lv7はブラックマーケットまで、Lv12はプロトタイプまで。',
            'すべての等級に「シンクロフレーム」外見が部位ごとに1種ずつ追加されました。',
            'シグネチャーセット10種（21〜30番）が追加され、30種になりました。',
            'プロフィール › ［クーポン入力］：公式チャンネルで配布したクーポンコードを入力すると報酬を受け取れます（アカウントごとに1回）。',
            'スキルツリーに「アドオン」系統が追加されました。武器商のアップグレード時間、インプラントのクローム、ペットの食料、塗装・設計図の欠片の費用を減らします。',
            'アプリを開いたまま10分狩りをすると、バトル › ［プレイ報酬］でその間に稼いだコインの3倍を受け取れます（1日12回）。',
            '近接武器は受けるダメージ−8%、PVPでは追加の補正が付きます。',
            'バトルタブのBGMが4曲になり、バトルに戻るたびにランダムで変わります。',
          ],
        },
        {
          title: '変更点',
          items: [
            '塗装の費用がコインから設計図の欠片に変わりました。パレットビルダー › 図鑑タブに、クローム・食料 → 設計図の欠片の交換所ができました。',
            'ラインの機関士が加入方式を「自由加入」または「承認制」から選べます。',
            'チャットに禁止語フィルターと利用ルールへの同意が追加されました。',
            'プロフィールに［ゲームガイド］ボタンが追加されました。',
          ],
        },
      ],
    },
    zh: {
      title: '1.1.0 更新 — 军火商 Lv50、兑换码、同步框架外观、套装 30 种',
      summary: '军火商可升到 Lv50，新增兑换码输入与新外观 · 套装。战斗页签背景音乐增至 4 首。',
      sections: [
        {
          title: '新增',
          items: [
            '军火商最高等级提升为 Lv50。从 Lv31 起不再开放新等级，但量子 · 虚空 · 起源的概率会提高。',
            '各军火商等级可出现的最高等级，以该等级已解锁的等级为限。例：Lv7 最高到黑市，Lv12 最高到原型。',
            '所有等级的每个部位各新增 1 种「同步框架」外观。',
            '新增 10 种签名套装（21~30 号），共 30 种。',
            '资料 › ［输入兑换码］：输入官方渠道发放的兑换码即可领取奖励（每个账号一次）。',
            '技能树新增「扩展」分支，可减少军火商升级时间、植入体铬、宠物食粮以及涂装 · 图纸碎片费用。',
            '保持应用开启狩猎 10 分钟，可在 战斗 › ［在线奖励］ 领取期间所得金币的 3 倍（每天 12 次）。',
            '近战武器受到的伤害 −8%，PVP 中另有额外修正。',
            '战斗页签背景音乐增至 4 首，每次回到战斗时随机切换。',
          ],
        },
        {
          title: '变更',
          items: [
            '涂装费用由金币改为图纸碎片。调色板工坊 › 图鉴页签新增 铬 · 食粮 → 图纸碎片 兑换处。',
            '线路司机可将加入方式设为「自由加入」或「审批制」。',
            '聊天新增屏蔽词过滤与使用规则同意。',
            '资料新增［游戏指南］按钮。',
          ],
        },
      ],
    },
  },
  {
    id: '2026-11-24-tester',
    date: '2026-11-24',
    type: 'event',
    status: 'ended',
    platforms: ['Android'],
    ko: {
      title: 'Google Play 비공개 테스트 테스터 모집 (종료)',
      summary: 'Google Play 정식 출시 준비로 비공개 테스트 테스터 모집을 마쳤습니다. 함께해 주신 테스터 여러분께 감사드립니다.',
      sections: [
        {
          title: '안내',
          items: [
            '안드로이드는 Google Play 정식 출시 심사 중입니다. 출시되면 이 공지 목록과 인스타그램에 알려 드립니다.',
            '테스트 중 의견은 계속 인스타그램 DM이나 고객 지원 메일로 받습니다.',
          ],
        },
      ],
    },
    en: {
      title: 'Google Play closed test recruiting (closed)',
      summary: 'Tester recruiting for the closed test has ended as we prepare the full Google Play release. Thank you to everyone who tested with us.',
      sections: [
        {
          title: 'Good to know',
          items: [
            'The Android version is in Google Play review for the full release. We will post here and on Instagram when it is out.',
            'You can still send feedback by Instagram DM or the support email.',
          ],
        },
      ],
    },
    ja: {
      title: 'Google Play クローズドテストのテスター募集（終了）',
      summary: 'Google Playでの正式リリース準備のため、クローズドテストのテスター募集を終了しました。ご参加いただいたテスターの皆さま、ありがとうございました。',
      sections: [
        {
          title: 'ご案内',
          items: [
            'Android版はGoogle Playで正式リリースの審査中です。リリースされたら、このお知らせとInstagramでお伝えします。',
            'ご意見は引き続きInstagramのDMまたはサポートメールで受け付けます。',
          ],
        },
      ],
    },
    zh: {
      title: 'Google Play 封闭测试招募（已结束）',
      summary: '为准备 Google Play 正式上线，封闭测试招募已结束。感谢各位测试员的参与。',
      sections: [
        {
          title: '说明',
          items: [
            'Android 版正在接受 Google Play 正式上线审核。上线后会在本公告列表与 Instagram 通知。',
            '意见反馈仍可通过 Instagram 私信或客服邮箱提交。',
          ],
        },
      ],
    },
    links: [
      { href: 'https://www.instagram.com/_neon_station/', label: { ko: '인스타그램 @_neon_station', en: 'Instagram @_neon_station', ja: 'Instagram @_neon_station', zh: 'Instagram @_neon_station' } },
    ],
  },
  {
    id: '2026-11-23-v1-0-9',
    date: '2026-11-23',
    type: 'update',
    status: 'live',
    version: '1.0.9',
    ko: {
      title: '1.0.9 업데이트 — 스킬트리와 칩, 온라인 탭, 영어 · 중국어',
      summary: '새 재화 칩으로 키우는 스킬트리와 칩을 주는 특수 의뢰가 생겼습니다. 하단 [PVP] 탭은 PVP와 라인을 묶은 [온라인] 탭이 되었습니다.',
      sections: [
        {
          title: '새로운 것',
          items: [
            '스킬트리(에드온, 계정 Lv10): 칩으로 스펙 · 의뢰 · PVP 스킬을 올립니다. 아래층으로 갈수록 강화 시간이 길어집니다.',
            '특수 의뢰 「중계 서버 해킹」(계정 Lv10): 칩을 얻는 다섯 번째 의뢰입니다.',
            '퀀텀 · 보이드 · 오리진 외형이 부위마다 3종으로 늘었습니다.',
            '하단 [온라인] 탭: 왼쪽은 PVP, 오른쪽은 라인입니다(라인은 에드온에서 옮겨 옴).',
            '채팅 결투 · PVP에서 상대의 펫도 함께 싸웁니다.',
            '프로필 › 설정 › 언어에서 한국어 · English · 中文(简体)를 고를 수 있습니다.',
            '랭킹 시상대(1~3위)에 프로필 이미지 · 칭호 · 장착 모습이 보입니다.',
          ],
        },
      ],
    },
    en: {
      title: '1.0.9 update — Skill Tree and Chips, Online tab, English and Chinese',
      summary: 'A Skill Tree powered by the new Chips currency arrived, along with a Special Job that pays Chips. The bottom [PVP] tab became [Online], which holds PVP and Lines.',
      sections: [
        {
          title: 'New',
          items: [
            'Skill Tree (Add-ons, account Lv10): spend Chips on stat, job and PVP skills. Deeper tiers take longer to upgrade.',
            'Special Job 「Relay Server Hack」 (account Lv10): the fifth job, and it pays Chips.',
            'Quantum, Void and Origin now have three looks per slot.',
            'The bottom [Online] tab: PVP on the left, Lines on the right (Lines moved from Add-ons).',
            'In chat duels and PVP, your opponent\'s pets fight too.',
            'Choose 한국어, English or 中文(简体) in Profile › Settings › Language.',
            'The ranking podium (1st–3rd) shows profile image, title and equipped look.',
          ],
        },
      ],
    },
  },
  {
    id: '2026-11-22-v1-0-8',
    date: '2026-11-22',
    type: 'update',
    status: 'live',
    version: '1.0.8',
    ko: {
      title: '1.0.8 업데이트 — 새 장비 등급 퀀텀 · 보이드 · 오리진',
      summary: '싱귤래리티 위에 세 등급이 더해져 장비가 11등급이 되었습니다. 앱을 켜 둔 시간만큼 받는 접속 보상이 생겼습니다.',
      sections: [
        {
          title: '새로운 것',
          items: [
            '장비 등급 9~11: 퀀텀(무기상 Lv21) · 보이드(Lv25) · 오리진(Lv29).',
            '접속 시간 보상: 앱을 켜 둔 시간을 하루 단위로 모아 보상을 받습니다.',
            '업데이트 선물로 모든 러너에게 50크레딧을 드렸습니다.',
            '임플란트 · 펫 일괄 판매가 생겼습니다.',
            '특수 의뢰가 3웨이브 전투로 바뀌었습니다.',
            '채팅이 실시간으로 이어지도록 고쳤습니다.',
          ],
        },
      ],
    },
  },
  {
    id: '2026-11-22-site',
    date: '2026-11-22',
    type: 'notice',
    ko: {
      title: '공식 사이트 · 인스타그램 개설',
      summary: '공식 사이트 neon-station.com과 인스타그램 @_neon_station을 열었습니다. 업데이트 소식과 쿠폰은 이 두 곳에 올립니다.',
      sections: [],
    },
    en: {
      title: 'Official site and Instagram are open',
      summary: 'We opened the official site neon-station.com and Instagram @_neon_station. Update news and coupons are posted in both places.',
      sections: [],
    },
    ja: {
      title: '公式サイト・Instagramを開設',
      summary: '公式サイト neon-station.com とInstagram @_neon_station を開設しました。アップデート情報とクーポンはこの2か所でお知らせします。',
      sections: [],
    },
    zh: {
      title: '官方网站 · Instagram 开通',
      summary: '官方网站 neon-station.com 与 Instagram @_neon_station 已开通。更新消息与兑换码会在这两处发布。',
      sections: [],
    },
    links: [
      { href: 'https://www.instagram.com/_neon_station/', label: { ko: '인스타그램 @_neon_station', en: 'Instagram @_neon_station', ja: 'Instagram @_neon_station', zh: 'Instagram @_neon_station' } },
    ],
  },
  {
    id: '2026-11-21-v1-0-7',
    date: '2026-11-21',
    type: 'update',
    status: 'live',
    version: '1.0.6 · 1.0.7',
    ko: {
      title: '1.0.6 · 1.0.7 업데이트 — 길드 「라인」과 진압열차',
      summary: '길드 「라인」과 매주 내려오는 길드 보스 진압열차가 생겼습니다. 시그니처 세트가 20종으로 늘었습니다.',
      sections: [
        {
          title: '새로운 것',
          items: [
            '라인(길드, 계정 Lv10): 노선을 만들거나 탑승해 승무원끼리 출석 · 승차권 납부 · 토큰 상점 · 노선 무전을 함께합니다.',
            '진압열차: 매주 월요일 오전 9시에 내려옵니다. 라인 승무원이 함께 피해를 쌓아 멈춥니다.',
            '시그니처 세트 20종, 세트 전용 프로필과 프로필 테두리, 칭호 112종.',
            '장비 [잠금]: 잠근 장비는 판매 · 일괄 판매에서 보호됩니다.',
            '무기상 거래 때 제련 연출이 나옵니다. 배경음악 3곡(라인 · 진압열차 · 피트)을 더했습니다.',
          ],
        },
      ],
    },
  },
];
