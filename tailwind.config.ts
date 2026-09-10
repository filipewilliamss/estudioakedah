import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        'barlow-condensed': ['"Barlow Condensed"', 'sans-serif'],
      },
      fontSize: {
        'fluid-10': 'var(--text-10)',
        'fluid-12': 'var(--text-12)',
        'fluid-13': 'var(--text-13)',
        'fluid-16': 'var(--text-16)',
        'fluid-20': 'var(--text-20)',
        'fluid-26': 'var(--text-26)',
        'fluid-28': 'var(--text-28)',
        'fluid-44': 'var(--text-44)',
        'fluid-50': 'var(--text-50)',
        'fluid-54': 'var(--text-54)',
        'fluid-80': 'var(--text-80)',
        'fluid-100': 'var(--text-100)',
        'fluid-110': 'var(--text-110)',
        'fluid-125': 'var(--text-125)',
        'fluid-130': 'var(--text-130)',
        'fluid-150': 'var(--text-150)',
        'fluid-190': 'var(--text-190)',
        'fluid-280': 'var(--text-280)',
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        kiiro: {
          DEFAULT: "hsl(var(--kiiro))",
          dark: "hsl(var(--kiiro-dark))",
          glow: "hsl(var(--kiiro-glow))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          hover: "hsl(var(--surface-hover))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Brand Kit Daniel Silva (Parte 3)
        'off-white': 'var(--off-white)',
        preto: 'var(--preto)',
        bege: 'var(--bege)',
        marinho: 'var(--marinho)',
        'azul-claro': 'var(--azul-claro)',
        taupe: 'var(--taupe)',
        marrom: 'var(--marrom)',
        'neutra-1': 'var(--neutra-1)',
        'neutra-2': 'var(--neutra-2)',
        'neutra-3': 'var(--neutra-3)',
        'neutra-4': 'var(--neutra-4)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
