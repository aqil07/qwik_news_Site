import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import styles from './searchBox.css?inline'
export const SearchBox = component$(()=>{
    let searchInput
    useStyles$(styles)
    return(
        <section class='search_input' aria-labelledby="searchField">
        {/* <input type='text' id='searchField' onChange$={(e)=>{
            searchInput = e.target.value

        }} placeholder='Search for articles'></input> */}
        <Slot/>
        </section>
    )
})