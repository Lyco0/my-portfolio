const config = {
  plugins: ["@tailwindcss/postcss"],
  theme:{
    extend:{
      colors:{
        lightHover:'#fcf4ff',
        darkHover:'#2a004a',
        darkTheme:'#11001F',
      },
      fontFamily:{
        Outfit:["Outfit", "sans-sarif"],
        Ovo:["Ovo", "serif"]
      }
    },
  },
};

export default config;
