
<script>
	import { page } from "$app/stores";
</script>

<div class="flex h-full mx-auto space-x-5 justify-center items-center">
	<h1 class="h1">{$page.status}</h1>
	<p>{$page.error?.message}</p>
</div>
