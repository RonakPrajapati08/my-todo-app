import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import  ThemeContext  from './ThemeContext';
import "../App.css";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {darkMode ? <FaMoon /> : <FaSun />}
    </button>
  );
};

const LoginForm = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <form className={darkMode ? 'dark' : ''}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <button type="submit">Login</button>
      <ThemeToggle />
    </form>
  );
};

export default LoginForm;