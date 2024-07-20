<script lang="ts">
  import '../app.css';

  import { ModeWatcher } from 'mode-watcher';
  import { Header } from '$lib/components/layout/header';
  import { Footer } from '$lib/components/layout/footer';
  import { Construction } from '$lib/components/atoms/construction';
</script>

<ModeWatcher />

<div class="layout">
  <Header />

  <main>
    <Construction />
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
    padding-block: 1.5rem;
  }
</style>
