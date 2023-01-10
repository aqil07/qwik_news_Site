import { component$, useStylesScoped$ } from '@builder.io/qwik';
import Nav from '../nav/nav';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      
      <Nav/>
      <div class='homeHeader'>
      <h1>
        Welcome to the News Site <span class="lightning">🗞️ 📰</span>
      </h1>
      <p>Browse around and read some articles that interest you 🔍</p>
    
      </div>
    </header>
  );
});
