module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#24FFBC",
        secondary: "#F5F5F5",
        blackBg: "#0B0B0F",
        border: "#15171B",
        dark: "#83838D",
      },
      backgroundImage: {
        gradientTop:
          "linear-gradient(132.15deg, #0B0B0F 0%, rgba(26, 26, 34, 0.9) 95.96%)",
        gradientBottom:
          "linear-gradient(132.15deg, #211A1A 0%, #212127 95.96%)",
      },
      spacing: {
        lg: "20px",
        md: "16px",
        sm: "12px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        sfPro: ["SF Pro Display", "sans-serif"],
      },
    },
  },
};
