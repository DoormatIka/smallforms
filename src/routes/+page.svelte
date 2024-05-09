<script>
	import {focusTrap} from "@skeletonlabs/skeleton";
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-3 text-center flex flex-col items-center variant-ringed p-10">
		<h2 class="h2">Welcome to smallforms.</h2>
		<p>A school project.</p>

		<div class="md:p-3"></div>

		<div class="flex-row justify-center md:flex items-center">
			<div class="px-5 md:p-5">
				<a href="/create" class="btn variant-ghost">Create a form</a>
			</div>
			<div class="mx-5" />
			<div class="py-3 px-5 md:p-5">
				<form method="post" class="label md:flex md:space-x-4">
					<input class="input" name="id" type="text" placeholder="Form ID">
					<button type="submit" class="btn variant-ringed md:-translate-y-px">View form</button>
				</form>
			</div>
		</div>

	</div>
</div>
