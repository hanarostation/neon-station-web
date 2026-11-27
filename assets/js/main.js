(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* route map: highlight current stop */
  const links = $$('.route a[href^="#"]');
  const stops = links.map((a) => $(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && stops.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.setAttribute('aria-current', a.getAttribute('href') === '#' + e.target.id ? 'true' : 'false'));
        const cur = links.find((a) => a.getAttribute('aria-current') === 'true');
        const route = $('.route');
        if (cur && route) route.scrollTo({ left: cur.offsetLeft - route.clientWidth / 2 + cur.offsetWidth / 2, behavior: reduce ? 'auto' : 'smooth' });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    stops.forEach((s) => io.observe(s));
  }

  /* intro cutscene */
  const screen = $('.screen');
  if (screen) {
    const frames = $$('.cut-frame', screen);
    const pips = $('.pips');
    const count = $('.screen-ctl .count');
    const playBtn = $('[data-cut="play"]');
    frames.forEach(() => pips.appendChild(document.createElement('span')));
    let i = 0, timer = null, playing = !reduce;
    const show = (n) => {
      i = (n + frames.length) % frames.length;
      frames.forEach((f, k) => {
        f.classList.toggle('on', k === i);
        f.setAttribute('aria-hidden', k === i ? 'false' : 'true');
        const bg = $('img.bg', f);
        if (k === i && bg) { bg.style.animation = 'none'; void bg.offsetWidth; bg.style.animation = ''; }
        const eye = $('.eye', f);
        if (k === i && eye) { eye.style.animation = 'none'; void eye.offsetWidth; eye.style.animation = ''; }
      });
      $$('span', pips).forEach((p, k) => p.classList.toggle('on', k === i));
      count.textContent = T('cut', { i: i + 1, n: frames.length });
    };
    const tick = () => { clearTimeout(timer); if (playing) timer = setTimeout(() => { show(i + 1); tick(); }, +frames[i].dataset.ms || 5000); };
    const setPlay = (p) => { playing = p; playBtn.textContent = p ? '❚❚' : '▶'; playBtn.setAttribute('aria-label', p ? T('pause') : T('play')); tick(); };
    $('[data-cut="prev"]').addEventListener('click', () => { show(i - 1); tick(); });
    $('[data-cut="next"]').addEventListener('click', () => { show(i + 1); tick(); });
    playBtn.addEventListener('click', () => setPlay(!playing));
    document.addEventListener('visibilitychange', () => { if (document.hidden) clearTimeout(timer); else tick(); });
    show(0); setPlay(playing);
  }

  /* merchant level portraits */
  $$('.merchant').forEach((m) => {
    const big = $('.portrait', m);
    $$('.levels button', m).forEach((b) => b.addEventListener('click', () => {
      $$('.levels button', m).forEach((x) => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
      big.src = $('img', b).src; big.alt = b.getAttribute('aria-label');
    }));
  });

  /* art factory tabs */
  const tabs = $$('.af-bar [role="tab"]');
  tabs.forEach((t) => t.addEventListener('click', () => {
    tabs.forEach((x) => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; $('#' + x.getAttribute('aria-controls')).hidden = !on; });
  }));
  tabs.forEach((t, k) => t.addEventListener('keydown', (e) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return; const n = tabs[(k + d + tabs.length) % tabs.length]; n.focus(); n.click();
  }));

  /* look lab — same layer rules as the game:
     base body → legs → feet → body → head → weapon. Accent mask = grade colour, skin mask = race skin colour. */
  const GEAR = window.NS_GEAR, SETS = window.NS_SETS || [], LOOKS = window.NS_LOOKS || {};
  if (!GEAR) return;
  const GRADES = [
    ['#8E9CA0'], ['#D8E4E2'], ['#3DDC84'], ['#3CA0FF'], ['#A66BFF'], ['#FF8A1F'],
    ['#FF3B4E'], ['#F5E50A'], ['#4DFFE5'], ['#7B2DFF'], ['#FFFFFF'],
  ].map(([c], i) => [T('grades')[i], c]);
  const RACES = { resistance: { name: T('race_resistance') }, drifter: { name: T('race_drifter'), skin: '#D1A370' }, citizen: { name: T('race_citizen') } };
  const SLOTS = ['head', 'body', 'legs', 'feet', 'weapon'].map((k) => [k, T('slot_' + k)]);
  const ORDER = ['legs', 'feet', 'body', 'head', 'weapon'];
  const ROOT = (window.NS_LANG && window.NS_LANG !== 'ko' ? '../' : '') + 'assets/img/';
  const cache = {};
  const load = (src) => cache[src] || (cache[src] = new Promise((res) => { const im = new Image(); im.onload = () => res(im); im.onerror = () => res(null); im.src = src; }));
  const tint = (im, color) => { const c = document.createElement('canvas'); c.width = im.width; c.height = im.height; const x = c.getContext('2d'); x.drawImage(im, 0, 0); x.globalCompositeOperation = 'source-in'; x.fillStyle = color; x.fillRect(0, 0, c.width, c.height); return c; };
  const parse = (id) => { const m = /^(head|body|legs|feet|melee|ranged)_(\d{1,2})([a-z]?)$/.exec(id || ''); return m && { kind: m[1], grade: +m[2], v: m[3] }; };
  const hasSkin = (p) => ((GEAR[p.kind] || {})[p.grade] || []).some(([v, s]) => v === p.v && s);

  async function compose(look, race, canvas) {
    const off = document.createElement('canvas'); off.width = 24; off.height = 24;
    const x = off.getContext('2d');
    const base = await load(`${ROOT}base/${race}_aim.png`);
    if (base) x.drawImage(base, 0, 0);
    const skin = RACES[race].skin;
    for (const slot of ORDER) {
      const p = parse(look[slot]); if (!p) continue;
      const pose = ['body', 'melee', 'ranged'].includes(p.kind) ? '_aim' : '';
      const path = `${ROOT}gear/${p.kind}_${p.grade}${p.v}${pose}`;
      const [im, acc, sk] = await Promise.all([load(path + '.png'), load(path + '_accent.png'), skin && hasSkin(p) ? load(path + '_skin.png') : null]);
      if (im) x.drawImage(im, 0, 0);
      if (sk) x.drawImage(tint(sk, skin), 0, 0);
      if (acc) x.drawImage(tint(acc, GRADES[p.grade - 1][1]), 0, 0);
    }
    const c = canvas.getContext('2d');
    c.imageSmoothingEnabled = false;
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(off, 0, 0, canvas.width, canvas.height);
  }

  const lookName = (id) => {
    const p = parse(id); if (!p) return T('none');
    const named = LOOKS[id] && NS_PICK(LOOKS[id].name);
    const list = GEAR[p.kind][p.grade] || [];
    const idx = list.findIndex(([v]) => v === p.v);
    return `${GRADES[p.grade - 1][0]}${list.length > 1 ? ` ${T('look')} ${idx + 1}` : ''}${named ? ` · ${named}` : ''}`;
  };

  const state = { race: 'resistance', wtype: 'ranged', look: { head: 'head_11', body: 'body_11', legs: 'legs_11', feet: 'feet_11', weapon: 'ranged_11' } };
  const stageCanvas = $('#doll');
  const readout = $('#doll-readout');
  const kindOf = (slot) => (slot === 'weapon' ? state.wtype : slot);

  function render() {
    compose(state.look, state.race, stageCanvas);
    readout.innerHTML = `<b>${RACES[state.race].name}</b><br>` + SLOTS.map(([s, label]) => `${label} ${lookName(state.look[s])}`).join('<br>');
    SLOTS.forEach(([s]) => {
      const row = $(`.ctl-row[data-slot="${s}"]`); const p = parse(state.look[s]);
      $$('.grades button', row).forEach((b) => b.setAttribute('aria-pressed', String(p ? +b.dataset.g === p.grade : b.dataset.g === '0')));
      const vb = $('.var-btn', row); const list = p ? GEAR[p.kind][p.grade] : [];
      vb.disabled = !p || list.length < 2;
      vb.textContent = p ? `${T('look')} ${list.findIndex(([v]) => v === p.v) + 1}/${list.length}` : `${T('look')} -`;
    });
    $$('[data-race]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.race === state.race)));
    $$('[data-wtype]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.wtype === state.wtype)));
  }

  const ctlWrap = $('#doll-controls');
  SLOTS.forEach(([slot, label]) => {
    const row = document.createElement('div'); row.className = 'ctl-row'; row.dataset.slot = slot;
    row.innerHTML = `<span>${label}</span><div class="grades" role="group" aria-label="${T('a_grade', { s: label })}"></div><button type="button" class="var-btn" aria-label="${T('a_next_look', { s: label })}"></button>`;
    const g = $('.grades', row);
    const off = document.createElement('button'); off.type = 'button'; off.className = 'off'; off.dataset.g = '0'; off.textContent = T('unequip'); off.setAttribute('aria-label', T('a_unequip', { s: label }));
    off.addEventListener('click', () => { state.look[slot] = null; render(); });
    GRADES.forEach(([name, color], k) => {
      const b = document.createElement('button'); b.type = 'button'; b.dataset.g = k + 1; b.textContent = k + 1; b.style.setProperty('--g', color);
      b.setAttribute('aria-label', T('a_grade_n', { s: label, n: k + 1, g: name })); b.title = name;
      b.addEventListener('click', () => { state.look[slot] = `${kindOf(slot)}_${k + 1}`; render(); });
      g.appendChild(b);
    });
    g.appendChild(off);
    $('.var-btn', row).addEventListener('click', () => {
      const p = parse(state.look[slot]); if (!p) return;
      const list = GEAR[p.kind][p.grade]; const idx = list.findIndex(([v]) => v === p.v);
      state.look[slot] = `${p.kind}_${p.grade}${list[(idx + 1) % list.length][0]}`; render();
    });
    ctlWrap.appendChild(row);
  });
  $$('[data-race]').forEach((b) => b.addEventListener('click', () => { state.race = b.dataset.race; render(); renderSets(); }));
  $$('[data-wtype]').forEach((b) => b.addEventListener('click', () => {
    state.wtype = b.dataset.wtype; const p = parse(state.look.weapon);
    state.look.weapon = `${state.wtype}_${p ? p.grade : 1}`; render();
  }));
  $('#doll-random').addEventListener('click', () => {
    state.wtype = Math.random() < 0.5 ? 'melee' : 'ranged';
    SLOTS.forEach(([s]) => { const kind = kindOf(s); const gr = 1 + Math.floor(Math.random() * GRADES.length); const list = GEAR[kind][gr]; state.look[s] = `${kind}_${gr}${list[Math.floor(Math.random() * list.length)][0]}`; });
    render();
  });

  const setWrap = $('#sets');
  function lookFromSet(set) {
    const look = { head: null, body: null, legs: null, feet: null, weapon: null };
    set.looks.split('·').map((s) => s.trim()).forEach((id) => { const p = parse(id); if (!p) return; look[['melee', 'ranged'].includes(p.kind) ? 'weapon' : p.kind] = id; });
    return look;
  }
  function renderSets() {
    $$('.set', setWrap).forEach((el, k) => compose(lookFromSet(SETS[k]), state.race, $('canvas', el)));
  }
  SETS.forEach((set) => {
    const el = document.createElement('button'); el.type = 'button'; el.className = 'set';
    const sname = NS_PICK(set.name), seff = NS_PICK(set.effect);
    el.innerHTML = `<canvas width="72" height="72" class="px" aria-hidden="true"></canvas><div><span class="no">${T('set_no', { n: set.no })}</span><b>${sname}</b><span>${seff}</span></div>`;
    el.setAttribute('aria-label', T('a_set', { n: set.no, name: sname, eff: seff }));
    el.addEventListener('click', () => {
      state.look = lookFromSet(set);
      const w = parse(state.look.weapon); if (w) state.wtype = w.kind;
      render();
      if (matchMedia('(max-width: 960px)').matches) $('.stage').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
    setWrap.appendChild(el);
  });
  render(); renderSets();
})();
