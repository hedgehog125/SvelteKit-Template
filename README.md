# Sveltekit-Template
This probably isn't anything special, it's just a template for SvelteKit that's how I want things. It's got a couple of my own tools and example page to remind me how the URL prefixes work. It also has HTML minification installed, although it doesn't seem to fully minify it for some reason.

The build won't work locally without a change, so see the example [online](https://hedgehog125.github.io/SvelteKit-Template). It also explains how to run the build locally. The dev server will work fine.

# Installation
Run in a Linux terminal from what you want to be the parent folder for the project:

```
bash <(curl -s https://raw.githubusercontent.com/hedgehog125/SvelteKit-Template/main/tmpScripts/onlineEntry.sh)
```

# Manual installation
Degit the repository and then run `npm install` in the "server", "static" and "gzipTool" folders. You'll also want to remove the license file and put something like this in credits.txt:

```
SvelteKit template: Nicholas Clack (Hedgehog125) https://hedgehog125.github.io/SvelteKit-Template
```

And also remove this file and write one for your project.

# Included Tools
Host the static/build folder to read more