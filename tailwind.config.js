/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: "#00ff9f",
          blue: "#00d4ff",
          purple: "#b700ff",
          pink: "#ff00ff",
          yellow: "#ffcc00",
        },
        retro: {
          black: "#0a0a0f",
          dark: "#0d1117",
          card: "#0f1923",
          border: "#1a2535",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "monospace"],
        mono: ["Share Tech Mono", "Courier New", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-retro":
          "linear-gradient(rgba(0,255,159,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,159,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "none", opacity: "1" },
          "33%": { transform: "skew(-0.5deg) translateX(2px)", opacity: "0.8", filter: "hue-rotate(90deg)" },
          "66%": { transform: "skew(0.5deg) translateX(-2px)", opacity: "0.9", filter: "hue-rotate(-90deg)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
          "75%": { opacity: "0.95" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        neonPulse: {
          "0%, 100%": { boxShadow: "0 0 5px #00ff9f, 0 0 10px #00ff9f, 0 0 20px #00ff9f" },
          "50%": { boxShadow: "0 0 2px #00ff9f, 0 0 5px #00ff9f, 0 0 10px #00ff9f" },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
      animation: {
        glitch: "glitch 4s infinite",
        flicker: "flicker 3s infinite",
        scanline: "scanline 8s linear infinite",
        "neon-pulse": "neonPulse 2s ease-in-out infinite",
      },
      boxShadow: {
        "neon-green": "0 0 5px #00ff9f, 0 0 10px #00ff9f, 0 0 20px #00ff9f",
        "neon-blue": "0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 20px #00d4ff",
        "neon-purple": "0 0 5px #b700ff, 0 0 10px #b700ff, 0 0 20px #b700ff",
        "neon-pink": "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff",
        "neon-sm-green": "0 0 3px #00ff9f, 0 0 6px #00ff9f",
        "neon-sm-blue": "0 0 3px #00d4ff, 0 0 6px #00d4ff",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
