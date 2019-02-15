# Access-Camera-Using-Cordova-HTML-JS
 This plugin defines a global navigator.camera object, which provides an API for taking pictures and for choosing images from the system's image library.  The Camera API allows a user to pick a photo from their photo album or take a picture.

echo "# Access-Camera-Using-Cordova-HTML-JS" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/Only1Ryu/Access-Camera-Using-Cordova-HTML-JS.git
git push -u origin master

# After forking or Downloading the Repo. you have to must run this command
# -------Command----------
 npm install -g cordova
 cordova create AppName .(If app is already created cd AppName)
 cordova plugin add cordova-plugin-camera
 cordova platform add android
 cordova build android
 cordova run android 
