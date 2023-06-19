import {
  $, component$, useStore, useStylesScoped$, useContext, useContextProvider,
  createContext,
  useClientEffect$,
  useSignal,
  useRef,
  useOnWindow,
  QwikKeyboardEvent,
} from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { FormFilter } from '~/routes/layout'
import { SearchBox } from '../searchField/searchBox'
// import styles from './nav.css?inline'


export const Nav = component$(() => {
  // useStylesScoped$(styles)

  const categoriesObj = {
    business: {
      catName: 'business',
      catPath: '/categories/business'
    },
    entertainment: {
      catName: 'entertainment',
      catPath: '/categories/entertainment'
    },
    general: {
      catName: 'general',
      catPath: '/categories/general'
    },
    health: {
      catName: 'health',
      catPath: '/categories/health'
    },
    science: {
      catName: 'science',
      catPath: '/categories/science'
    },
    sports: {
      catName: 'sports',
      catPath: '/categories/sports'
    },
    technology: {
      catName: 'technology',
      catPath: '/categories/technology'
    }
  }





  return (
    <nav aria-label="Navigation Bar" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class='navbar-brand bg-info rounded-left' aria-label="Home Page Link" href="/">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABOElEQVR4nO3Vu0pcURTG8R+iqG2aqIUgFqaMnY2ijUJkfAQRtM4FGxGUI76C2ImgoIUKCdhNYyFJnSGFomNlId6eQTYs4cww8TJjYTEfLDis/e219/ov2Id3pA+YwTQ637JwC+Zwg33soYzCWxQfxG+cYDyXH8ZfFPGpXhzruMcPtAaWJSygPXLfcIXspdgSjllcYxvdkZ/CBXbxE6eYiLWu8JbD9ySOPyhhJHL9OMQ/jOW8X3COA/TmsJXCn/ZVaAh30fIjjiw6mUdbjQt1YBm3WMxh+x7YKmaTiq3FdyHa3UHPC7D24VcVti18zZs+x0DPgvWo12sSl1Ej0RioNqRhbWBF/VrFJj7+z5BF1Kvsuf3NA7ImoufURNQYorRwFA9dsc4oR42ah6Rk+osdNxipRiPPzev0AIjwY4MqTsqgAAAAAElFTkSuQmCC" />
      </a>
      {/* {categoryPathStore.catPath} */}
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul id="dropDown" class="navbar-nav d-lg-flex p-2 flex-lg-row mx-auto flex-sm-fill text-sm-center">
          <li class="nav-item m-2" >
            <a class="nav-link"
              target="_blank"
              aria-label="Main News Page" href="/main">
              All Articles
            </a>
          </li>
          <li class='nav-item dropdown m-2'>
            <a class="nav-link dropdown-toggle" href="#"
              target="_blank"
              id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories-Dropdown
            </a>
            <div class='dropdown-menu bg-dark'>
              {
                Object.entries(categoriesObj).map((item: any) => {

                  return (

                    <a
                      class='dropdown-item bg-dark text-white'
                      href={item[1].catPath}
                      target="_blank"
                      id={item[0]}
                    >
                      {item[0].toUpperCase()}
                    </a>
                  )

                })}
            </div>
          </li>
          <li class='nav-item'>
            <a
              target="_blank"
              class='nav-link m-2'
              aria-label="Categories Page Link" href="/sources">
              Sources
            </a>
          </li>
        </ul>
      </div>
      <SearchBox>
        <label for='q' />
        <input document:onKeyDown$={(e:QwikKeyboardEvent<HTMLInputElement>)=>{
          // console.log(e);
          const map = [];
          // e.ctrlKey
          const cntrlKeyPressed = e.ctrlKey;
          map[e.keyCode] = e.type == 'keydown' 
          console.log(map);
          
          
        }} title='No funny characters' type='text' class='navSearch' name='q' id='searchField' onChange$={(e) => {


          // console.log(e.target.id.includes('search'.toLowerCase()));
          // if (e.target.id.includes('search'.toLowerCase())) {

          //   searchState.value = e.target.value
          //   // console.log('cc', searchState.value);
          // }



        }} placeholder='Search for articles'></input>
        {/* <button type='submit' onClick$={async (e) => {

          let pattern = new RegExp(/(\|\.|\,|\;|\:|\?|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\~|\`|\'|\\|\-|\/|\+)/)

          // if (pattern.test(searchState.value)) {
          //   searchState.value = ''
          //   // e.target.value = ''
          //   alert('You tried to enter characters that could be used for XSS. Only Alpha-Numeric Characters Allowed.')
          // }


          // searchState.value == '' ? urlState.value.searchParams.delete('q') : urlState.value.searchParams.set('q', searchState.value)


        }}>Search</button> */}
      </SearchBox>
    </nav >
  )

})


