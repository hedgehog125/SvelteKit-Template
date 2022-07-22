# Sveltekit-Template
This probably isn't anything special, it's just a template for SvelteKit that's how I want things. It's got a couple of my own tools and example page to remind me how the URL prefixes work. It also has HTML minification installed, although it doesn't seem to fully minify it for some reason.

# Installation
Run in a Linux terminal from what you want to be the parent folder for the project:

```
read -p "What do you want to call the project? (no spaces) " projectName
mkdir -p ${projectName}
cd ${projectName}
npx degit https://github.com/hedgehog125/SvelteKit-Template.git
tmpScripts/entry.sh
```

# Manual installation
Degit the repository and then run `npm install` in the "server", "static" and "gzipTool" folders. You'll also want to remove the license file and replace it with some sort of attribution to this template. e.g

```
SvelteKit template: Nicholas Clack (Hedgehog125) https://hedgehog125.github.io/SvelteKit-Template
```

And also remove this file and write one for your project.

# Included Tools
Host the static/build folder to read more