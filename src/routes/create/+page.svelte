<script lang="ts">
	import {flip} from "svelte/animate";
	import {writable} from "svelte/store";
	import {nanoid} from "nanoid";
	import {enhance} from "$app/forms";

	let posts = writable<{ id: string, content: string }[]>([]);
	function addPosts() {
		// On^2 operation. find a better way.
		posts.update(v => [...v, { id: nanoid(15), content: "" }]);
	}
	function removePosts(index: number) {
		posts.update(v => {
			v.splice(index, 1);
			return v;
		})
	}

	export let form;
</script>


<div class="m-10 flex justify-center">
	<h2 class="h2">Create the form!</h2>
</div>

<div class="container h-full mx-auto flex-col justify-center sm:w-3/4 p-5">
	{#if form?.error}
		<p class="bg-error-500">{form.error}</p>
	{/if}

	<form method="POST" class="label" use:enhance>
		<div>
			<span class="h3">Title</span>
			<input type="text" name="title" class="input" required />
			<span class="h3">Password</span>
			<input type="text" name="password" class="input" />
		</div>

		<div class="py-5"></div>

		{#each $posts as post, i (post.id)}
			<div class="flex space-x-3">
				<input 
					type="text" 
					class="input" 
					placeholder="Question #{i+1}"
					name="{post.id}"
					value={post.content}
					required
				/>
				<button type="button" class="btn variant-outline" on:click={() => removePosts(i)}>Remove</button>
			</div>
		{/each}
		<div class="p-2"></div>

		<div class="container space-x-2 flex justify-center">
			<button type="button" class="btn variant-outline px-5" on:click={addPosts}>Add</button>
			<button type="submit" class="btn variant-outline px-5">Submit</button>
		</div>

	</form>
</div>
