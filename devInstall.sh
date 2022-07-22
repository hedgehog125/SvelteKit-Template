cd $(dirname $0) # The project folder
echo "Installing...
"

echo "1/3: Installing backend server dependancies
"
cd server
npm install

echo "
2/3: Installing static server dependancies
"
cd ../static
npm install

echo "
3/3: Installing gzip tool dependancies
"
cd ../gzipTool
npm install

echo "
Installed.
"