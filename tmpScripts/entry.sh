cd $(dirname $0)/../ # The project folder

./devInstall.sh

# Credit for prompt: https://stackoverflow.com/questions/1885525/how-do-i-prompt-a-user-for-confirmation-in-bash-script
read -p "Do you want to clean up? This will change some files like the README, license and credits files so they make sense for your use vs the template on GitHub. As well as deleting the tmpScripts folder which is no longer needed after the setup. (Y/N) " -r
if [[ $REPLY =~ ^[Yy]$ ]]
then
    ./tmpScripts/cleanUp.sh
fi

echo "
All done. Although you'll need to set up git yourself.
Tip: Run devInstall.sh to install the dependencies if you're on a new machine.
"