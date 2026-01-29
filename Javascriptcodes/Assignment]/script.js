document.getElementById("btn").addEventListener("click", changeColor);

function changeColor() {
    var divs = document.getElementsByClassName("one");
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "orange";
    }
}

// two.style.height = "300px";

// function pageLoaded() {
//     let i = document.getElementsByClassName('two');
//      for (let a = 0; a < i.length; a++) {
//         //  i[a].style.height = "300px";
//          i[a].style.height = "300px";
//          i[a].style.width = "300px";
//          i[a].style.opacity = '1';
//     }
// }

function pageLoaded() {
    var i = document.getElementById('e');
    var iopacity = parseFloat(i.style.opacity);
    // i.style.opacity = iopacity + 0.1;
    i.style.height = '300px';
    i.style.opacity = '0.2';
}
function changeOpacity(){
    var x = document.getElementById('d');
    x.addEventListener('mouseenter',pageLoaded);
    console.log(x);
    
}

// function myInterval(){
//     console.log('myInterval Called');
// }
// setInterval(myInterval,5000);
document.addEventListener('DOMcontentLoaded', changeOpacity);


//create 5 divs ,on click  of div 1 ,css should be applied to div5
//On click of div 2,Opacity of div 2,3,5 should be changed
//Interval function at every 7sec.

