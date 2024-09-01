<script lang="ts">
	import {
		userPrefersMode,
		systemPrefersMode,
		mode,
		setMode,
	} from 'mode-watcher'
</script>

<h1>TOLOSAT</h1>

<p>System theme: {$systemPrefersMode}</p>
<p>User theme: {$userPrefersMode}</p>
<p>Current theme: {$mode}</p>

<button on:click={() => setMode('dark')}>Dark</button>
<button on:click={() => setMode('light')}>Light</button>
<button on:click={() => setMode('system')}>System</button>
