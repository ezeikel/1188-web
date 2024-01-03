import { getTailwindClass } from '@/lib/utils';

type LogoOutlineProps = {
  className?: string;
};

const LogoOutline = ({ className }: LogoOutlineProps) => {
  let strokeClassName = '';

  if (className) {
    strokeClassName = getTailwindClass(className, /^stroke-/);
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 461.78 169.98"
      className={className}
    >
      <g data-name="Ebene 1">
        <path
          className={strokeClassName}
          d="M359.69 476.51v86.87a28.41 28.41 0 1 1-56.81 0v-131.7h.92a47.31 47.31 0 0 0 55.89 44.83Z"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6.88601444678617"
          transform="translate(-266.73 -427.38)"
        />
        <path
          className={strokeClassName}
          d="M302.88 431.68v56.81h-4.3a28.41 28.41 0 1 1 0-56.81ZM472.45 430.82v131.7a28.41 28.41 0 1 1-56.81 0v-74.89H457v-56.81Z"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6.88601444678617"
          transform="translate(-266.73 -427.38)"
        />
        <path
          className={strokeClassName}
          d="M148.91 3.44h41.32v56.81h-41.32z"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6.88601444678617"
        />
        <path
          className={strokeClassName}
          d="M415.64 430.82v56.81h-4.3a28.41 28.41 0 1 1 0-56.81ZM359.69 431.68v44.83a47.31 47.31 0 0 1-55.89-44.83ZM725.07 544.44A47.76 47.76 0 1 1 656 501.71a37.93 37.93 0 0 0 42.7 0 47.79 47.79 0 0 1 26.37 42.73ZM584.33 582.5a.54.54 0 0 1-.86-.6 44.76 44.76 0 0 0-76.21-44.1.48.48 0 0 1-.84-.4 47.7 47.7 0 0 1 25.61-34 37.93 37.93 0 0 0 42.63 0 47.69 47.69 0 0 1 9.67 79Z"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6.88601444678617"
          transform="translate(-266.73 -427.38)"
        />
        <path
          className={strokeClassName}
          d="M591.24 472.14a37.87 37.87 0 0 1-16.53 31.3s0 0-.05 0a37.93 37.93 0 0 1-42.63 0 38.1 38.1 0 0 1-12.28-13.88.44.44 0 0 1 .47-.64c.6.11 1.2.18 1.8.23.26 0 .54.07.81.08a5.46 5.46 0 0 0 .57 0c.35 0 .67.05 1 .05h1.41a35.72 35.72 0 0 0 3.6-.17c.58-.05 1.15-.12 1.72-.21a18.19 18.19 0 0 0 1.82-.31 37.86 37.86 0 0 0 30.68-35.23c0-.64.05-1.3.05-1.95v-.71c0-.39 0-.77-.05-1.15V449c0-.67-.09-1.34-.18-2s-.19-1.44-.31-2.15c-.08-.51-.19-1-.31-1.53a36.42 36.42 0 0 0-2.2-6.89c-.19-.43-.38-.86-.59-1.29a.22.22 0 0 1 .23-.31 37.85 37.85 0 0 1 30.97 37.31Z"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6.88601444678617"
          transform="translate(-266.73 -427.38)"
        />
        <path
          className={strokeClassName}
          d="M563.64 453.43A37.86 37.86 0 0 1 533 488.66a38.22 38.22 0 0 0 30.64-35.23Z"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6.88601444678617"
          transform="translate(-266.73 -427.38)"
        />
        <path
          className={strokeClassName}
          d="M563.69 451.45c0 .65 0 1.31-.05 1.95A37.86 37.86 0 0 1 533 488.66c-.6.13-1.2.23-1.82.31s-1.14.16-1.72.21a35.72 35.72 0 0 1-3.6.17h-1.41c-.41 0-.67 0-1-.05a5.46 5.46 0 0 1-.57 0l-.81-.08c-.6 0-1.2-.12-1.8-.23-.3 0-.57-.08-.86-.13a37.86 37.86 0 0 1 34-54.52 36.49 36.49 0 0 1 6.48.56c.27.55.53 1.11.77 1.67a36.42 36.42 0 0 1 2.2 6.89c.12.5.23 1 .31 1.53.12.71.23 1.43.31 2.15s.14 1.33.18 2v.55c.01.53.03 1.14.03 1.76ZM586.07 566.82a44.63 44.63 0 0 1-3.34 17 47.75 47.75 0 0 1-76.61-44.62 44.74 44.74 0 0 1 80 27.63ZM713.57 481.4a37.88 37.88 0 1 1-50.26-46.19l1.28 1.17 47.7 43.85Z"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6.88601444678617"
          transform="translate(-266.73 -427.38)"
        />
        <path
          className={strokeClassName}
          d="M715.17 469.4a38.06 38.06 0 0 1-1.17 10.35 1.06 1.06 0 0 1-1.74.48l-47.7-43.85a1.05 1.05 0 0 1 .34-1.77 37.88 37.88 0 0 1 50.24 34.79Z"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6.88601444678617"
          transform="translate(-266.73 -427.38)"
        />
      </g>
    </svg>
  );
};

export default LogoOutline;
