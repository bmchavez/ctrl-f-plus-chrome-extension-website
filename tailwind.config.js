const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    //styleName: subtitle;
    // font-family: Inter; font-size: 23px; font-weight: 600; line-height: 30px; letter-spacing: 0em; text-align: center;

    extend: {
      fontSize: {
        // sm: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
        // 'fs-md': ['16px', { lineHeight: '20.8px', fontWeight: '600' }],
        // 'fs-sm': ['14px', { lineHeight: '24px' }],
        // 'fs-md2': ['18px', { lineHeight: '24.51px', fontWeight: '400' }],
        // 'fs-lg': ['18px', { lineHeight: '24.51px', fontWeight: '600' }],
        // 'fs-md4': ['18px', { lineHeight: '27px', fontWeight: '400' }],
        // 'fs-xl': ['55px', { lineHeight: '55px', fontWeight: '800' }],

        'fs-base': ['1rem', { lineHeight: '130%', fontWeight: '600' }],
        'fs-sm': ['0.875rem', { lineHeight: '1.5rem' }],
        'fs-md': ['1.125rem', { lineHeight: 'normal', fontWeight: '400' }],
        'fs-md-bold': [
          '1.125rem',
          { lineHeight: '1.53125rem', fontWeight: '600' },
        ],
        'fs-lg': ['1.125rem', { lineHeight: '1.5', fontWeight: '400' }], // body18
        'fs-x0': ['2.0625rem', { lineHeight: '100%', fontWeight: '800' }],
        'fs-xl': ['3.4375rem', { lineHeight: '120%', fontWeight: '800' }], // INTRO

        //
        subtitle: ['1.4375rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      screens: {
        // tablet: '640px',
        // laptop: '768px',
        // desktop: '1024px',
        // wide: '1280px',

        // sm: '640px',
        // md: '768px',
        // lg: '1024px',
        // xl: '1280px',
        // '2xl': '1536px',

        // sm: '576px', // Small devices (landscape phones, 576px and up)
        // md: '768px', // Medium devices (tablets, 768px and up)
        // lg: '992px', // Large devices (desktops, 992px and up)
        // xl: '1200px', // Extra large devices (large desktops, 1200px and up)
        // xxl: '1400px', //

        // sm: '320px', // Extra small devices
        // md: '480px', // Small devices, large smartphones
        // lg: '768px', // Medium devices, tablets
        // xl: '900px', // Large tablets, small laptops
        // '2xl': '1024px', // Small desktops
        // '3xl': '1280px', // Large desktops
        // '4xl': '1920px', // HD screens
        // '5xl': '3840px', // 4K screens

        tablet: '480px',
        // tablet2: '640px',
        'tab-pro': '768px',
        laptop: '900px', //*
        desktop: '1024px',
        wide: '1280px',
        '2xl': '1536px',

        // tablet: '430px',
        // 'tab-pro': '768px',
        // laptop: '900px',
        // desktop: '1024px',
        // wide: '1280px',

        // tablet: '430px',
        // // 'tablet-pro': '640px',
        // 'tablet-pro': '768px',
        // // laptop: '768px',
        // laptop: '900px',
        // desktop: '1024px',
        // wide: '1280px',
      },
      spacing: {
        6.5: '1.625rem', // 26px
        18: '4.5rem', // 72px
        21: '5.25rem', // 84px
        22: '5.5rem', // 88px
        23: '5.75rem', // 92px
        25: '6.25rem', // 100px
        26: '6.5rem', // 104px
        30: '7.5rem', // 120px
        109: '27.25rem', // 436px
        146: '36.5rem', // 584px
        147: '36.75rem', // 588px
        292: '73rem', // 1168px
      },
      maxWidth: {
        94: '23.5rem', // 376px
        174: '43.5rem', // 696px
        276: '69rem', // 1104px
        292: '73rem', // 1168px
        324: '81rem', // 1296px
      },
      minWidth: {
        94: '23.5rem', // 376px
        174: '43.5rem', // 696px
        276: '69rem', // 1104px
        292: '73rem', // 1168px
        324: '81rem', // 1296px
      },
      minHeight: {
        146: '36.5rem', // 584px
        154: '38.5rem', // 616px
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        'open-sans': ['var(--font-open-sans)'],
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        'light-blue': '#B0D6EC',
        'light-purple': '#C8ADEB',

        // TODO: WHICH COLOR IS THE HIGHLIGHT COLOR - SEE BLOG HEADER CARD?
        'highlight-focus': '#53E7BB',
        'highlight-focus-1': '#48D0A8',
        dark1: '#1B2528',
        primary1: '#0C3440',
        primary2: '#128DA1',
        'text-dark': '#434343',
      },
      // animation: {
      //   'gradient-x': 'gradient-x .5s ease infinite',
      //   gradient: 'animatedgradient 6s ease infinite alternate',
      // },
      // keyframes: {
      // 'gradient-x': {
      //   '0%, 100%': {
      //     'background-size': '200% 200%',
      //     'background-position': 'right center',
      //   },
      //   '50%': {
      //     'background-size': '200% 200%',
      //     'background-position': 'left center',
      //   },
      // },
      // },

      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
        'gradient-x': 'gradient-x 10s ease infinite',
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },

      cursor: {
        'magnifying-glass': `url('/images/magnifyicon.svg'), auto`,
      },
      boxShadow: {
        bg: '-117.23332977294922px 117.23332977294922px 117.23332977294922px 0px rgba(255, 255, 255, 0.10) inset, 117.23332977294922px -117.23332977294922px 117.23332977294922px 0px rgba(165, 165, 165, 0.10) inset',
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    ...(process.env.NODE_ENV === 'development'
      ? [require('tailwindcss-debug-screens')]
      : []),
  ],
};
