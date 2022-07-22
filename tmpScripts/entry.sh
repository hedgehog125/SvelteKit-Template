cd $(dirname $0)/../ # The project folder
realpath .

./install.sh

realpath .

# Credit for prompt: https://stackoverflow.com/questions/1885525/how-do-i-prompt-a-user-for-confirmation-in-bash-script
read -p "Do you want to clean up? This will change some files like the README, license and credits files. As well as deleting the tmpScripts folder. (Y/N) " -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]
then
    ./tmpScripts/cleanUp.sh
fi

echo "All done. Although you'll need to set up git yourself. Tip: Run install.sh to install the dependancies if you're on a new machine."