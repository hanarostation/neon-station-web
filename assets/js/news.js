(() => {
  const NEWS = (window.NS_NEWS || []).slice().sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const SITE = window.NS_SITE || {};
  const TYPE = { update: '업데이트', notice: '안내', event: '이벤트', maint: '점검' };
  const STATUS = { live: '적용됨', pending: '심사 · 배포 중', open: '모집 중', ended: '종료' };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const fmt = (d) => { const [y, m, day] = d.split('-'); return `${y}.${m}.${day}`; };
  const ext = (href) => /^https?:/.test(href);
  const link = (l, cls = '') => `<a class="${cls}" href="${esc(l.href)}"${ext(l.href) ? ' target="_blank" rel="noopener"' : ''}>${esc(l.label)}</a>`;
  const meta = (n) => [
    `<span class="nt nt-${n.type}">${TYPE[n.type] || n.type}</span>`,
    n.version ? `<span class="nv">v${esc(n.version)}</span>` : '',
    n.status ? `<span class="ns ns-${n.status}">${STATUS[n.status] || n.status}</span>` : '',
    ...(n.platforms || []).map((p) => `<span class="np">${esc(p)}</span>`),
  ].join('');

  /* App Store 버튼 (주소가 있으면 링크, 없으면 검색 안내) */
  document.querySelectorAll('[data-appstore]').forEach((el) => {
    if (SITE.appStoreUrl) { el.href = SITE.appStoreUrl; el.target = '_blank'; el.rel = 'noopener'; }
    else { el.removeAttribute('href'); el.setAttribute('aria-disabled', 'true'); el.classList.add('no-link'); el.textContent = el.dataset.fallback || 'App Store에서 「Neon Station」 검색'; }
  });

  /* 첫 화면 · 가이드의 최신 소식 */
  document.querySelectorAll('[data-latest]').forEach((box) => {
    const n = Math.max(1, +box.dataset.latest || 3);
    box.innerHTML = NEWS.slice(0, n).map((x) => `
      <li><a href="news.html#${esc(x.id)}">
        <time datetime="${x.date}">${fmt(x.date)}</time>
        <span class="lm">${meta(x)}</span>
        <b>${esc(x.title)}</b>
      </a></li>`).join('');
  });

  /* 공지 페이지 */
  const list = document.getElementById('news-list');
  if (!list) return;
  const bar = document.getElementById('news-filter');
  const types = ['all', ...Object.keys(TYPE).filter((t) => NEWS.some((n) => n.type === t))];
  bar.innerHTML = types.map((t) => `<button type="button" data-f="${t}" aria-pressed="${t === 'all'}">${t === 'all' ? '전체' : TYPE[t]} <span>${t === 'all' ? NEWS.length : NEWS.filter((n) => n.type === t).length}</span></button>`).join('');

  list.innerHTML = NEWS.map((n) => `
    <li class="nitem" data-type="${n.type}">
      <details id="${esc(n.id)}">
        <summary>
          <time datetime="${n.date}">${fmt(n.date)}</time>
          <span class="nmeta">${meta(n)}</span>
          <span class="ntitle">${esc(n.title)}</span>
          <span class="nsum">${esc(n.summary || '')}</span>
        </summary>
        <div class="nbody">
          ${(n.sections || []).map((s) => `<h3>${esc(s.title)}</h3><ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`).join('')}
          ${n.links && n.links.length ? `<p class="nlinks">${n.links.map((l) => link(l, 'btn ghost')).join('')}</p>` : ''}
          <p class="nshare"><a href="#${esc(n.id)}" data-copy="${esc(n.id)}">이 공지 주소 복사</a></p>
        </div>
      </details>
    </li>`).join('');

  bar.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-f]'); if (!b) return;
    bar.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    list.querySelectorAll('.nitem').forEach((li) => { li.hidden = b.dataset.f !== 'all' && li.dataset.type !== b.dataset.f; });
  });

  list.addEventListener('click', (e) => {
    const a = e.target.closest('[data-copy]'); if (!a) return;
    e.preventDefault();
    const url = location.href.split('#')[0] + '#' + a.dataset.copy;
    history.replaceState(null, '', '#' + a.dataset.copy);
    const done = () => { a.textContent = '주소를 복사했습니다'; setTimeout(() => { a.textContent = '이 공지 주소 복사'; }, 1800); };
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, () => { a.textContent = url; });
    else a.textContent = url;
  });

  const openHash = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    const d = id && document.getElementById(id);
    if (d && d.tagName === 'DETAILS') { d.open = true; d.scrollIntoView({ block: 'start' }); }
    else if (!id) { const first = list.querySelector('details'); if (first) first.open = true; }
  };
  window.addEventListener('hashchange', openHash);
  openHash();
})();
