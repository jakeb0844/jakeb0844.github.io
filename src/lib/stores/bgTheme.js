import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const DEFAULT_THEME_ID = 'sandstone-70';

const initialValue = browser
  ? (localStorage.getItem('bgTheme') || DEFAULT_THEME_ID)
  : DEFAULT_THEME_ID;

export const bgTheme = writable(initialValue);

if (browser) {
  bgTheme.subscribe((value) => {
    try {
      localStorage.setItem('bgTheme', String(value));
    } catch {}
  });
}


