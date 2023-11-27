<script lang="ts">
  import Trianglify from '$lib/trianglify'
  import debounce from 'debounce'
  import { onMount } from 'svelte'
  import '../style/app.css'

  let canvasElement: HTMLElement

  function drawPattern() {
    if (!canvasElement) return
    if (typeof window === 'undefined') return

    try {
      const pattern = Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        xColors: 'Blues',
        cellSize: 80,
      })

      canvasElement.innerHTML = ''
      canvasElement.appendChild(pattern.toCanvas())
    } catch (error) {
      console.error(error)
    }
  }

  const handleResize = debounce(drawPattern)

  let clear: number
  $: {
    clearInterval(clear)
    clear = setInterval(drawPattern, 1000)
  }

  onMount(drawPattern)
</script>

<svelte:window on:resize={handleResize} />

<section id="trianglify" bind:this={canvasElement} />
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
