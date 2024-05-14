<script lang="ts">
	import '../app.css';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Logo from "$lib/components/Logo.svelte"
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
	<!-- App plar -->
		<AppBar background="bg-transparent">
			<svelte:fragment slot="lead">
				<a href="/" rel="noreferrer" class="hover:tracking-widest transition-all text-xl font-black h1 px-5 gradient-heading"> 
					smallforms
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<p class="opacity-30 hover:opacity-55 transition-all">Made with love.</p>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot /> <!-- +page.svelte -->
</AppShell>

