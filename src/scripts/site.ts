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

renderHeroTitle(HEADLINE);
initScrollProgress();
initReveals();
initCursorGlow();

export {};
