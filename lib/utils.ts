import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';

// this function will generate a URL for the given source
export const urlFor = (source: any): string =>
  imageUrlBuilder(client).image(source).url();

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getTailwindClass = (className: string, query: RegExp) => {
  if (!className) {
    console.error('className is undefined');
    return '';
  }

  const classNameStartIndex = className.search(query);
  const spaceAfterClassName = className.indexOf(' ', classNameStartIndex);

  const strokeClassName = className.slice(
    classNameStartIndex,
    spaceAfterClassName === -1 ? undefined : spaceAfterClassName,
  );

  return strokeClassName;
};
