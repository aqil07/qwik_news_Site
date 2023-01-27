import {
  component$,
  Resource,
  useStylesScoped$,

} from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'

import { allArticlesSchema, allSourcesSchema, stateSchema } from '~/utils/utils'
import styles from './gallery.css?inline'

export const controller = new AbortController()
export const allArticles = new URL('https://newsapi.org/v2/everything')

export const Gallery = component$(({ data }: allSourcesSchema | allArticlesSchema | any) => {
  useStylesScoped$(styles)
  // console.log('d',data);
  const location = useLocation()
// console.log(location);

const pageHeader = (location.params.hasOwnProperty('catId') ? location.params.catId : location.pathname.replace('/','').replace('/',''))

// console.log(pageHeader);



  return (
    <>
      <h2 class='pageHeader'>{pageHeader}</h2>
      <main class="articleGallery"

      >
        <Resource
          value={data}
          onPending={() => <div>Loading...</div>}
          onRejected={(e) => {

            return (

              <><div>Failed to get data : {e}</div>
                {/* {console.log(e)} */}
              </>

            )

          }
          }
          onResolved={(news: allSourcesSchema) => {
            // console.log(news);
            const tmpArticles: allArticlesSchema = news
            const tmpSources: allSourcesSchema = news

            let dataToShow;
            // console.log(dataToShow);
            if (tmpSources.hasOwnProperty('sources')) {
              // console.log(tmp.sources);

              dataToShow = tmpSources.sources
            } else {
              dataToShow = tmpArticles.articles
            }


            return (
              <>
                {
                  dataToShow?.map((e: any) => {
                    // console.log(e);

                    return (
                      // <main>
                      <article aria-label="Article Card" class="articleCard">
                        {e.title == undefined ? <h4>{e.name}</h4> : <h4 aria-label="Article Heading">{e.title}</h4>}
                        {e.urlToImage == null || e.urlToImage == undefined ? <span style='display:none;'></span> : <img loading='lazy' src={e.urlToImage} alt='News Cover Image' />}
                        <p aria-label="Article Description">{e.description}</p>
                        <p>Read more:&nbsp;
                          <a aria-label={e.url} href={e.url}>
                            {e.url}
                          </a></p>
                      </article>
                      // </main>
                    )
                  })
                }

              </>
            )
          }}
        />
        {

          // data == null ? null : data.map((e: any) => {
          //   // console.log(e);

          //   return (
          //     // <main>
          //     <article aria-label="Article Card" class="articleCard">
          //       <h4 aria-label="Article Heading">{e.title}</h4>
          //       <img loading='lazy' src={e.urlToImage} alt='News Cover Image' />
          //       <p aria-label="Article Description">{e.description}</p>
          //       <p>Read more:&nbsp;
          //         <a aria-label={e.url} href={e.url}>
          //           {e.url}
          //         </a></p>
          //     </article>
          //     // </main>
          //   )
          // })
        }
      </main>
    </>
  )
})
