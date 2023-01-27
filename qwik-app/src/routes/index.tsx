import { component$, createContext, useClientEffect$, useContext, useContextProvider, useLexicalScope, useResource$, useSignal, useStore, useStyles$ } from '@builder.io/qwik';
import { DocumentHead, RequestHandler, useEndpoint, useLocation } from '@builder.io/qwik-city';
import { Gallery } from '~/components/gallery/gallery';
import { SearchBox } from '~/components/searchField/searchBox';
import { allArticlesSchema, stateSchema } from '~/utils/utils';
// import { myCtx } from '~/root';
import styles from '../global.css?inline'
import { myCultureCtx, mySearchCtx, myUrlCtx } from './layout';
import { getData } from './newsFilter/build/dataFetch';
// import { CultureComponent, myCtx } from './layout';
// import { Link } from '@builder.io/qwik-city';
// export const newCtx = createContext(myCtx.id);

export const controller = new AbortController()
export const allArticles = new URL('https://newsapi.org/v2/everything')

export default component$(() => {
  const loc = useLocation()
// console.log(loc.query.cultureList);


  const urlState: stateSchema | any = useContext(myUrlCtx);
  const localURL = useStore({
    id: loc.href
  })

  allArticles.searchParams.set('language',loc.query.cultureList == undefined ? 'en' : loc.query.cultureList)
  loc.query.countryList == 'none' || loc.query.countryList == undefined ? allArticles.searchParams.delete('country') : allArticles.searchParams.set('country', loc.query.countryList)
  allArticles.searchParams.set('pageSize',loc.query.resultsCount == undefined ? Math.min(10).toString() : loc.query.resultsCount)
  allArticles.searchParams.set('page',loc.query.pageNumber == undefined ? Math.min(1).toString() : loc.query.pageNumber)
  allArticles.searchParams.set('domains', 'bbc.co.uk, techcrunch.com, engadget.com')

  // useClientEffect$(() => {

  //   // console.log(allArticles);
  //   // console.log(localStorage.getItem('culture'))
  //   // localURL.id = urlState
  //   allArticles.searchParams.set('language', localStorage.getItem('culture'))
  //   window.addEventListener('submit', function () {
  //     // console.log('localHome', localURL.id);
  //     localURL.id = urlState

  //   })
  // },{eagerness:'load'})
  // console.log('u',allArticles);
  

  const newsResource = useResource$<allArticlesSchema | stateSchema | any>(async ({ track, cleanup }) => {


    track(() => localURL.id)
    // console.log(allArticles);
    cleanup(() => controller.abort('cleanup'))
    const res = await getData(allArticles.href, controller)
    // console.log(res);

    return res
  })

  useStyles$(styles)
  return (
    <>
      <Gallery data={newsResource.value} />

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

