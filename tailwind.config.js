export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      animation: {
        codeMove: 'codeMove 20s linear infinite'
      },
      keyframes: {
        codeMove: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" }
        }
      }
    }
  },
  plugins: []
}
