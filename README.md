# Sveltekit-Template
This probably isn't anything special, it's just a template for SvelteKit that's how I want things. It's got a couple of my own tools and example page to remind me how the URL prefixes work. It also has HTML minification installed, although it doesn't seem to fully minify it for some reason.

# Installation
Run in a Linux terminal from what you want to be the parent folder for the project:

```
bash <(curl -s https://raw.githubusercontent.com/hedgehog125/SvelteKit-Template/main/tmpScripts/onlineEntry.sh)
```

Then just follow its steps.

If you're on Windows, you'll need to use WSL for this and then you can transfer it to your main file system. Or you could try the manual installation.

# Manual Installation
Degit the repository and then run `npm install` in the "server", "static" and "tools" folders. You'll also want to remove the license file and put something like this in credits.txt:

```
SvelteKit template: Nicholas Clack (Hedgehog125) https://hedgehog125.github.io/SvelteKit-Template
```

And also the tmpScripts folder as well as this README file and write one for your project.

# A Quick Note on Builds
This template includes some logic in the svelte.config.js file to add a URL prefix to your builds. This means you can host your build on GitHub pages. You'll probably need to change the value of `URL_PREFIX` in the file to your repository's name, as by default it's "SvelteKit-Template". If you don't want a URL prefix, just set it to an empty string.

This prefix will prevent you from being able to preview a local build properly (unless you recreate the structure), so you'll need to use the npm command "testBuild" instead of build if you want to do that. If you're using VS Code, you can just run the task called `Test build static (no base URL)`. Just keep in mind that you'll need to do a normal build when you're ready to deploy.

# Placeholder values and files
A number of different files have placeholder values. While everything will still work with them (except for GitHub pages builds), you should probably change or remove them at some point. They are:
 * URL_PREFIX in static/svelte.config.js
 * appIcon.png, appIcon.svg, favicon.png, favicon.svg, manifest.json and maskableAppIcon.png in static/static
 * theme-color, description and title in static/src/app.html

And these can just be removed or replaced as they're part of the example:
 * static/src/lib/imgs/bagel.png
 * static/src/lib/Demo.js
 * linkDemo and +page.svelte in static/src/routes/

# Included Tools
There are a few different tools in the tools folder. These can all just be run using the `node` command, but you can also run them from the command palette if you're using VS Code. If you press Shift + CTRL (or CMD on Mac) + P you should see:
 * Dev static -> Starts the SvelteKit dev server in static/
 * Start backend -> Starts your backend server in server/
 * Build static -> Builds the SvelteKit project into static/build/
 * Test build static (no base URL) -> Still a regular static build, but with the base URL removed for testing
 * Preview last build -> Starts a server for your last static build
 * Deploy last build -> Requires some setup. Copies the static build to a preconfigured folder so you can deploy to GitHub Pages more easilly. Run it for more info
 * Gzip last build -> Gzips the last build into static/gzipBuild/
 * Install dependencies -> Runs npm install in the 3 different folders
 * Delete build -> Deletes the build in static/build
 * Delete gzipped build -> Deletes the gzipped build in static/gzipBuild/


Host the static/build folder to read about the Svelte/SvelteKit stuff and for some examples. Or if you don't want to try changing it, read it [online](https://hedgehog125.github.io/SvelteKit-Template).