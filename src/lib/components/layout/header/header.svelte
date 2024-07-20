<script lang="ts">
  import Sun from '~icons/tabler/sun';
  import Language from '~icons/tabler/language';

  import * as m from '$lib/paraglide/messages';
</script>

<header>
  <div class="container">
    <nav>
      <ul>
        <li><a href="/">{m.about()}</a></li>
        <li><a href="/">The Cubesat</a></li>
        <li><a href="/">News & Events</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>

    <div class="logo">
      <a href="/">
        <img src="images/tolosat-icon.png" alt="Tolosat logo" />
      </a>
    </div>

    <div class="settings">
      <input type="search" placeholder="Search..." />

      <Sun width="1.5rem" height="1.5rem" />
      <Language width="1.5rem" height="1.5rem" />
    </div>
  </div>
</header>

<style>
  header {
    height: 80px;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    height: inherit;
  }

  ul {
    display: flex;
    gap: 1.5rem;
    padding-left: 0;
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    width: 3.5rem;
    height: 3.5rem;
  }

  .settings {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5rem;
  }

  input {
    border: 1px solid var(--foreground);
    border-radius: 0.25rem;
    background-color: var(--background);
    height: 1.5rem;
    color: var(--foreground);
    font-family: var(--font);
  }

  ::placeholder {
    opacity: 1; /* Firefox */
    color: var(--foreground);
  }
</style>
