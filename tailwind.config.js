/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}","./components/**/*.{js,jsx}","./lib/**/*.{js}"],
  theme: { extend: { colors: { primary: "#0A1F44", secondary: "#16A34A", soft: "#F8FAFC" }, fontFamily:{ tajawal:["Tajawal","sans-serif"]}, borderRadius:{ xl:"20px"} } },
  plugins: []
};
