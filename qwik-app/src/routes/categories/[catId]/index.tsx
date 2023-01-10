import {
  component$,
  Resource,
  useResource$,
  useSignal,
  useStore,
  useStyles$,
} from '@builder.io/qwik'
import { DocumentHead, useLocation } from '@builder.io/qwik-city'
import styles from '../categories.css?inline'

//component
export default component$(() => {
  useStyles$(styles)
  const location = useLocation()
  const params = location.params

  const store = useStore({
    queryParams: params.catId,
  })

  const urlValue = `https://newsapi.org/v2/top-headlines?language=en&category=${store.queryParams}`

  const newsResource = useResource$(async ({ track, cleanup }) => {
    track(() => store.queryParams)
    const controller = new AbortController()
    cleanup(() => controller.abort())
    const val = await getTopHeadlines(urlValue, controller)
    // console.log(val);

    return val
  })
  const articleRef = useSignal<Element>()

  return (
    <div class='container'>
   <div class='buttons'>
    <button
        class="backBTN"
        onMouseMove$={() => {
          if (articleRef.value !== undefined) {
              articleRef.value.scrollLeft -= 20
          }
        }}
       
      >Backward</button>
      <button
        class="moveBTN"
        onMouseMove$={() => {
          if (articleRef.value !== undefined) {
              articleRef.value.scrollLeft += 20
          }
        }}
       
      >Forward</button>
      </div>
      <div ref={articleRef} class="articles">
        <Resource
          value={newsResource}
          onPending={() => <div>Loading..</div>}
          onResolved={(data: any) => (
            <>
              <h1>{store.queryParams.toUpperCase()}</h1>
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
        />
      </div>
    </div>
  )
})

//data fetch
export async function getTopHeadlines(
  url: string,
  controller?: AbortController
) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'text/html',
      'X-Api-Key': 'a6968bfc7b6f4ab4ace5d8a9542e0f65',
    },
    signal: controller?.signal,
  })
    .then((res) => {
      return res.json()
    })
    .catch((error) => console.log(error))

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
