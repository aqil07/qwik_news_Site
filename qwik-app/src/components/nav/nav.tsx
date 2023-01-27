import {
  component$, useStore, useStylesScoped$, useContext, useContextProvider,
  createContext,
  useClientEffect$,
  useSignal,
} from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { FormFilter } from '~/routes/layout'
import { SearchBox } from '../searchField/searchBox'
import styles from './nav.css?inline'


export const Nav = component$(({ cVals }: any) => {
  useStylesScoped$(styles)

  const catStr =
    'business,entertainment,general,health,science,sports,technology'
  const catStrArr = catStr.split(',')

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
    <nav aria-label="Navigation Bar" class="navbar">

      {/* {categoryPathStore.catPath} */}
      <a aria-label="Home Page Link" href="/">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABOElEQVR4nO3Vu0pcURTG8R+iqG2aqIUgFqaMnY2ijUJkfAQRtM4FGxGUI76C2ImgoIUKCdhNYyFJnSGFomNlId6eQTYs4cww8TJjYTEfLDis/e219/ov2Id3pA+YwTQ637JwC+Zwg33soYzCWxQfxG+cYDyXH8ZfFPGpXhzruMcPtAaWJSygPXLfcIXspdgSjllcYxvdkZ/CBXbxE6eYiLWu8JbD9ySOPyhhJHL9OMQ/jOW8X3COA/TmsJXCn/ZVaAh30fIjjiw6mUdbjQt1YBm3WMxh+x7YKmaTiq3FdyHa3UHPC7D24VcVti18zZs+x0DPgvWo12sSl1Ej0RioNqRhbWBF/VrFJj7+z5BF1Kvsuf3NA7ImoufURNQYorRwFA9dsc4oR42ah6Rk+osdNxipRiPPzev0AIjwY4MqTsqgAAAAAElFTkSuQmCC" />
      </a>
      <div class="categoryDropDown">
        <a  class="categoryNavHeader" aria-label="Categories Page Link" href="/categories">
          Categories - Top Headlines
        </a>
        <ul id="dropDown" class="categoryList">
          {
            Object.entries(categoriesObj).map((item: any) => {
              // console.log(item[1].catPath);

              return (

                <li class="categoryItem" id={item[0]} >
                  <a
                  href={item[1].catPath}
                    // href={categoryPath.value}
                    // href={categoryPathStore.catPath}
                    id={item[0]}
                  >
                    {item[0].toUpperCase()}
                  </a>
                </li>

              )

            })}
        </ul>
      </div>
      <a aria-label="Categories Page Link" href="/sources">
        Sources
      </a>
      {/* <FormFilter /> */}

    </nav>
  )

})


