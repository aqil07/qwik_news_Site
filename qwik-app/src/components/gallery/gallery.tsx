import {
  component$,
  Resource,
  useResource$,
  useStore,
  useStylesScoped$,
} from '@builder.io/qwik'
import styles from './gallery.css?inline'

export default component$(() => {
  useStylesScoped$(styles)


  const urlValue = `https://newsapi.org/v2/top-headlines?language=en`

  const store = useStore({
    tracker: getTopHeadlines(urlValue)
    
  })

  const newsResource = useResource$(async ({ track, cleanup }) => {
    const controller = new AbortController()
    track(() => store.tracker )
    cleanup(() => controller.abort())
    const val = await getTopHeadlines(urlValue, controller)

    return val
  })

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
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
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
