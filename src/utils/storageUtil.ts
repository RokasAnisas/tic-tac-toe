import { Storage } from '@/constants/storage';
const localStorage = window.localStorage;

export const storageUtil = {
  getItem: (key: Storage): string | null => {
    if (typeof localStorage != 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  },
  setItem: (key: Storage, value: string): void => {
    if (typeof localStorage != 'undefined') {
      localStorage.setItem(key, value);
    }
  },
};
