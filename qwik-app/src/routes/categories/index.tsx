import { component$, useClientEffect$, useContext, useStyles$ } from '@builder.io/qwik'
import { DocumentHead, useLocation } from '@builder.io/qwik-city'
import styles from '../categories/categories.css?inline'
// import { MyCtx } from '../layout'
export default component$(() => {

  useStyles$(styles)


  // const state: any = useContext(MyCtx)
  const location = useLocation()
  const catStr =
    'business,entertainment,general,health,science,sports,technology'
  const strArr = catStr.split(',')


  return (
    <main class='categories' aria-label='Category Page'>
      <h1 aria-label='Categories'>Categories</h1>
      {strArr.map((e) => {
        const url = location.pathname + e
        const ariaLabel = 'List Item: ' + e
        return (
          <ul class='categoryList' aria-label='Category List'>
            <li aria-label={ariaLabel}>
              <a href={url}>{e.toUpperCase()}</a>
            </li>
          </ul>
        )
      })}
    </main>
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
