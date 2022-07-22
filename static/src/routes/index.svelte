<script>
	import MobileNewline from "$util/MobileNewline.svelte";
	import linkPage from "$util/LinkPage.js";

	import { textboxes } from "$lib/Demo.js";
</script>

<main>
	<p>
		This is a simple demo of the small tools that are included in this template. As well as some reminders for problems I've already solved.
	</p> <br>

	<h1>
		Components
	</h1>

	<span>
		This stays in the same place 
	</span>
	<MobileNewline></MobileNewline>
	<span>
		| This will move onto a new line when the viewport is small, like on a phone. This is the MobileNewline component which takes no arguments
	</span> <br> <br>

	<p>
		Preload assets with the Preload component in the page's svelte file. Use it like this:
	</p>
	<textarea readonly cols="80" rows="12">{textboxes.preload}</textarea> <br>

	<p>
		The component generates preload link elements. The value is the src (which is found by importing the file), and the key is the as attribute.
	</p>


	TODO: explain tools.js and base URL stuff with svelte.config.js


	<br>
	<h1>
		Defaults
	</h1>
	<h2>Defined in app.html</h2>

	<p>
		This button has a pointer cursor
	</p>
	<button>Tada</button> <br>

	<p>
		All text also uses sans-sherif
	</p>

	<h1>
		Misc
	</h1>
	<ol>
		<li>
			The build process is configured to minify the HTML
		</li>
		<li>
			<p> You can handle the base URL like this: </p>
			<textarea readonly cols="80" rows="10">{textboxes.link}</textarea> <br>
			<a href={linkPage("linkDemo")}>Look, this works! :0</a>
		</li>
	</ol>
</main>