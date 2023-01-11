import { component$, Resource, useClientEffect$, useContext, useResource$, useStyles$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { MyCtx } from "../layout";
import styles from './sources.css?inline'
export default component$(() => {

    useStyles$(styles)
    const state: any = useContext(MyCtx)

    const urlValue: any = new URL('https://newsapi.org/v2/top-headlines/sources')
    urlValue.searchParams.set('language', state.val.toLowerCase())
    //   urlValue.searchParams.set('category', store.queryParams)

    const newsResource = useResource$(async ({ track, cleanup }) => {
        const controller = new AbortController()
        // track(() => store.queryParams)
        track(() => state.val)
        cleanup(() => controller.abort())
        urlValue.searchParams.set('language', state.val.toLowerCase())
        // urlValue.searchParams.set('category', store.queryParams)
        const val = await getTopHeadlines(urlValue, controller)
        // console.log(val);

        return val
    })

    
    return <div class="articles">    <Resource
        value={newsResource}
        onPending={() => <div>Loading..</div>}
        onResolved={(data: any) => (
            <>
                {/* <h1>{store.queryParams.toUpperCase()}</h1> */}
                {
                    <>
                        {data.articles.map((e: any) => {
                            const newDesc: string | any = { __html: e.description }
                            return (
                                <article class="articleCard" aria-label="Article Card">
                                    <h4 aria-label="Article Heading">{e.title}</h4>
                                    <img src={e.urlToImage} alt="News Cover Image" />
                                    <p
                                        aria-label="Article Content"
                                        dangerouslySetInnerHTML={newDesc.__html}
                                    ></p>
                                    <a aria-label={e.url} href={e.url}>
                                        {e.url}
                                    </a>
                                </article>
                            )
                        })}
                    </>
                }
            </>
        )}
        onRejected={(reason: any) => <div>Error:{reason}</div>}
    /></div>
})



//data fetch
export async function getTopHeadlines(
    url: string,
    controller?: AbortController
) {

    const response = {
        status: 'ok',
        articles: [
            {
                source: {
                    id: null,
                    name: "Gizmodo.com"
                },
                author: "Lucas Ropek",
                title: "OG Bitcoin Core Developer Claims Hack Drained Nearly All His BTC",
                description: "Even cryptocurrency’s most accomplished tech wizards apparently aren’t immune from the occasional wallet-draining hack. Luke Dashjr, one of the original core developers for Bitcoin, claims that someone swiped hundreds of BTC from his accounts late last year—l…",
                url: "https://gizmodo.com/bitcoin-price-hack-217-btc-og-developer-luke-dashjr-1849944799",
                urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c8e3b3fe0595dfbab3656a5ba0e06e2c.jpg",
                publishedAt: "2023-01-03T20:48:00Z",
                content: "Even cryptocurrencys most accomplished tech wizards apparently arent immune from the occasional wallet-draining hack. Luke Dashjr, one of the original core developers for Bitcoin, claims that someone… [+2723 chars]"
            }
        ]
    }

    //   const response = await fetch(url, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'text/html',
    //     'X-Api-Key': 'a6968bfc7b6f4ab4ace5d8a9542e0f65',
    //   },
    //   signal: controller?.signal,
    // })
    //   .then((res) => {
    //     return res.json()
    //   })
    //   .catch((error) => console.log(error))

    return response.status == 'ok'
        ? response
        : Promise.reject('Issue with data fetch')
}

export const head: DocumentHead = {
    title: 'The News Site',
    meta: [
        {
            name: 'description',
            content: 'News site description',
        },
    ],
}
