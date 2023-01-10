import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik'
import styles from './footer.css?inline'

export default component$(() => {
  useStylesScoped$(styles)
  return (
    <footer class='pageFooter'>
      <a href="https://qwik.builder.io/" target="_blank">
        Made with ♡ by qwik.builder.io
      </a>
      <Slot/>
    </footer>
  )
})
