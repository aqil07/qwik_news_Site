import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';
import { FormFilter } from '~/routes/layout';
import {Nav} from '../nav/nav';
import { SearchBox } from '../searchField/searchBox';
import styles from './header.css?inline';

export const Header = component$(({}) => {
  useStylesScoped$(styles);

  
  return (
    <header>
      {/* <FormFilter/> */}
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
