import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { map, toLower, upperFirst } from 'lodash';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

export const useTextLimit = (text: string, { ...options }: { count: number; dots?: boolean }) => {
  if (!text) return '';
  const toSlice = `${text.slice(0, options.count)}${text.length > options.count && options.dots && '...'}`;
  return toSlice;
};

export const useTitleCase = (text: string) => {
  return map(toLower(text).split(' '), upperFirst).join(' ');
};

// export const useAssetsImage = (name: string): any => {
//   const glob = import.meta.glob('~/assets/images/**', { eager: true, import: 'default' });
//   return glob[`/assets/images/${name}`];
// };

export const useUniqueFilename = () => {
  const timestamp = new Date().toISOString().replace(/\/|-/g, '').substring(0, 9);
  /*  Random String after Date */
  // let random = ('' + Math.random()).substring(2, 8); //Numeric Random
  const random = Math.random().toString(36).substring(2, 15) + Math.random().toString(23).substring(2, 5);
  const random_name = timestamp + random;
  return random_name;
};

export const useFileExtension = (file: any, separator: any = '.') => {
  const file_ext = file.split(separator).pop();
  return file_ext;
};

// export const useFileToBase64 = async (file) => {
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (e) => reject(e);
//   });
// };

// export const useAssets = (name: string): any => {
//   const glob = import.meta.glob('~/assets/images/**', { eager: true, import: 'default' });
//   return glob[`/assets/images/${name}`];
// };

// export const useBytesToSize = (bytes) => {
//   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
//   if (bytes === 0) return 'n/a';
//   const i = parseInt(Math.floor(Math.log(Math.abs(bytes)) / Math.log(1024)), 10);
//   if (i === 0) return `${bytes} ${sizes[i]}`;
//   return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
// };
