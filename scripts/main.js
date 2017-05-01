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
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'welcome ' + myName;
}
if (!localStorage.getItem('name')){setUserName();
} else { 
  var storedName = localStorage.getItem('name');
      myHeading.textContent = ('welcome ' + storedName);  
}
myButton.onclick = function() {
setUserName();
}