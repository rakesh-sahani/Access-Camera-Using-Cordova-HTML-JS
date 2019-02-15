document.addEventListener('deviceready',onDevice,false);

function onDevice(){

    document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture); 

}

function cameraTakePicture() { 
    navigator.camera.getPicture(onSuccess, onFail, {  
       quality: 80, 
       destinationType: Camera.DestinationType.DATA_URL,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true 
    });  
    
    function onSuccess(imageData) { 
       var image = document.getElementById('myImage'); 
       image.src = "data:image/jpeg;base64," + imageData; 
    }  
    
    function onFail(message) { 
       alert('Failed because: ' + message); 
    } 
 }