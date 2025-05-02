cd "/Users/omi/Documents/SEM 2/Multi-Screen/p5mirror-omi/downloads/../p5projects"
#
echo unzip 1 "Transience omi v1.5-PCh5Aznez"
rm -rf "./Transience omi v1.5-PCh5Aznez"
mkdir "./Transience omi v1.5-PCh5Aznez"
pushd "./Transience omi v1.5-PCh5Aznez" > /dev/null
unzip -q "../../downloads/zips/Transience omi v1.5-PCh5Aznez"
popd > /dev/null
#
echo unzip 2 "Transience 2-fceJhpMM6"
rm -rf "./Transience 2-fceJhpMM6"
mkdir "./Transience 2-fceJhpMM6"
pushd "./Transience 2-fceJhpMM6" > /dev/null
unzip -q "../../downloads/zips/Transience 2-fceJhpMM6"
popd > /dev/null
#
echo unzip 3 "Transience-ohwy2A1tC"
rm -rf "./Transience-ohwy2A1tC"
mkdir "./Transience-ohwy2A1tC"
pushd "./Transience-ohwy2A1tC" > /dev/null
unzip -q "../../downloads/zips/Transience-ohwy2A1tC"
popd > /dev/null
#
echo unzip 4 "helloWorld 2-_czmZi6jr"
rm -rf "./helloWorld 2-_czmZi6jr"
mkdir "./helloWorld 2-_czmZi6jr"
pushd "./helloWorld 2-_czmZi6jr" > /dev/null
unzip -q "../../downloads/zips/helloWorld 2-_czmZi6jr"
popd > /dev/null
#
echo unzip 5 "helloWorld-rafPm5zcI"
rm -rf "./helloWorld-rafPm5zcI"
mkdir "./helloWorld-rafPm5zcI"
pushd "./helloWorld-rafPm5zcI" > /dev/null
unzip -q "../../downloads/zips/helloWorld-rafPm5zcI"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi