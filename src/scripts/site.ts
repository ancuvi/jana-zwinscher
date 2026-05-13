type WordSegment = { text: string; italic: boolean };

const HEADLINE = 'Sauber gemacht.\nZuverlässig geräumt.';
const ITALIC_RE = /geräumt|sauber|frei|hingabe/i;

function renderHeroTitle(text: string) {
  const el = document.getElementById('heroTitle');
  if (!el) return;
  el.innerHTML = '';
  const lines = text.split('\n');
  let delay = 0.05;
  lines.forEach((line, li) => {
    const words = line.split(' ');
    words.forEach((w, wi) => {
      const isLast = wi === words.length - 1;
      const wrap = document.createElement('span');
      wrap.className = 'word';
      const inner = document.createElement('span');
      inner.textContent = w;
      inner.style.animationDelay = `${delay}s`;
      if (li === 1 || ITALIC_RE.test(w)) {
        inner.classList.add('italic');
      }
      wrap.appendChild(inner);
      el.appendChild(wrap);
      if (!isLast) el.appendChild(document.createTextNode(' '));
      delay += 0.07;
    });
    if (li < lines.length - 1) el.appendChild(document.createElement('br'));
  });
}

function initScrollProgress() {
  const progressEl = document.getElementById('scrollProgress');
  const topnav = document.getElementById('topnav');
  if (!progressEl || !topnav) return;
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    progressEl.style.width = pct + '%';
    if (h.scrollTop > 40) topnav.classList.add('scrolled');
    else topnav.classList.remove('scrolled');
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initReveals() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  const mapIo = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const rings = e.target.querySelectorAll('.map-ring');
          rings.forEach((r, i) => {
            setTimeout(() => r.classList.add('in'), i * 220);
          });
          mapIo.unobserve(e.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  const mapSvg = document.getElementById('mapSvg');
  if (mapSvg) mapIo.observe(mapSvg);
}

function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;
  let rafId: number | null = null;
  document.addEventListener('mousemove', (e) => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  });
}

function initBroomCursor() {
  const broom = document.getElementById('cursorBroom');
  if (!broom) return;

  const fineHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!fineHover || reduceMotion) return;

  let rafId: number | null = null;
  let mouseX = -100, mouseY = -100;

  const tick = () => {
    broom.style.left = mouseX + 'px';
    broom.style.top = mouseY + 'px';
    rafId = null;
  };

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!broom.classList.contains('ready')) broom.classList.add('ready');
    if (rafId === null) rafId = requestAnimationFrame(tick);
  });

  document.addEventListener('mouseleave', () => broom.classList.remove('ready'));
  document.addEventListener('mouseenter', () => broom.classList.add('ready'));

  const isInteractive = (el: Element | null): boolean => {
    if (!el) return false;
    return !!el.closest('a, button, [role="button"], .btn, [data-interactive]');
  };

  document.addEventListener('mouseover', (e) => {
    if (isInteractive(e.target as Element)) broom.classList.add('hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (isInteractive(e.target as Element)) broom.classList.remove('hover');
  });

  const spawnDust = (x: number, y: number) => {
    // Offset to where the bristles end up after the handle-tip alignment + -32deg rotation.
    const bx = x + 17;
    const by = y + 27;
    const count = 7;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'dust-particle';
      p.style.left = bx + 'px';
      p.style.top = by + 'px';
      const angle = (-Math.PI / 2) + (Math.random() - 0.5) * Math.PI * 0.9;
      const dist = 35 + Math.random() * 40;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist - 10;
      p.style.setProperty('--dx', dx.toFixed(1) + 'px');
      p.style.setProperty('--dy', dy.toFixed(1) + 'px');
      const size = 6 + Math.random() * 8;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.animationDuration = (550 + Math.random() * 350) + 'ms';
      document.body.appendChild(p);
      p.addEventListener('animationend', () => p.remove(), { once: true });
    }
  };

  document.addEventListener('mousedown', (e) => {
    broom.classList.remove('sweeping');
    void (broom as HTMLElement).offsetWidth;
    broom.classList.add('sweeping');
    spawnDust(e.clientX, e.clientY);
  });
  broom.addEventListener('animationend', () => broom.classList.remove('sweeping'));
}

renderHeroTitle(HEADLINE);
initScrollProgress();
initReveals();
initCursorGlow();
initBroomCursor();

export {};
