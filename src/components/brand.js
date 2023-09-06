import { useRouter } from 'next/router';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

function BrandContext({ children }) {
  const router = useRouter();

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onSelect={() => router.push('/brand')}>
          Brand Kit
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

function LogoSVG(props) {
  return (
    <svg viewBox='0 0 266 266' {...props}>
      <g transform='translate(5,5)'>
        <circle
          cx='128'
          cy='128'
          r='128'
          className='drop-shadow-[0_5px_5px_rgb(0_0_0_/_0.3)] fill-white'
        />
        <path
          d='m129.936 175.773 73.916-61.606-7.454 35.07a15 15 0 0 1-5.16 8.48L117.72 218l7.143-33.806a15 15 0 0 1 5.072-8.421Z'
          className='fill-secondary'
        />
        <path
          d='M50 208.111 192.922 91.413a15 15 0 0 0 5.155-8.36l7.747-34.812L62.321 165.532a15 15 0 0 0-5.189 8.539L50 208.11Z'
          className='fill-primary'
        />
        <path
          d='m63.181 100.914 73.607-61.61-7.152 34.997a15 15 0 0 1-5.185 8.596l-73.465 60.241 7.147-33.823a15 15 0 0 1 5.048-8.401Z'
          className='fill-brand-black'
        />
      </g>
    </svg>
  );
}

export function Logo(props) {
  return (
    <BrandContext>
      <LogoSVG {...props} />
    </BrandContext>
  );
}

function WordmarkSVG(props) {
  return (
    <svg viewBox='0 0 514 144' {...props}>
      <path
        d='M.6 141h26.88V86.088h51.072V62.28H27.48V30.792h52.032V6.6H.6zm93.312 0h25.92V41.16h-25.92V141ZM91.224 17.544c0 8.448 6.72 15.36 15.552 15.36 9.024 0 15.552-6.72 15.552-15.36 0-8.256-6.528-15.168-15.552-15.168-8.832 0-15.552 6.912-15.552 15.168ZM173.016 141h14.208v-23.04h-10.752c-4.992 0-8.064-2.88-8.064-9.216V63.24h21.12V41.16h-21.12V18.312L142.488 21v20.16h-14.016v22.08h14.016v46.848c0 21.696 10.752 30.912 30.528 30.912Zm27.072 0h26.88V92.232H245.4c30.144 0 48.576-14.784 48.576-43.2 0-28.224-18.432-42.432-48.576-42.432h-45.312V141Zm26.88-72.96V30.6h16.896c14.592 0 22.848 5.952 22.848 18.624 0 12.864-8.256 18.816-22.848 18.816h-16.896ZM303.576 141h25.92V.84h-25.92zm90.624 2.496c30.912 0 53.184-23.424 53.184-52.224 0-28.8-22.272-52.416-53.184-52.416s-53.184 23.616-53.184 52.416c0 28.8 22.272 52.224 53.184 52.224Zm-27.264-52.224c0-15.552 10.752-28.8 27.264-28.8s27.264 13.248 27.264 28.8c0 15.552-10.752 28.608-27.264 28.608s-27.264-13.056-27.264-28.608ZM496.728 141h14.208v-23.04h-10.752c-4.992 0-8.064-2.88-8.064-9.216V63.24h21.12V41.16h-21.12V18.312L466.2 21v20.16h-14.016v22.08H466.2v46.848c0 21.696 10.752 30.912 30.528 30.912Z'
        className='fill-current'
      />
    </svg>
  );
}

export function Wordmark(props) {
  return (
    <BrandContext>
      <WordmarkSVG className='inline align-baseline h-[1.3em]' {...props} />
    </BrandContext>
  );
}

function LockupSVG(props) {
  return (
    <svg viewBox='0 0 1087 266' {...props}>
      <g transform='translate(5,5)'>
        <path
          d='M320.883 230.583h39.574v-80.842h75.189V114.69h-75.19V68.333h76.603V32.717H320.883zm137.377 0h38.16V83.597h-38.16v146.986ZM454.301 48.83c0 12.437 9.893 22.613 22.896 22.613 13.285 0 22.896-9.893 22.896-22.613 0-12.155-9.61-22.331-22.896-22.331-13.003 0-22.896 10.176-22.896 22.33Zm120.417 181.753h20.917v-33.92h-15.829c-7.35 0-11.872-4.24-11.872-13.568v-66.992h31.093V83.597h-31.093V49.959l-38.16 3.958v29.68h-20.635v32.506h20.635v68.971c0 31.941 15.83 45.51 44.944 45.51Zm39.856 0h39.573v-71.797h27.136c44.379 0 71.515-21.765 71.515-63.6 0-41.552-27.136-62.47-71.515-62.47h-66.709v197.867Zm39.573-107.413V68.05h24.875c21.483 0 33.637 8.763 33.637 27.419 0 18.938-12.154 27.701-33.637 27.701h-24.875Zm112.784 107.413h38.16V24.237h-38.16zm133.419 3.675c45.51 0 78.299-34.485 78.299-76.885 0-42.4-32.79-77.168-78.299-77.168-45.51 0-78.299 34.768-78.299 77.168 0 42.4 32.79 76.885 78.299 76.885Zm-40.139-76.885c0-22.896 15.83-42.4 40.139-42.4 24.31 0 40.139 19.504 40.139 42.4 0 22.896-15.83 42.117-40.139 42.117-24.31 0-40.139-19.221-40.139-42.117Zm191.083 73.21h20.917v-33.92h-15.829c-7.35 0-11.872-4.24-11.872-13.568v-66.992h31.093V83.597h-31.093V49.959l-38.16 3.958v29.68h-20.635v32.506h20.635v68.971c0 31.941 15.83 45.51 44.944 45.51Z'
          className='fill-current'
        />
        <circle
          className='fill-white drop-shadow-[0_5px_5px_rgb(0_0_0_/_0.3)]'
          cx='128'
          cy='128'
          r='128'
        />
        <path
          d='m129.936 175.773 73.916-61.606-7.454 35.07a15 15 0 0 1-5.16 8.48L117.72 218l7.143-33.806a15 15 0 0 1 5.072-8.421Z'
          className='fill-secondary'
        />
        <path
          d='M50 208.111 192.922 91.413a15 15 0 0 0 5.155-8.36l7.747-34.812L62.321 165.532a15 15 0 0 0-5.189 8.539L50 208.11Z'
          className='fill-primary'
        />
        <path
          d='m63.181 100.914 73.607-61.61-7.152 34.997a15 15 0 0 1-5.185 8.596l-73.465 60.241 7.147-33.823a15 15 0 0 1 5.048-8.401Z'
          className='fill-brand-black'
        />
      </g>
    </svg>
  );
}

export function Lockup(props) {
  return (
    <BrandContext>
      <LockupSVG {...props} />
    </BrandContext>
  );
}

function VerticalLockupSVG(props) {
  return (
    <svg viewBox='0 0 514 704' {...props}>
      <path
        d='M.6 701h26.88v-54.912h51.072V622.28H27.48v-31.488h52.032V566.6H.6zm93.312 0h25.92v-99.84h-25.92V701Zm-2.688-123.456c0 8.448 6.72 15.36 15.552 15.36 9.024 0 15.552-6.72 15.552-15.36 0-8.256-6.528-15.168-15.552-15.168-8.832 0-15.552 6.912-15.552 15.168ZM173.016 701h14.208v-23.04h-10.752c-4.992 0-8.064-2.88-8.064-9.216V623.24h21.12v-22.08h-21.12v-22.848L142.488 581v20.16h-14.016v22.08h14.016v46.848c0 21.696 10.752 30.912 30.528 30.912Zm27.072 0h26.88v-48.768H245.4c30.144 0 48.576-14.784 48.576-43.2 0-28.224-18.432-42.432-48.576-42.432h-45.312V701Zm26.88-72.96V590.6h16.896c14.592 0 22.848 5.952 22.848 18.624 0 12.864-8.256 18.816-22.848 18.816h-16.896ZM303.576 701h25.92V560.84h-25.92zm90.624 2.496c30.912 0 53.184-23.424 53.184-52.224 0-28.8-22.272-52.416-53.184-52.416s-53.184 23.616-53.184 52.416c0 28.8 22.272 52.224 53.184 52.224Zm-27.264-52.224c0-15.552 10.752-28.8 27.264-28.8s27.264 13.248 27.264 28.8c0 15.552-10.752 28.608-27.264 28.608s-27.264-13.056-27.264-28.608ZM496.728 701h14.208v-23.04h-10.752c-4.992 0-8.064-2.88-8.064-9.216V623.24h21.12v-22.08h-21.12v-22.848L466.2 581v20.16h-14.016v22.08H466.2v46.848c0 21.696 10.752 30.912 30.528 30.912Z'
        className='fill-current'
      />
      <g transform='translate(9, 5)'>
        <circle
          className='fill-white drop-shadow-[0_5px_5px_rgb(0_0_0_/_0.3)]'
          cx='248'
          cy='248'
          r='248'
        />
        <path
          d='m248.005 343.682 146.958-122.484-15.467 72.77a15 15 0 0 1-5.16 8.481L228.084 422.375l14.848-70.271a15 15 0 0 1 5.072-8.422Z'
          className='fill-secondary'
        />
        <path
          d='m96.875 403.215 280.686-229.184a15 15 0 0 0 5.155-8.36l16.069-72.205L116.9 323.862a15 15 0 0 0-5.189 8.538l-14.837 70.815Z'
          className='fill-primary'
        />
        <path
          d='M118.686 198.64 265.027 76.153 250.17 148.85a15 15 0 0 1-5.185 8.595L98.785 277.33l14.852-70.288a15 15 0 0 1 5.049-8.402Z'
          className='fill-brand-black'
        />
      </g>
    </svg>
  );
}

export function VerticalLockup(props) {
  return (
    <BrandContext>
      <VerticalLockupSVG {...props} />
    </BrandContext>
  );
}

function AppIconSVG(props) {
  return (
    <svg viewBox='0 0 512 512' {...props}>
      <g transform='translate(50 50)'>
        <path
          d='M117.939 0H294.06c41.01 0 55.881 4.27 70.874 12.288 14.992 8.018 26.759 19.785 34.777 34.777C407.73 62.058 412 76.93 412 117.94v176.12c0 41.01-4.27 55.881-12.288 70.874-8.018 14.992-19.785 26.759-34.777 34.777C349.942 407.73 335.07 412 294.06 412H117.94c-41.01 0-55.881-4.27-70.874-12.288-14.992-8.018-26.759-19.785-34.777-34.777C4.27 349.942 0 335.07 0 294.06V117.94c0-41.01 4.27-55.881 12.288-70.874 8.018-14.992 19.785-26.759 34.777-34.777C62.058 4.27 76.93 0 117.94 0Z'
          className='fill-white drop-shadow-[0_5px_5px_rgb(0_0_0_/_0.3)]'
        />
        <path
          d='m207.372 274.729 108.21-90.062-11.215 52.688a15 15 0 0 1-5.168 8.483L191.534 334l10.759-50.847a15 15 0 0 1 5.08-8.424Z'
          className='fill-secondary'
        />
        <path
          d='M94 319.778 301.608 150.5a15 15 0 0 0 5.162-8.362l11.653-52.287-208.48 170.159a15 15 0 0 0-5.195 8.54L94 319.778Z'
          className='fill-primary'
        />
        <path
          d='M111.238 167.065 218.995 77l-10.768 52.616a15 15 0 0 1-5.192 8.598L95.42 226.334l10.763-50.865a15 15 0 0 1 5.055-8.404Z'
          className='fill-brand-black'
        />
      </g>
    </svg>
  );
}

export function AppIcon(props) {
  return (
    <BrandContext>
      <AppIconSVG {...props} />
    </BrandContext>
  );
}