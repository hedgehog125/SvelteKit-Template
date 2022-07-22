cd $(dirname $0) # The project folder
echo "Installing...\n"

echo "1/3: Installing backend server dependancies\n"
cd server
npm install

echo "\n2/3: Installing static server dependancies\n"
cd ../static
npm install

echo "\n3/3: Installing gzip tool dependancies\n"
cd ../gzipTool
npm install

echo "\nInstalled.\n"