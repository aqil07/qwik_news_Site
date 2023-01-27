import {
  component$,
  Resource,
  useClientEffect$,
  useContext,
  useResource$,
  useSignal,
  useStore,
  useStyles$,
} from '@builder.io/qwik'
import { DocumentHead, useLocation } from '@builder.io/qwik-city'
import { Gallery } from '~/components/gallery/gallery';
import { getServerData } from '~/data/getServerData';
import { myCultureCtx, myUrlCtx, pageNumCtx, pageSizeCtx } from '~/routes/layout';
import { getData } from '~/routes/newsFilter/build/dataFetch';
import { allArticlesSchema, stateSchema } from '~/utils/utils';
// import { MyCtx } from '~/routes/layout'
import styles from '../categories.css?inline'

export const newsCateogoryAPI: URL = new URL('https://newsapi.org/v2/top-headlines')
export const controller = new AbortController();
//component
export default component$(() => {


  const culture: stateSchema = useContext(myCultureCtx)
  const pageSize: stateSchema = useContext(pageSizeCtx)
  const pageNum: stateSchema = useContext(pageNumCtx)


  // urlState.value = newsCateogoryAPI

  useStyles$(styles)

  // const state: any = useContext(MyCtx)
  const location = useLocation()
  const params = location.pathname.replace(/\/categories\//, '').replace(/\//, '')
  // console.log(params);


  const urlState_Category = useStore({
    value: location.href
  })

  newsCateogoryAPI.searchParams.set('language', location.query.cultureList == undefined ? 'en' : location.query.cultureList)
  location.query.countryList == 'none' || location.query.countryList == undefined ? newsCateogoryAPI.searchParams.delete('country') : newsCateogoryAPI.searchParams.set('country', location.query.countryList)
  // newsCateogoryAPI.searchParams.set('country', location.query.countryList == undefined ? 'en' : location.query.countryList)
  location.query.q == 'none' || location.query.q == undefined ? newsCateogoryAPI.searchParams.delete('q') : newsCateogoryAPI.searchParams.set('q', location.query.q)
  newsCateogoryAPI.searchParams.set('category', params)
  newsCateogoryAPI.searchParams.set('pageSize', location.query.resultsCount == undefined ? Math.min(10).toString() : location.query.resultsCount)
  newsCateogoryAPI.searchParams.set('page', location.query.pageNumber == undefined ? Math.min(1).toString() : location.query.pageNumber)

  // console.log(newsCateogoryAPI.href);
  // const categoryResource: any = useStore({
  //   value: {}
  // })

  const categoryResource = useResource$<allArticlesSchema | stateSchema | any>(async ({ track, cleanup }) => {


    track(() => urlState_Category.value)
    // console.log(newsCateogoryAPI);
    cleanup(() => controller.abort('cleanup'))
   const res = await getData(newsCateogoryAPI.href, controller)
  //  console.log(res);
   
    return res
    // console.log(res);

  })

  const articleRef = useSignal<Element>()


  return (
    <>
    <Gallery data={categoryResource.value} />
    </>
  )
})


export const head: DocumentHead = {
  title: 'The News Site',
  meta: [
    {
      name: 'description',
      content: 'News site description',
    },
  ],
}
