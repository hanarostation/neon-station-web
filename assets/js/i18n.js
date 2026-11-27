/* UI strings used by the site scripts. Page text itself is translated in the HTML of /en/ /ja/ /zh/. */
(() => {
  const UI = {
    ko: {
      grades: ['스크랩', '스트리트', '커스텀', '밀스펙', '블랙마켓', '프로토타입', '레전드', '싱귤래리티', '퀀텀', '보이드', '오리진'],
      race_resistance: '레지스탕스', race_drifter: '부랑자', race_citizen: '시민',
      slot_head: '머리', slot_body: '몸통', slot_legs: '하의', slot_feet: '신발', slot_weapon: '무기',
      look: '외형', none: '없음', unequip: '벗기',
      a_grade: '{s} 등급', a_next_look: '{s} 다른 외형', a_unequip: '{s} 벗기', a_grade_n: '{s} {n}등급 {g}',
      set_no: '세트 {n}', a_set: '세트 {n} {name} 입어 보기. 효과: {eff}',
      cut: '컷 {i} / {n}', pause: '컷신 일시정지', play: '컷신 재생',
      type_update: '업데이트', type_notice: '안내', type_event: '이벤트', type_maint: '점검',
      status_live: '적용됨', status_pending: '심사 · 배포 중', status_open: '모집 중', status_ended: '종료',
      all: '전체', copy_link: '이 공지 주소 복사', copied: '주소를 복사했습니다',
    },
    en: {
      grades: ['Scrap', 'Street', 'Custom', 'Mil-Spec', 'Black Market', 'Prototype', 'Legend', 'Singularity', 'Quantum', 'Void', 'Origin'],
      race_resistance: 'Resistance', race_drifter: 'Drifter', race_citizen: 'Citizen',
      slot_head: 'Head', slot_body: 'Body', slot_legs: 'Legs', slot_feet: 'Feet', slot_weapon: 'Weapon',
      look: 'Look', none: 'None', unequip: 'Off',
      a_grade: '{s} grade', a_next_look: 'Next {s} look', a_unequip: 'Take off {s}', a_grade_n: '{s} grade {n} {g}',
      set_no: 'Set {n}', a_set: 'Try on set {n} {name}. Effect: {eff}',
      cut: 'Cut {i} / {n}', pause: 'Pause cutscene', play: 'Play cutscene',
      type_update: 'Update', type_notice: 'Notice', type_event: 'Event', type_maint: 'Maintenance',
      status_live: 'Live', status_pending: 'In review', status_open: 'Open', status_ended: 'Closed',
      all: 'All', copy_link: 'Copy link to this notice', copied: 'Link copied',
    },
    ja: {
      grades: ['スクラップ', 'ストリート', 'カスタム', 'ミルスペック', 'ブラックマーケット', 'プロトタイプ', 'レジェンド', 'シンギュラリティ', 'クォンタム', 'ヴォイド', 'オリジン'],
      race_resistance: 'レジスタンス', race_drifter: '浮浪者', race_citizen: '市民',
      slot_head: '頭', slot_body: '胴', slot_legs: '脚', slot_feet: '足', slot_weapon: '武器',
      look: '外見', none: 'なし', unequip: '外す',
      a_grade: '{s}の等級', a_next_look: '{s}の別の外見', a_unequip: '{s}を外す', a_grade_n: '{s} {n}等級 {g}',
      set_no: 'セット {n}', a_set: 'セット{n}「{name}」を試着。効果: {eff}',
      cut: 'カット {i} / {n}', pause: 'カットシーンを一時停止', play: 'カットシーンを再生',
      type_update: 'アップデート', type_notice: 'お知らせ', type_event: 'イベント', type_maint: 'メンテナンス',
      status_live: '適用済み', status_pending: '審査・配信中', status_open: '募集中', status_ended: '終了',
      all: 'すべて', copy_link: 'このお知らせのURLをコピー', copied: 'URLをコピーしました',
    },
    zh: {
      grades: ['废铁', '街头', '定制', '军规', '黑市', '原型', '传奇', '奇点', '量子', '虚空', '起源'],
      race_resistance: '抵抗军', race_drifter: '流浪者', race_citizen: '市民',
      slot_head: '头部', slot_body: '身体', slot_legs: '下装', slot_feet: '鞋子', slot_weapon: '武器',
      look: '外观', none: '无', unequip: '卸下',
      a_grade: '{s}等级', a_next_look: '{s}的其他外观', a_unequip: '卸下{s}', a_grade_n: '{s} {n}级 {g}',
      set_no: '套装 {n}', a_set: '试穿套装 {n}「{name}」。效果：{eff}',
      cut: '镜头 {i} / {n}', pause: '暂停过场动画', play: '播放过场动画',
      type_update: '更新', type_notice: '公告', type_event: '活动', type_maint: '维护',
      status_live: '已上线', status_pending: '审核 · 发布中', status_open: '招募中', status_ended: '已结束',
      all: '全部', copy_link: '复制本公告链接', copied: '已复制链接',
    },
  };
  const lang = (document.documentElement.lang || 'ko').slice(0, 2);
  window.NS_LANG = UI[lang] ? lang : 'ko';
  window.T = (k, vars) => {
    let s = k in UI[window.NS_LANG] ? UI[window.NS_LANG][k] : UI.ko[k] ?? k;
    if (vars && typeof s === 'string') for (const v in vars) s = s.split('{' + v + '}').join(vars[v]);
    return s;
  };
  // Pick the current language from a { ko, en, ja, zh } object (plain strings pass through).
  window.NS_PICK = (o) => (o == null ? '' : typeof o === 'string' ? o : o[window.NS_LANG] ?? o.ko ?? '');
})();
