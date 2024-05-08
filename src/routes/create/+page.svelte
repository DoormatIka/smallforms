
<script lang="ts">
    import {flip} from "svelte/animate";
	import {writable} from "svelte/store";

	let posts = writable<string[]>([]);
	function addPosts() {
		// On^2 operation. find a better way.
		posts.update(v => [...v, "placeholder"]);
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

<div class="container h-full mx-auto flex-col justify-center">
	<form method="POST" class="label">
		{#each $posts as post, i (i)}
			<div class="flex space-x-3">
				<input 
					type="text" 
					class="input" 
					placeholder="title of text" 
					value={post}
				>

				<!-- whenever an element is removed, it will send a POST request. -->
				<button class="btn variant-outline" on:click={() => removePosts(i)}>Remove</button>
			</div>
				<!-- use on:input on this to save the form state before adding another one. -->
		{/each}
	</form>
	<div class="container my-5 flex justify-center">
		<button class="btn variant-outline px-5" on:click={addPosts}>Add</button>
	</div>
</div>
