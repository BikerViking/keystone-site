export function initTheme() {
  const btn = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('theme-sun');
  const moonIcon = document.getElementById('theme-moon');

  const setThemeAttributes = (isDark) => {
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', isDark ? '#1a1a1a' : '#ffffff');
    }
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (sunIcon && moonIcon) {
      sunIcon.classList.toggle('hidden', !isDark);
      moonIcon.classList.toggle('hidden', isDark);
    }
    if (btn) {
      btn.setAttribute('aria-pressed', String(isDark));
    }
    setThemeAttributes(isDark);
  };

  const stored = localStorage.getItem('theme');
  const colorSchemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
  const startDark = stored === 'dark' || (!stored && colorSchemeMedia.matches);
  if (startDark) {
    document.documentElement.classList.add('dark');
    if (sunIcon && moonIcon) {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    }
    if (btn) {
      btn.setAttribute('aria-pressed', 'true');
    }
  } else if (btn) {
    btn.setAttribute('aria-pressed', 'false');
  }
  setThemeAttributes(startDark);

  if (!stored) {
    colorSchemeMedia.addEventListener('change', (e) => {
      const isDark = e.matches;
      document.documentElement.classList.toggle('dark', isDark);
      if (sunIcon && moonIcon) {
        sunIcon.classList.toggle('hidden', !isDark);
        moonIcon.classList.toggle('hidden', isDark);
      }
      if (btn) {
        btn.setAttribute('aria-pressed', String(isDark));
      }
      setThemeAttributes(isDark);
    });
  }

  if (btn) {
    btn.addEventListener('click', toggleTheme);
  }
}
