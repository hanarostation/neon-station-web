(() => {
  const LANG = window.NS_LANG || 'ko';
  const FOREIGN = LANG !== 'ko';
  // A notice is shown in a language when it has text for it (ko is always required).
  const textOf = (n) => n[LANG] || null;
  const NEWS = (window.NS_NEWS || []).filter(textOf).sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const SITE = window.NS_SITE || {};
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const fmt = (d) => { const [y, m, day] = d.split('-'); return `${y}.${m}.${day}`; };
  const ext = (href) => /^https?:/.test(href);
  // Links in notices are written for the Korean root pages. Fix them for /en/ /ja/ /zh/ pages.
  const fixHref = (href) => {
    if (!FOREIGN || ext(href) || href.startsWith('#')) return href;
    if (href === 'privacy/') return '../privacy/en/';
    if (/^(privacy|terms|support|delete-account)\//.test(href)) return '../' + href;
    return href;
  };
  const link = (l, cls = '') => { const h = fixHref(l.href); return `<a class="${cls}" href="${esc(h)}"${ext(h) ? ' target="_blank" rel="noopener"' : ''}>${esc(NS_PICK(l.label))}</a>`; };
  const meta = (n) => [
    `<span class="nt nt-${n.type}">${esc(T('type_' + n.type))}</span>`,
    n.version ? `<span class="nv">v${esc(n.version)}</span>` : '',
    n.status ? `<span class="ns ns-${n.status}">${esc(T('status_' + n.status))}</span>` : '',
    ...(n.platforms || []).map((p) => `<span class="np">${esc(p)}</span>`),
  ].join('');

  /* store buttons: link when the URL is set, otherwise show the fallback text */
  const store = (sel, url) => document.querySelectorAll(sel).forEach((el) => {
    if (url) { el.href = url; el.target = '_blank'; el.rel = 'noopener'; }
    else { el.removeAttribute('href'); el.setAttribute('aria-disabled', 'true'); el.classList.add('no-link'); if (el.dataset.fallback) el.textContent = el.dataset.fallback; }
  });
  store('[data-appstore]', SITE.appStoreUrl);
  store('[data-playstore]', SITE.playStoreUrl);
  if (FOREIGN) document.querySelectorAll('[data-only-foreign]').forEach((el) => { el.hidden = false; });

  /* latest news on the home page and the guide */
  document.querySelectorAll('[data-latest]').forEach((box) => {
    const n = Math.max(1, +box.dataset.latest || 3);
    box.innerHTML = NEWS.slice(0, n).map((x) => `
      <li><a href="news.html#${esc(x.id)}">
        <time datetime="${x.date}">${fmt(x.date)}</time>
        <span class="lm">${meta(x)}</span>
        <b>${esc(textOf(x).title)}</b>
      </a></li>`).join('');
  });

  /* notice board */
  const list = document.getElementById('news-list');
  if (!list) return;
  const bar = document.getElementById('news-filter');
  const types = ['all', ...['update', 'notice', 'event', 'maint'].filter((t) => NEWS.some((n) => n.type === t))];
  bar.innerHTML = types.map((t) => `<button type="button" data-f="${t}" aria-pressed="${t === 'all'}">${esc(t === 'all' ? T('all') : T('type_' + t))} <span>${t === 'all' ? NEWS.length : NEWS.filter((n) => n.type === t).length}</span></button>`).join('');

  list.innerHTML = NEWS.map((n) => {
    const x = textOf(n);
    return `
    <li class="nitem" data-type="${n.type}">
      <details id="${esc(n.id)}">
        <summary>
          <time datetime="${n.date}">${fmt(n.date)}</time>
          <span class="nmeta">${meta(n)}</span>
          <span class="ntitle">${esc(x.title)}</span>
          <span class="nsum">${esc(x.summary || '')}</span>
        </summary>
        <div class="nbody">
          ${(x.sections || []).map((s) => `<h3>${esc(s.title)}</h3><ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`).join('')}
          ${n.links && n.links.length ? `<p class="nlinks">${n.links.map((l) => link(l, 'btn ghost')).join('')}</p>` : ''}
          <p class="nshare"><a href="#${esc(n.id)}" data-copy="${esc(n.id)}">${esc(T('copy_link'))}</a></p>
        </div>
      </details>
    </li>`;
  }).join('');

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
    const done = () => { a.textContent = T('copied'); setTimeout(() => { a.textContent = T('copy_link'); }, 1800); };
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
