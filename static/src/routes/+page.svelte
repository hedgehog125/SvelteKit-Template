<script lang="ts">
	import { onMount } from "svelte";
	import MobileNewline from "$util/MobileNewline.svelte";
	import { linkPage } from "$util/Tools.js";
	import bagelImg from "$img/bagel.png";

	import { textboxes } from "$lib/Demo.js";

	let delayedLinkTextbox = "";
	onMount(() => {
		delayedLinkTextbox = textboxes.link;
	});
</script>

<main>
	<p>
		This is a simple demo of the small tools that are included in this template. As well as some reminders for problems I've already solved.
	</p> <br>

	<h1>
		Components
	</h1>

	<p>
		Create a new line only on small screens with the MobileNewline component.
	</p>
	<span>
		Try resizing your browser window
	</span>
	<MobileNewline></MobileNewline>
	<span>
		| or switching to mobile in devtools.
	</span> <br> <br>

	<p>
		Preload assets with the Preload component in the page's svelte file. Use it like this:
	</p>
	<textarea readonly cols="80" rows="12">{textboxes.preload}</textarea> <br>

	<p>
		The component generates preload link elements. The value is the src (which is found by importing the file), and the key is the as attribute.
	</p>

	<br>
	<h1>
		Versioned Worker Plugin
	</h1>
	<p>
		This template is configured to use my own plugin: Versioned Worker, to make it easy to add offline support. If you want to use it, you'll need to tell it where your builds will go, so it can work out what's changed.
	</p>

	<br>
	<h1>
		Defaults
	</h1>
	<h2>Defined in routes/+layout.svelte</h2>

	<p>
		This button has a pointer cursor
	</p>
	<button>Tada</button> <br>

	<p>
		All text also uses Sans-Serif
	</p>
	
	<br>
	
	<h1>
		Misc
	</h1>
	<ol>
		<li>
			The build process is configured to minify the HTML
		</li>
		<li>
			<p> You can change the base URL by setting URL_PREFIX in svelte.config.js. It'll only be active in the build (not in the dev server) and it requires a rebuild to change. You can also do a build without it using the npm script "testBuild" or by using the VS Code task. </p>
			<textarea readonly cols="80" rows="10">{delayedLinkTextbox}</textarea> <br>
			<a href={linkPage("linkDemo")}>Look, this works! :0</a>
		</li>
		<li>
			<p> Images can be included by importing their href like a JavaScript file. This is just a Vite thing. </p> <br>
			<img src={bagelImg} alt="A pixel art bagel">
		</li>
		<li>
			<p> Tools.js currently only has 2 functions, but I'll include new ones in the future as I need them: </p>
			<ul>
				<li>
					linkPage, which is explained <a href={linkPage("linkDemo")}>here</a>.
				</li>
				<li>
					formatTime takes a number of seconds and converts it into a HH:MM:SS format. The second argument lets you limit the number of digit pairs (e.g exclude hours by setting it to 2).
				</li>
				<li>
					<p> I removed format.shorten since it's better to do it with the CSS properties overflow: hidden, text-overflow: ellipsis and white-space: nowrap. It looks like this: </p>
					<p class="shorten">
						This is a bit long, and since I've limited the size of the element, some of this will get cut off. 
					</p>
				</li>
			</ul>
			
		</li>
	</ol>
</main>

<style>
	.shorten {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		border: 1px solid black;

		font-size: 15px;
		max-width: 73ch;
	}
</style>