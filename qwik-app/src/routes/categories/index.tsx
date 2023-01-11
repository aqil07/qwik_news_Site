import { component$, useClientEffect$, useContext, useStyles$ } from '@builder.io/qwik'
import { DocumentHead, useLocation } from '@builder.io/qwik-city'
import styles from '../categories/categories.css?inline'
import { MyCtx } from '../layout'
export default component$(() => {

  useStyles$(styles)


  const state: any = useContext(MyCtx)
  const location = useLocation()
  const catStr =
    'business,entertainment,general,health,science,sports,technology'
  const strArr = catStr.split(',')



  //Effect
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
