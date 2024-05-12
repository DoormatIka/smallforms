<script lang="ts">
	import {enhance} from '$app/forms';
	import {nanoid} from 'nanoid';
	import type { ActionData, PageData, PageServerData } from './$types';
	
	export let data: PageData;
	export let form: ActionData;
</script>

	
<div class="sm:w-3/4 p-10 md:p-0 mx-auto flex-col justify-center items-center">
	<div class="container flex-auto list-dl">
		<h1 class="h1 text-3xl text-center m-5">{data.title}</h1>
			<div class="p-5"></div>

			{#if form?.error}
				<p class="bg-error-500">{form.error}</p>
			{/if}
			<form method="post" action="?/send_answers" class="space-y-2" use:enhance>
				{#each data.questions as { id, q }}
					<span class="h3">{q}</span>
					<span>
						<input required name="{id}" type="text" class="input border-blue-500 border" />
					</span>
				{/each}
				<button type="submit" class="btn-md variant-filled-surface hover:variant-filled transition-all">Submit</button>
			</form>
	</div>

	<div class="p-10"></div>

	<a href="" class="btn variant-ghost">Access Answers</a>

	<div class="opacity-50 hover:opacity-100 transition-all">
		<form method="post" action="?/see_answers" class="space-y-2">
			<span class="h4">Password</span>
			<input type="text" class="input" />
			<button type="submit" class="btn variant-ghost">Access Answers</button>
		</form>
	</div>

</div>


