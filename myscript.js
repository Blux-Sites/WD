var myButton = document.getElementById('myButton');
var myLogo = document.getElementById('myLogo');
var myModal = document.getElementById('myModal');
var content = document.getElementById('myContent');
myButton.onclick = function(){
    myModal.style.display = "block";
    setTimeout(opacity1, 100);
}
myClose.onclick = function(){
    content.style.opacity = "0";
    setTimeout(none, 1000)
}
function opacity1(){
    content.style.opacity = "1";
}
function none(){
    myModal.style.display = "none"
}

