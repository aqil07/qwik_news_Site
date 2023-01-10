import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import styles from './nav.css?inline'

export default component$(() => {
  useStylesScoped$(styles)

  const location = useLocation()

  const catStr =
    'business,entertainment,general,health,science,sports,technology'
  const catStrArr = catStr.split(',')
  return (
    <nav aria-label="Navigation Bar" class="navbar">
      <a aria-label="Home Page Link" href="/">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABOElEQVR4nO3Vu0pcURTG8R+iqG2aqIUgFqaMnY2ijUJkfAQRtM4FGxGUI76C2ImgoIUKCdhNYyFJnSGFomNlId6eQTYs4cww8TJjYTEfLDis/e219/ov2Id3pA+YwTQ637JwC+Zwg33soYzCWxQfxG+cYDyXH8ZfFPGpXhzruMcPtAaWJSygPXLfcIXspdgSjllcYxvdkZ/CBXbxE6eYiLWu8JbD9ySOPyhhJHL9OMQ/jOW8X3COA/TmsJXCn/ZVaAh30fIjjiw6mUdbjQt1YBm3WMxh+x7YKmaTiq3FdyHa3UHPC7D24VcVti18zZs+x0DPgvWo12sSl1Ej0RioNqRhbWBF/VrFJj7+z5BF1Kvsuf3NA7ImoufURNQYorRwFA9dsc4oR42ah6Rk+osdNxipRiPPzev0AIjwY4MqTsqgAAAAAElFTkSuQmCC" />
      </a>
      <div class="categoryDropDown">
        <a aria-label="Categories Page Link" href="/categories">
          Categories - Top Headlines
        </a>
        {catStrArr.map((item: any) => {
          // console.log(urlPath.path)
          return (
            <ul id="dropDown" class="categoryList">
              <li class="categoryItem" id={item}>
                <a
                  onClick$={(e: any) => {
                    
                  }}
                  id={item}
                >
                  {item.toUpperCase()}
                </a>
              </li>
            </ul>
          )
        })}
      </div>
      <a aria-label="Categories Page Link" href="/everything">
        Everything
      </a>
      <a aria-label="Categories Page Link" href="/sources">
        Sources
      </a>
    </nav>
  )
})
