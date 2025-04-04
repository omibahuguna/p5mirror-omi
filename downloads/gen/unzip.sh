cd "/Users/omi/Documents/SEM 2/Multi-Screen/p5mirror-omi/downloads/../p5projects"
#
echo unzip 1 "Responsive Highway-8hTgy4Iu2"
rm -rf "./Responsive Highway-8hTgy4Iu2"
mkdir "./Responsive Highway-8hTgy4Iu2"
pushd "./Responsive Highway-8hTgy4Iu2" > /dev/null
unzip -q "../../downloads/zips/Responsive Highway-8hTgy4Iu2"
popd > /dev/null
#
echo unzip 2 "ims-01 bounce fullscreen copy-rJU4alwsJ"
rm -rf "./ims-01 bounce fullscreen copy-rJU4alwsJ"
mkdir "./ims-01 bounce fullscreen copy-rJU4alwsJ"
pushd "./ims-01 bounce fullscreen copy-rJU4alwsJ" > /dev/null
unzip -q "../../downloads/zips/ims-01 bounce fullscreen copy-rJU4alwsJ"
popd > /dev/null
#
echo unzip 3 "the highway-ou7d_FZKZ"
rm -rf "./the highway-ou7d_FZKZ"
mkdir "./the highway-ou7d_FZKZ"
pushd "./the highway-ou7d_FZKZ" > /dev/null
unzip -q "../../downloads/zips/the highway-ou7d_FZKZ"
popd > /dev/null
#
echo unzip 4 "helloWorld-rafPm5zcI"
rm -rf "./helloWorld-rafPm5zcI"
mkdir "./helloWorld-rafPm5zcI"
pushd "./helloWorld-rafPm5zcI" > /dev/null
unzip -q "../../downloads/zips/helloWorld-rafPm5zcI"
popd > /dev/null
#
echo unzip 5 "helloWorld 2-_czmZi6jr"
rm -rf "./helloWorld 2-_czmZi6jr"
mkdir "./helloWorld 2-_czmZi6jr"
pushd "./helloWorld 2-_czmZi6jr" > /dev/null
unzip -q "../../downloads/zips/helloWorld 2-_czmZi6jr"
popd > /dev/null
#
echo unzip 6 "Portrait Exp-mHMXjWGxF"
rm -rf "./Portrait Exp-mHMXjWGxF"
mkdir "./Portrait Exp-mHMXjWGxF"
pushd "./Portrait Exp-mHMXjWGxF" > /dev/null
unzip -q "../../downloads/zips/Portrait Exp-mHMXjWGxF"
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