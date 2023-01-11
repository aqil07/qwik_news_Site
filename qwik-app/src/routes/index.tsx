import { component$, createContext, useContext, useContextProvider, useSignal, useStore, useStyles$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { SearchBox } from '~/components/searchField/searchBox';
// import { myCtx } from '~/root';
import Gallery from '../components/gallery/gallery';
import styles from '../global.css?inline'
// import { CultureComponent, myCtx } from './layout';
// import { Link } from '@builder.io/qwik-city';
// export const newCtx = createContext(myCtx.id);


export default component$(() => {
  const loc = useLocation()
  
  useStyles$(styles)
  return (
    <>
      <Gallery />

    </>
  );
});

export const head: DocumentHead = {
  title: 'The News Site',
  meta: [
    {
      name: 'description',
      content: 'News site description',
    },
  ],
};

