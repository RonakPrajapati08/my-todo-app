// ComponentTwo.js
import React, { useContext } from 'react';
import { ThemeConsumer } from './ThemeContext';

function ComponentTwo() {
  return (
    <ThemeConsumer>
      {({ isDarkTheme }) => (
        <div>
          <h2>Component Two</h2>
          <p>Dark theme: {isDarkTheme ? 'Enabled' : 'Disabled'}</p>
        </div>
      )}
    </ThemeConsumer>
  );
}

export default ComponentTwo;