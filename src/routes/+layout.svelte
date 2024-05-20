<script lang="ts">
  import '../app.css';

  import { ModeWatcher } from 'mode-watcher';
  import Header from '$lib/layout/header/header.svelte';
  import Footer from '$lib/layout/footer/footer.svelte';
</script>

<ModeWatcher />

<div class="layout">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    padding-inline: 3rem;
    height: 100dvh;
  }

  main {
    flex: 1;
  }
</style>
