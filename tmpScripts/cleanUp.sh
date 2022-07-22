cd $(dirname $0)/../ # The project folder
echo "
Cleaning up..."

rm LICENSE
rm README.md
mv -f tmpScripts/newData/credits.txt credits.txt
rm -r tmpScripts

echo "Cleaned up."