import React from 'react';

export function changeLightMode() {
  document.documentElement.setAttribute('theme', 'light');
}

export function changeDarkMode() {
  document.documentElement.setAttribute('theme', 'dark');
}

export function changeMode(mode: 'light' | 'dark') {
  if (mode === 'light') {
    changeLightMode();
  } else {
    changeDarkMode();
  }
  setThemeSetting(mode);
}

function setThemeSetting(value) {
  window.localStorage.setItem('so99ynoodles.dev-color-mode', value);
}

export function useColorMode() {
  React.useEffect(() => {
    const value = localStorage.getItem('so99ynoodles.dev-color-mode');
    if (!value) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery.matches == true) {
        changeDarkMode();
      } else {
        changeLightMode();
      }
    } else {
      if (value == 'dark') {
        changeDarkMode();
      } else {
        changeLightMode();
      }
    }
  }, []);
}
