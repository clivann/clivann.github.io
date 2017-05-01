var myImage = document.getElementById('subbutton');
var midfi = "images/middlefinger2.jpeg";
myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/subscribe.png') {
    myImage.setAttribute ('src', midfi );
  } else {
    myImage.setAttribute ('src','images/subscribe.png');
  }
}