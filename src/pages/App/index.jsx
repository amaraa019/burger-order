import React from 'react';
import css from './style.module.css';
import Toolbar from '../../pages/Toolbar';
import BurgerBuilder from '../../pages/BurgerBuilder';

function App() {
  return (
    <div>
        <Toolbar/>
        <main class={css.content}></main>
    </div>
  );
}

export default App;
