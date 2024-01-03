import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
