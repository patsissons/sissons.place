<script>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-nocheck
  import Trianglify from '@victorioberra/trianglify-browser'
  import debounce from 'debounce'
  import { onMount } from 'svelte'
  import '../style/app.css'

  /** @type {HTMLElement} */
  let elCanvasWrapper

  function drawPattern() {
    try {
      const pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        xColors: 'Blues',
        cellSize: 80,
      })

      elCanvasWrapper.innerHTML = ''
      elCanvasWrapper.appendChild(pattern.toCanvas())
      console.log('drawPattern')
    } catch (error) {
      console.error(error)
    }
  }

  const handleResize = debounce(drawPattern)

  onMount(drawPattern)
</script>

<svelte:window on:resize={handleResize} />

<section id="trianglify" bind:this={elCanvasWrapper} />
<section id="content">
  <slot />
</section>

<style>
  #trianglify {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -10;
  }

  #trianglify :global(canvas) {
    display: block;
  }

  #content {
    display: flex;
    width: 310px;
    height: 310px;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: 10;
    transition: box-shadow 500ms;
  }

  #content:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  }
</style>
