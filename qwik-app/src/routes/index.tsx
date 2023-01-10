import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Gallery from '../components/gallery/gallery';
import styles from '../global.css?inline'
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  useStyles$(styles)
  return (
    <>
    
    <Gallery/>
    
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

