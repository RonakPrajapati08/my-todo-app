import React from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
    const [darkMode, setDarkMode] = React.useState(false);
  
    const toggleTheme = () => {
      setDarkMode(!darkMode);
    };
  
    return (
      <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
        {props.children}
      </ThemeContext.Provider>
    );
};
export default ThemeProvider;

// const ThemeProvider = ThemeContext.Provider;
// const ThemeConsumer = ThemeContext.Consumer;

// export { ThemeProvider, ThemeConsumer };

// export default React.createContext({
//   isDarkTheme: false,
//   toggleTheme: () => {},
// });