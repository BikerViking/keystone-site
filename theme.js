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
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const startDark = stored === 'dark' || (!stored && prefersDark);
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

  if (btn) {
    btn.addEventListener('click', toggleTheme);
  }

  if (!stored) {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        document.documentElement.classList.toggle('dark', e.matches);
        if (sunIcon && moonIcon) {
          sunIcon.classList.toggle('hidden', !e.matches);
          moonIcon.classList.toggle('hidden', e.matches);
        }
        if (btn) {
          btn.setAttribute('aria-pressed', String(e.matches));
        }
        setThemeAttributes(e.matches);
      });
  }
}
