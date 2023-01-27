import { component$, createContext, Slot, useClientEffect$, useContext, useContextProvider, useSignal, useStore, useStyles$, useTask$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import Footer from '~/components/footer/footer'
import { SearchBox } from '~/components/searchField/searchBox'
import { stateSchema } from '~/utils/utils'
import { Header } from '../components/header/header'
import styles from '../global.css?inline'


export const urlValue: URL = new URL('https://newsapi.org/v2/everything/')

export const myCultureCtx = createContext('myCultureCtx')

export const myCountryCtx = createContext('myCountryCtx')

export const mySearchCtx = createContext('mySearchCtx')

export const myUrlCtx = createContext('myURLCtx')

export const pageSizeCtx = createContext('pageSizeCtx')

export const pageNumCtx = createContext('pageNumCtx')




export const controller = new AbortController()

export default component$(() => {
    const cultureValues = 'en,ar,de,es,fr,he,it,nl,no,pt,ru,sv,ud,zh'.split(',')
    const culture: stateSchema = useStore({
        values: cultureValues,
        val: 'en'
    })

    const countryValues = 'none,ar,at,au,be,bg,br,ca,ch,cn,co,cu,cz,de,eg,fr,gb,gr,hk,hu,id,ie,il,in,it,jp,kr,lt,lv,ma,mx,my,ng,nl,no,nz,ph,pl,pt,ro,rs,ru,sa,se,sg,si,sk,th,tr,tw,ua,us,ve,za'.split(',')
    const country: stateSchema = useStore({
        values: countryValues,
        val: 'en'
    })
    useContextProvider(myCultureCtx, culture)
    useContextProvider(myCountryCtx, country)
    useContextProvider(mySearchCtx, useStore({
        value: ''
    }))
    useContextProvider(myUrlCtx, useStore<stateSchema>({
        value: urlValue
    }))
    useContextProvider(pageSizeCtx, useStore<stateSchema>({
        value: 10
    }))
    useContextProvider(pageNumCtx, useStore<stateSchema>({
        value: 1
    }))



    useStyles$(styles)
    return (
        <div class='layout'>
            <FormFilter />
            <Header />
            <main>
                <Slot />
            </main>
            <Footer></Footer>
        </div>
    )
});

export const FormFilter = component$(() => {

    const location = useLocation()
    const cultureValues = 'en,ar,de,es,fr,he,it,nl,no,pt,ru,sv,ud,zh'.split(',')
    const cultureState: stateSchema = useStore({
        values: cultureValues,
        val: 'en'
    })

    const countryValues = 'none,ar,at,au,be,bg,br,ca,ch,cn,co,cu,cz,de,eg,fr,gb,gr,hk,hu,id,ie,il,in,it,jp,kr,lt,lv,ma,mx,my,ng,nl,no,nz,ph,pl,pt,ro,rs,ru,sa,se,sg,si,sk,th,tr,tw,ua,us,ve,za'.split(',')

    const countryState: stateSchema = useStore({
        values: countryValues,
        val: 'en'
    })
    const searchState: any = useStore({
        value: ''
    })
    const urlState: any = useContext(myUrlCtx);

    const pageSizeState: any = useContext(pageSizeCtx);

    const pageNumState: any = useContext(pageNumCtx);

    const cultureSig: any = useSignal(cultureState.val);
    const countrySig: any = useSignal(countryState.val);


    const showForm = useSignal(false)

// console.log(cultureState.values);

    return <>
        <button onClick$={() => {
            showForm.value = !showForm.value
            // console.log(showForm.value);

        }} class='formToggle'>{!showForm.value ? '-' : '+'}</button>
        <form id='form' aria-label='Form to Filter Article Results' class={!showForm.value ? 'filterForm' : 'hideForm'} >

            {/* //culture */}
            <p>Your culture: {location.query.cultureList == undefined ? cultureState.val?.toString().toUpperCase() : location.query.cultureList.toUpperCase()}</p>
            <label for="cultureList">Filter article results by culture:</label>

            <select class='cultureDD' onClick$={(e: any) => {

                if (e.target.className.includes('culture')) {
                    cultureState.val = e.target.value
                    cultureSig.value = cultureState.val
                }



            }} onChange$={(e: any) => {
                if (e.target.className.includes('culture')) {
                    cultureState.val = e.target.value
                    cultureSig.value = cultureState.val
                }



            }} id={cultureSig.value} name='cultureList'>
                {
                    cultureState.values?.map((c: any) => {
                        return <option class='cultureDDOption' id={c} value={c}>{c}</option>
                    })
                }
            </select>
            {/* //country */}

            <p>Your country: {location.query.countryList == undefined ? countryState.val?.toString().toUpperCase() : location.query.countryList.toUpperCase()}</p>
            <label for="countryList">Filter article results by country:</label>

            <select class='countryDD' onClick$={(e: any) => {

                if (e.target.className.includes('country')) {
                    countryState.val = e.target.value
                    countrySig.value = countryState.val
                }

            }} onChange$={(e: any) => {
                if (e.target.className.includes('country')) {
                    countryState.val = e.target.value
                    countrySig.value = countryState.val
                }

            }} id={countrySig.value} name='countryList'>
                {
                    countryState.values?.map((c: any) => {
                        return <option class='countryDDOption' id={c} value={c}>{c}</option>
                    })
                }
            </select>
            <label aria-labelledby='resultsCount' for='resultsCount'>Page Results Count:</label>
            <input type='text' id='resultsCount' name='resultsCount' value={pageSizeState.value} onChange$={(e) => {
                pageSizeState.value = parseInt(e.target.value, 10)
            }} />
            <label aria-labelledby='pageNumber' for='pageNumber'>Page Number:</label>
            <input type='text' id='pageNumber' name='pageNumber' value={pageNumState.value} onChange$={(e) => {
                pageNumState.value = parseInt(e.target.value, 10)
            }} />
            <SearchBox>
                <label for='q' />
                <input title='No funny characters' type='text' class='navSearch' name='q' id='searchField' onChange$={(e) => {


                    // console.log(e.target.id.includes('search'.toLowerCase()));
                    if (e.target.id.includes('search'.toLowerCase())) {

                        searchState.value = e.target.value
                        // console.log('cc', searchState.value);
                    }



                }} placeholder='Search for articles'></input>
                <button type='submit' onClick$={async (e) => {

                    let pattern = new RegExp(/(\|\.|\,|\;|\:|\?|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\~|\`|\'|\\|\-|\/|\+)/)

                    if (pattern.test(searchState.value)) {
                        searchState.value = ''
                        // e.target.value = ''
                        alert('You tried to enter characters that could be used for XSS. Only Alpha-Numeric Characters Allowed.')
                    }


                    searchState.value == '' ? urlState.value.searchParams.delete('q') : urlState.value.searchParams.set('q', searchState.value)


                }}>Search</button>
            </SearchBox>
        </form>
    </>
})
