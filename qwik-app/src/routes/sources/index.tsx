import { component$, Resource, useClientEffect$, useContext, useResource$, useStore, useStyles$ } from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";
import { Gallery } from "~/components/gallery/gallery";
import { getServerData } from "~/data/getServerData";
import { allArticlesSchema, stateSchema } from "~/utils/utils";
import { myCultureCtx } from "../layout";
import { getData } from "../newsFilter/build/dataFetch";
// import { MyCtx } from "../layout";
import styles from './sources.css?inline'
import data from '/home/aqil/Desktop/tmp.json'


export const sources_url = new URL('https://newsapi.org/v2/top-headlines/sources')


export default component$(() => {
    // console.log(JSON.stringify(data));



    useStyles$(styles)
    const culture: stateSchema | any = useContext(myCultureCtx)

    const urlSourcesState = useStore({
        value: sources_url
    })

    const location = useLocation()
    const tracker = useStore({
        value: location.href
    })

    //set url for data fetch
    sources_url.searchParams.set('language', location.query.cultureList == undefined ? 'en' : location.query.cultureList)
    location.query.countryList == 'none' || location.query.countryList == undefined ? sources_url.searchParams.delete('country') : sources_url.searchParams.set('country', location.query.countryList)
    // sources_url.searchParams.set('country', location.query.countryList == undefined ? 'en' : location.query.countryList)
    // sources_url.searchParams.set('category', params)
    sources_url.searchParams.set('pageSize', location.query.resultsCount == undefined ? Math.min(10).toString() : location.query.resultsCount)
    sources_url.searchParams.set('page', location.query.pageNumber == undefined ? Math.min(1).toString() : location.query.pageNumber)
  


    const sourceLinks = useResource$<allArticlesSchema | stateSchema | any>(async ({ track, cleanup }) => {


        const controller = new AbortController();
        track(() => tracker.value)
        // console.log(sources_url);
        cleanup(() => controller.abort('cleanup'))
       const res = await getData(sources_url.href, controller)
    //    console.log(res);
       
        return res
        // console.log(res);
    
      })

    return (
        <Gallery data={sourceLinks.value} />
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
