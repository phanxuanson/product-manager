module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          primary: ['Open Sans', 'sans-serif'],
          secondary: ['Montserrat', 'sans-serif'],
          tertiary: ['Cabin', 'sans-serif'],
          quaternary: ['HighVoltage Rough', 'sans-serif'],
        },
        
        colors: {
          primary: '#00072B',
          secondary: '#7FC008',
          tertiary: '#DB303F',
          quaternary: '#303030',
          neutral: '#475467',
          warning: '#DB303F',
          title: '#0C0033',
        },
      },
    },
    plugins: [],
  }