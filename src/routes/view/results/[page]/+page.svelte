
<script lang="ts">
	import {page} from "$app/stores";
	import {writable, type Writable} from "svelte/store";
	import {enhance} from "$app/forms";
	import type {PageData, ActionData} from "./$types";

	let elemCarousel: HTMLDivElement;
	function carouselLeft() {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount
				: elemCarousel.scrollLeft - elemCarousel.clientWidth;
		elemCarousel.scroll(x, 0);
	}
	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0
				: elemCarousel.scrollLeft + elemCarousel.clientWidth;
		elemCarousel.scroll(x, 0);
	}

	export let form: ActionData;
</script>

<div class="w-full p-10">
	<div class="mx-auto flex-col justify-center items-center">
		
		<form method="post" action="?/see_answers" class="space-y-2" use:enhance>
			<span class="h4">Password</span>
			<input type="text" class="input" name="password" placeholder="View the results using a password" />
			{#if form?.err}
				<p class="bg-error-500">Error: {form?.err}</p>
			{/if}
			<button type="submit" class="btn variant-ghost">Access Answers</button>
		</form>
	</div>

	<div class="py-5"></div>

	{#if form?.questions}
		<div class="container mx-auto flex-col justify-center items-center">
		<div class="card p-4 grid sm:grid-cols-[auto_1fr_auto] gap-4 items-center h-1/2">
				<button type="button" class="btn variant-filled" on:click={carouselLeft}>Left</button>
				<div bind:this={elemCarousel} class="snap-x scroll-smooth flex overflow-x-auto">
						{#each form.questions as { id, question, answers }}
							<div class="card max-h-1/2 variant-ghost m-5 p-2 px-5 snap-center min-w-full flex-col justify-center items-center">
								<h2 class="h2 card-header text-center">{question}</h2>
								<div class="p-3"></div>
								<section class="p-3 scroll-m-2 h-1/2">
									<ul class="list">
										{#if answers.length <= 0}
											<p>No answers yet!</p>
										{:else}
											{#each answers as answer}
												<li class="p-2 variant-outline-surface">
													<span class="flex-auto">{answer}</span>
												</li>
											{/each}
										{/if}
									</ul>
								</section>
							</div>
						{/each}
				</div>
				<button type="button" class="btn variant-filled" on:click={carouselRight}>Right</button>
			</div>
		</div>
	{/if}

</div>


