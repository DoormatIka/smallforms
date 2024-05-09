
<script lang="ts">
	import {flip} from "svelte/animate";
	import {writable} from "svelte/store";
	import {nanoid} from "nanoid";

	let posts = writable<{ id: string, content: string }[]>([]);
	function addPosts() {
		// On^2 operation. find a better way.
		posts.update(v => [...v, { id: nanoid(11), content: "" }]);
	}
	function removePosts(index: number) {
		posts.update(v => {
			v.splice(index, 1);
			return v;
		})
	}
</script>

<div class="m-10 flex justify-center">
	<h2 class="h2">Create the form!</h2>
</div>

<div class="container h-full mx-auto flex-col justify-center m-5">
	<form method="POST" class="label">
		<input 
			type="text" 
			class="input mb-5" 
			placeholder="Title of form"
		>
		{#each $posts as post, i (post.id)}
			<div class="flex space-x-3">
				<input 
					type="text" 
					class="input" 
					placeholder="Question" 
					value={post.content}
				>

				<!-- removing posts does not make sense. -->
				<!-- try getting a unique id for each post/question -->
				<button type="button" class="btn variant-outline" on:click={() => removePosts(i)}>Remove</button>
			</div>
		{/each}
		<div class="p-2"></div>

		<div class="container space-x-2 flex justify-center">
			<button type="button" class="btn variant-outline px-5" on:click={addPosts}>Add</button>
			<!-- use on:click on the above to save the form state before adding another one. -->

			<button type="submit" disabled class="btn variant-outline px-5" on:click={addPosts}>Submit</button>
			<!-- get ready to use +page.server.ts -->
		</div>

	</form>
</div>
