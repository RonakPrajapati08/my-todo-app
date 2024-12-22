// ComponentOne.js
import React, { useContext } from 'react';
import { ThemeConsumer } from './ThemeContext';

function ComponentOne() {
  return (
    <ThemeConsumer>
      {({ isDarkTheme }) => (
        <div>
          <h2>Component One</h2>

            
          
          <p>Dark theme: {isDarkTheme ? 'Enabled' : 'Disabled'}</p>
        </div>
      )}
    </ThemeConsumer>
  );
}

export default ComponentOne;