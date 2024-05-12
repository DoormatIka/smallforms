
<script lang="ts">
	import { page } from "$app/stores";

	const dummy_data: {q: string, a: string[]}[] = [
		{q: "Question", a: ["Answer 1", "Answer 2", "Answer 3"]},
		{q: "Question2", a: ["Answer 1", "Answer 2", "Answer 3"]},
		{q: "Question3", a: ["Answer 1", "Answer 2", "Answer 3"]},
	]
</script>
<p>View form {$page.params.page} here.</p>

<div class="container mx-auto">
	<ul class="list">
		{#each dummy_data[0].a as answer, i}
			<li>
				<span>#{i + 1}</span>
				<span class="flex-auto">{answer}</span>
			</li>
		{/each}
	</ul>
</div>
