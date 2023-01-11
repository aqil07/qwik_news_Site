import { component$, createContext, Slot, useClientEffect$, useContext, useContextProvider, useSignal, useStore, useStyles$ } from '@builder.io/qwik'
import Footer from '~/components/footer/footer'
import { Header } from '../components/header/header'
import styles from '../global.css?inline'


export const MyCtx = createContext('myCtx')
export default component$(() => {
  const cultureValues = 'en,ar,de,es,fr,he,it,nl,no,pt,ru,sv,ud,zh'.split(',')
  const culture = useStore({
    values: cultureValues,
    val: 'en'
  })
  useContextProvider(MyCtx, culture)
  useStyles$(styles)
  return (
    <div class='layout'>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer></Footer>
    </div>
  )
});


export const CultureComponent = component$(() => {

  const state: any = useContext(MyCtx)

  const cultureDD: any = useSignal(state.val)


  useClientEffect$((): any => {
    if (typeof localStorage !== undefined) {
      let dummy: string = 'test'
      try {
        localStorage.setItem('testKey', dummy)
        if (localStorage.getItem('testKey') == dummy) {
          //enabled
          state.val = localStorage.getItem('culture')
          // console.log('s', state.val);
          window.addEventListener('click', function (e: any) {
            // console.log(e);
            // if it is the dropdown element clicked 
            if (e.target.id == 'cultureDD' || e.target.id == 'cultureDDOption') {
              //store the value in state
              state.val = e.target.value
            }
            //store the value in storage
            localStorage.setItem('culture', state.val)

          })
        } else {
          //disabled
          throw new Error('localStorage is diabled')
        }
      } catch (e) {
        throw new Error('Issue with localStorage test')
      }
    } else {
      throw new Error('No local storage support')
    }

  }, { eagerness: 'load' })
  // console.log(state)
  return <>
    <label for="cultureList">Filter article results by culture:</label>

    <select class='cultureDD' onClick$={(e: any) => {

      state.val = e.target.value
      cultureDD.value = state.val
      // console.log('state.val',state.val);

    }} onChange$={(e: any) => {

      state.val = e.target.value
      cultureDD.value = state.val
      // console.log('state.val',state.val);

    }} id={cultureDD.value} name='cultureList'>
      {
        state.values.map((c: any) => {
          return <option class='cultureDDOption' id={c} value={c.toUpperCase()}>{c.toUpperCase()}</option>
        })
      }
    </select>
    <p>Your culture: {state.val.toUpperCase()}</p>
  </>
})
