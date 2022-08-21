export const loadMode = (): void => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const dark = localStorage.theme?.length ? localStorage.theme === 'dark' : prefersDark;

  if (dark) {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }

  localStorage.setItem('theme', dark ? 'dark' : 'light');
};
