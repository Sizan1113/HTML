// alert(7);


//Functions

// function scriptloaded(){
//     console.log('0');
//     console.log('1');
//     console.log('2');
//     console.log('3');
//     console.log('Script Loaded');
// }

// function addition(i,j){


// var t = i+j
// alert(t);

// }

// addition(5,6);
// function demo(){
//  var element = document.getElementById('Names');
//  element.firstChild.nodeValue = 'New Heading';


// }

// document.addEventListener('click',demo);

function changeText() {
    var txtblk = document.getElementById('one');
    // txtblk.firstChild.nodeValue = "Hello !";
    // alert(txtblk);
    // 

    var a = document.getElementById('a');
    alert(a);
    a.firstChild.nodeValue = 'ddsafkasnasfnasfkasnfkaf';
}
function pageloaded() {
    var secblk = document.getElementById('two');
    secblk.addEventListener('click', changeText);

}
document.addEventListener('DOMContentLoaded', pageloaded);


// make new html with 5 divs 2 in same class 3 in another and change the color in 2 divs after clicking a buttonhvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

