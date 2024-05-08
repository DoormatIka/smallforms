<script>
    import {focusTrap} from "@skeletonlabs/skeleton";
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-3 text-center flex flex-col items-center">
		<h2 class="h2">Welcome to smallforms.</h2>
		<p>A UE school project.</p>

		<br>
		<br> <!-- Me when i'm in antartica -->
		<br>

		<div class="flex-row justify-center md:flex items-center border">
			<div class="pt-10 px-5 md:p-5">
				<a href="/create" class="btn variant-filled">Create a form</a>
			</div>
			<div class="mx-5" />
			<div class="py-10 px-5 md:p-5">
				<form class="label md:flex md:space-x-4">
					<input class="input" type="text" placeholder="Form ID">
					<button class="btn variant-filled md:-translate-y-px">View form</button>
				</form>
			</div>
		</div>

	</div>
</div>
