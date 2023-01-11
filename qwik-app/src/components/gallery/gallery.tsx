import {
  component$,
  Resource,
  useClientEffect$,
  useContext,
  useResource$,
  useStore,
  useStylesScoped$,
} from '@builder.io/qwik'
import { MyCtx } from '~/routes/layout'
import styles from './gallery.css?inline'

export default component$(() => {
  useStylesScoped$(styles)

  const state: any = useContext(MyCtx)
  // console.log(state);

  const urlValue: any = new URL('https://newsapi.org/v2/top-headlines')
  urlValue.searchParams.set('language', state.val.toLowerCase())
  // console.log(urlValue.toString());
  const store = useStore({
    tracker: getTopHeadlines(urlValue)
  })

  //data resource
  const newsResource = useResource$(async ({ track, cleanup }) => {
    const controller = new AbortController()

    track(() => store.tracker)
    //track the culture value
    //update URL when this value changes
    track(() => state.val)
    cleanup(() =>controller.abort())
    urlValue.searchParams.set('language', state.val.toLowerCase())
    const val = await getTopHeadlines(urlValue, controller)

    return val
  })


  // useClientEffect$((): any => {
  //   if (typeof localStorage !== undefined) {
  //     let dummy: string = 'test'
  //     try {
  //       localStorage.setItem('testKey', dummy)
  //       if (localStorage.getItem('testKey') == dummy) {
  //         //enabled
  //         state.val = localStorage.getItem('culture')
  //         // console.log('s', state.val);
  //         window.addEventListener('change', function (e: any) {

  //           state.val = e.target.value

  //           localStorage.setItem('culture', state.val)

  //         })
  //       } else {
  //         //disabled
  //         throw new Error('localStorage is diabled')
  //       }
  //     } catch (e) {
  //       throw new Error('Issue with localStorage test')
  //     }
  //   } else {
  //     throw new Error('No local storage support')
  //   }

  // }, { eagerness: 'load' })

  return (
    <main class="articleGallery">
      <Resource
        value={newsResource}
        onPending={() => <div>Loading..</div>}
        onResolved={(data: any) => (
          <>
            {
              <>
                {data.articles.map((e: any) => {
                  // console.log(e);

                  return (
                    <main>
                      <article aria-label="Article Card" class="articleCard">
                        <h4 aria-label="Article Heading">{e.title}</h4>
                        <img src={e.urlToImage} alt='News Cover Image' />
                        <p aria-label="Article Description">{e.description}</p>
                        <p>Read more:&nbsp;
                          <a aria-label={e.url} href={e.url}>
                            {e.url}
                          </a></p>
                      </article>
                    </main>
                  )
                })}
              </>
            }
          </>
        )}
        onRejected={(reason: any) => <div>Error:{reason}</div>}
      />
    </main>
  )
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
  
  // await fetch(url, {
  //   method: 'GET',
  //   mode:'cors',
  //   headers: {
  //     Accept: 'text/html',
  //     'X-Api-Key': 'a6968bfc7b6f4ab4ace5d8a9542e0f65',
  //   },
  //   signal: controller?.signal,
  // })
  //   .then((res) => {
  //     return res.json()
  //   })
  //   .catch((error) => console.log('e', error))
  return response.status == 'ok'
    ? response
    : Promise.reject('Issue with data fetch')
}
