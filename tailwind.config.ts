import type {Config} from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAF6F1',     // cream
        card: '#F1E7DE',   // latte
        ink: '#2B2A28',    // ink
        coffee: '#8C6149', // coffee
        rose: '#D7A9A3',   // soft rose
        // mocha (dark) palette
        'bg-dark': '#1F1A17',
        'card-dark': '#2A231F',
        'ink-dark': '#EFE9E6',
        'coffee-dark': '#C29B84',
        'rose-dark': '#B98E88'
      },
      boxShadow: {
        soft: '0 12px 32px rgba(0,0,0,0.06)'
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    }
  },
  plugins: []
} satisfies Config;
