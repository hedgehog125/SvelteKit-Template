read -p "
What do you want to call the project? (no spaces) " projectName
mkdir ${projectName}
cd ${projectName}

echo "
Downloading repository...
";
npx degit https://github.com/hedgehog125/SvelteKit-Template.git
tmpScripts/entry.sh