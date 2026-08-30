const main = document.querySelector('main');
const homeMarkup = main.innerHTML;
const menuButton = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
const hoursModal = document.querySelector('#hours-modal');
const { pages, articles } = window.WALL_DRUG;

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menu?.classList.toggle('is-open', !open);
});

menu?.addEventListener('click', (event) => {
  if (event.target.closest('a, button')) closeMenu();
});

document.querySelectorAll('[data-hours-open]').forEach((button) => button.addEventListener('click', () => hoursModal?.showModal()));
document.querySelector('[data-hours-close]')?.addEventListener('click', () => hoursModal?.close());
hoursModal?.addEventListener('click', (event) => {
  if (event.target === hoursModal || event.target.closest('a')) hoursModal.close();
});

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  menu?.classList.remove('is-open');
}

function routeHref(route) {
  return route.startsWith('http') ? route : `#${route}`;
}

function pageHero(page, article = false, modifier = '') {
  const heroImage = page.heroImage || page.image;
  return `<section class="page-hero ${article ? 'page-hero--article' : ''} ${modifier}">
    <div class="page-hero__copy">
      <p class="eyebrow">${page.eyebrow}</p>
      <h1>${page.title}</h1>
      <p>${page.intro}</p>
    </div>
    <figure class="page-hero__image"><img src="${heroImage}" alt="" fetchpriority="high"><span aria-hidden="true">Wall · South Dakota</span></figure>
  </section>`;
}

function statsMarkup(stats) {
  if (!stats?.length) return '';
  return `<section class="fact-strip" aria-label="Quick facts">${stats.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join('')}</section>`;
}

function sectionsMarkup(sections) {
  if (!sections?.length) return '';
  return `<div class="editorial-sections">${sections.map((section, index) => `<section class="editorial-row reveal ${index % 2 ? 'editorial-row--reverse' : ''}">
    <figure><img src="${section.image}" alt="" loading="lazy"></figure>
    <div><p class="eyebrow">${section.kicker}</p><h2>${section.title}</h2>${section.body.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>
  </section>`).join('')}</div>`;
}

function cardsMarkup(cards, heading = 'Keep exploring') {
  if (!cards?.length) return '';
  return `<section class="route-cards page-shell"><div class="route-cards__heading"><p class="eyebrow">Choose your trail</p><h2>${heading}</h2></div><div class="route-card-grid">${cards.map((card) => `<a class="route-card reveal" href="${routeHref(card.route)}">
    <div class="route-card__image"><img src="${card.image}" alt="" loading="lazy"></div><p>${card.label}</p><h3>${card.title}</h3><span>${card.text || 'Discover more'} →</span>
  </a>`).join('')}</div></section>`;
}

function relatedMarkup(items) {
  if (!items?.length) return '';
  return `<section class="related-stories"><div class="page-shell"><p class="eyebrow">Follow the story</p><h2>There’s more down the road.</h2><div class="related-grid">${items.map((item) => `<a href="#${item.route}" class="related-card reveal"><img src="${item.image}" alt="" loading="lazy"><div><p>${item.label}</p><h3>${item.title}</h3><span>Keep going →</span></div></a>`).join('')}</div></div></section>`;
}

function galleryMarkup(images) {
  if (!images?.length) return '';
  return `<section class="sign-gallery page-shell"><p class="eyebrow">Signs from the road</p><h2>Painted by hand.<br>Remembered for miles.</h2><div>${images.map((image, index) => `<figure class="reveal"><img src="${image}" alt="Historic Wall Drug sign ${index + 1}" loading="lazy"></figure>`).join('')}</div></section>`;
}

function ctaMarkup(cta) {
  if (!cta) return '';
  const external = cta.href.startsWith('http') ? ' target="_blank" rel="noreferrer"' : '';
  return `<section class="page-cta"><div><p class="eyebrow">${cta.label}</p><h2>${cta.text}</h2></div><a class="button button-light" href="${cta.href}"${external}>Let’s go <span aria-hidden="true">→</span></a></section>`;
}

function renderStandard(page) {
  main.innerHTML = `${pageHero(page)}${statsMarkup(page.stats)}${sectionsMarkup(page.sections)}${page.quote ? `<blockquote class="story-quote reveal"><p>${page.quote}</p><span>THE INVITATION THAT STARTED IT ALL</span></blockquote>` : ''}${cardsMarkup(page.cards, 'Pick your own adventure.')}${galleryMarkup(page.gallery)}${relatedMarkup(page.related)}${ctaMarkup(page.cta)}`;
}

function renderJournal(page, year = 'all') {
  main.innerHTML = `${pageHero(page)}<section class="journal page-shell">
    <div class="journal-toolbar"><p>Field notes, trip ideas and local history from the Wall Drug archives.</p><div class="year-filter" role="group" aria-label="Filter articles by year"><button data-year="all" class="${year === 'all' ? 'is-active' : ''}">All stories</button><button data-year="2022" class="${year === '2022' ? 'is-active' : ''}">2022</button><button data-year="2021" class="${year === '2021' ? 'is-active' : ''}">2021</button></div></div>
    <div class="article-grid">${articles.filter((article) => year === 'all' || article.year === year).map((article, index) => `<a href="#article/${article.slug}" class="article-card reveal ${index === 0 ? 'article-card--feature' : ''}">
      <div><img src="${article.image}" alt="" loading="lazy"></div><p>${article.date}</p><h2>${article.title}</h2><span>${article.excerpt}</span><b>Read the story →</b>
    </a>`).join('')}</div>
  </section>`;
  document.querySelectorAll('[data-year]').forEach((button) => button.addEventListener('click', () => { renderJournal(page, button.dataset.year); setupReveals(); }));
}

async function renderArticle(article) {
  const page = { eyebrow: `${article.date} · Backyard Bulletin`, title: article.title, intro: article.excerpt, image: article.image };
  main.innerHTML = `${pageHero(page, true)}<article class="article-body page-shell" id="article-content"><p class="loading-note">Dusting off this story…</p></article><section class="article-next page-shell"><a class="text-link" href="#journal">← Back to the journal</a></section>`;
  try {
    const response = await fetch(article.source);
    if (!response.ok) throw new Error('Article could not be loaded');
    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const original = doc.querySelector('article');
    if (!original) throw new Error('Article content was not found');
    original.querySelector('h1')?.remove();
    const authorLine = original.querySelector('time')?.closest('p');
    authorLine?.remove();
    original.querySelectorAll('script, style, .clear').forEach((node) => node.remove());
    const sourceUrl = new URL(article.source, window.location.href);
    original.querySelectorAll('img').forEach((image) => {
      const src = image.getAttribute('src');
      if (src) image.src = new URL(src, sourceUrl).href;
      image.removeAttribute('width'); image.removeAttribute('height'); image.removeAttribute('style'); image.loading = 'lazy';
      if (!image.alt) image.alt = '';
    });
    original.querySelectorAll('[style]').forEach((element) => element.removeAttribute('style'));
    document.querySelector('#article-content').innerHTML = original.innerHTML;
  } catch (error) {
    document.querySelector('#article-content').innerHTML = `<p>We couldn’t open this archived story in the preview. <a href="${article.source}">View the preserved original →</a></p>`;
  }
}

function renderMap(page) {
  main.innerHTML = `${pageHero(page, false, 'page-hero--map')}<section class="map-page page-shell">
    <div class="map-intro"><div><p class="eyebrow">Inside Wall Drug</p><h2>Find your next stop.</h2></div><p>Drag to move around the map, use the controls to zoom, or reset to see everything. Keyboard users can focus the map and use the arrow keys plus + and −.</p></div>
    <div class="interactive-map" data-map tabindex="0" aria-label="Zoomable map of Wall Drug Store">
      <img src="${page.image}" alt="Map of Wall Drug Store shops and attractions" draggable="false" data-map-image>
      <div class="map-controls"><button type="button" data-zoom="in" aria-label="Zoom in">+</button><button type="button" data-zoom="out" aria-label="Zoom out">−</button><button type="button" data-zoom="reset" aria-label="Reset map">Reset</button></div>
      <p class="map-hint">Drag to explore</p>
    </div>
    <section class="location-panel" aria-labelledby="location-title">
      <div class="location-map"><iframe src="https://www.google.com/maps?q=Wall+Drug,+510+Main+Street,+Wall,+South+Dakota+57790&amp;output=embed" title="Wall Drug Store location on Google Maps" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
      <div class="map-actions"><div><p class="eyebrow">You are headed here</p><h2 id="location-title">Wall Drug Store</h2><address>510 Main Street<br>Wall, South Dakota 57790</address><p>Right off I-90 at exits 109 and 110, eight miles north of Badlands National Park.</p></div><a class="button button-light" href="https://www.google.com/maps/dir/?api=1&amp;destination=Wall+Drug+510+Main+Street+Wall+SD" target="_blank" rel="noopener noreferrer">Open road directions ↗</a></div>
    </section>
  </section>`;
  setupMap();
}

function renderContact(page) {
  main.innerHTML = `${pageHero(page)}<section class="contact-layout page-shell">
    <div class="contact-details"><p class="eyebrow">Talk to a real person</p><h2>We’re here to help.</h2><dl><div><dt>Phone</dt><dd><a href="tel:+16052792175">605-279-2175</a></dd></div><div><dt>Email</dt><dd><a href="mailto:walldrug@gwtc.net">walldrug@gwtc.net</a></dd></div><div><dt>Address</dt><dd>510 Main St · PO Box 401<br>Wall, SD 57790-0401</dd></div><div><dt>Fax</dt><dd>605-279-2699</dd></div></dl></div>
    <div class="form-frame"><iframe src="www.walldrug.com/machform/embedf42b.html?id=11392" title="Contact Wall Drug form" loading="lazy"></iframe></div>
  </section>`;
}

function renderApplication(page) {
  main.innerHTML = `${pageHero(page)}<section class="application-intro page-shell"><p>Applicants are considered for employment without regard to race, color, religion, creed, sex, pregnancy, national origin, ancestry, age, disability, genetic information or any other basis prohibited by applicable law. Reasonable accommodations are available throughout the application process.</p></section><section class="application-frame page-shell"><iframe src="www.walldrug.com/machform/embed1cf7.html?id=12019" title="Wall Drug employment application"></iframe></section>`;
}

function setupMap() {
  const viewport = document.querySelector('[data-map]');
  const mapImage = document.querySelector('[data-map-image]');
  if (!viewport || !mapImage) return;
  let scale = 1; let x = 0; let y = 0; let dragging = false; let startX = 0; let startY = 0;
  const draw = () => { mapImage.style.transform = `translate(${x}px, ${y}px) scale(${scale})`; };
  const zoom = (amount) => { scale = Math.min(3, Math.max(1, scale + amount)); if (scale === 1) { x = 0; y = 0; } draw(); };
  viewport.querySelector('[data-zoom="in"]').addEventListener('click', () => zoom(.35));
  viewport.querySelector('[data-zoom="out"]').addEventListener('click', () => zoom(-.35));
  viewport.querySelector('[data-zoom="reset"]').addEventListener('click', () => { scale = 1; x = 0; y = 0; draw(); });
  viewport.addEventListener('wheel', (event) => { event.preventDefault(); zoom(event.deltaY < 0 ? .18 : -.18); }, { passive: false });
  viewport.addEventListener('pointerdown', (event) => { dragging = true; startX = event.clientX - x; startY = event.clientY - y; viewport.setPointerCapture(event.pointerId); });
  viewport.addEventListener('pointermove', (event) => { if (!dragging || scale === 1) return; x = event.clientX - startX; y = event.clientY - startY; draw(); });
  viewport.addEventListener('pointerup', () => { dragging = false; });
  viewport.addEventListener('keydown', (event) => {
    const step = 28;
    if (event.key === '+' || event.key === '=') zoom(.25); else if (event.key === '-') zoom(-.25); else if (event.key === 'ArrowLeft') x += step; else if (event.key === 'ArrowRight') x -= step; else if (event.key === 'ArrowUp') y += step; else if (event.key === 'ArrowDown') y -= step; else return;
    event.preventDefault(); draw();
  });
}

function setupReveals() {
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach((element) => element.classList.add('is-visible')); return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.1 });
  reveals.forEach((element) => observer.observe(element));
}

function startHeroVideo() {
  const video = document.querySelector('[data-hero-video]');
  if (!video) return;
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  const play = () => video.play().catch(() => {});
  if (video.readyState >= 2) play();
  else video.addEventListener('canplay', play, { once: true });
}

function setupHeroVideo() {
  const cue = document.querySelector('[data-scroll-cue]');
  startHeroVideo();
  cue?.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#intro')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

window.addEventListener('pageshow', startHeroVideo);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') startHeroVideo();
});

const siteHeader = document.querySelector('[data-header]');
function syncHeader() {
  const route = window.location.hash.slice(1);
  const home = !route || route === 'intro';
  siteHeader?.classList.toggle('is-scrolled', !home || window.scrollY > 40);
}
window.addEventListener('scroll', syncHeader, { passive: true });
window.addEventListener('hashchange', syncHeader);

function setActiveNavigation(route) {
  const exploreRoutes = ['explore', 'dining', 'shopping', 'backyard', 'map'];
  const visitRoutes = ['visit', 'badlands', 'minuteman', 'city', 'bus-tours'];
  let active = route;
  if (exploreRoutes.includes(route)) active = 'explore';
  if (visitRoutes.includes(route)) active = 'visit';
  if (route.startsWith('article/')) active = 'journal';
  document.querySelectorAll('.main-nav a').forEach((link) => {
    if (link.getAttribute('href') === `#${active}`) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
  });
}

function updateMetadata(page) {
  document.title = page ? `${page.title.replace(/<[^>]*>/g, '')} — Wall Drug` : "Welcome to Wall Drug — South Dakota's Legendary Roadside Stop";
  document.querySelector('meta[name="description"]')?.setAttribute('content', page?.intro || "Welcome to Wall Drug, South Dakota's legendary roadside stop for families, food, Western history and unforgettable road-trip stories.");
}

async function handleRoute() {
  closeMenu();
  const route = decodeURIComponent(window.location.hash.slice(1));
  if (!route) {
    main.innerHTML = homeMarkup; updateMetadata(null); setActiveNavigation(''); setupReveals(); setupHeroVideo(); return;
  }
  if (route === 'intro') {
    main.innerHTML = homeMarkup; updateMetadata(null); setActiveNavigation(''); setupReveals(); setupHeroVideo();
    requestAnimationFrame(() => document.querySelector('#intro')?.scrollIntoView({ block: 'start' }));
    return;
  }
  if (route.startsWith('article/')) {
    const article = articles.find((item) => item.slug === route.split('/')[1]);
    if (article) { updateMetadata(article); setActiveNavigation(route); await renderArticle(article); window.scrollTo(0, 0); return; }
  }
  const page = pages[route];
  if (!page) {
    main.innerHTML = `<section class="not-found page-shell"><p class="eyebrow">A wrong turn</p><h1>This road doesn’t lead to Wall Drug.</h1><a class="button" href="#">Back to the main road →</a></section>`;
    updateMetadata({ title: 'Page not found', intro: 'This route could not be found.' }); return;
  }
  updateMetadata(page); setActiveNavigation(route);
  if (page.type === 'journal') renderJournal(page);
  else if (page.type === 'map') renderMap(page);
  else if (page.type === 'contact') renderContact(page);
  else if (page.type === 'application') renderApplication(page);
  else renderStandard(page);
  window.scrollTo(0, 0); setupReveals();
}

window.addEventListener('hashchange', handleRoute);
syncHeader();
handleRoute();
