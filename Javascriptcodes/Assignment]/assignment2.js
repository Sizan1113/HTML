//create 5 divs ,on click  of div 1 ,css should be applied to div5
//On click of div 2,Opacity of div 2,3,5 should be changed
//Interval function at every 7sec.




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
// function changeOpacity() {
//     var divs = document.getElementsByClassName("one");
//     for (let i = 0; i < divs.length; i++) {
//         divs[i].style.backgroundColor = "orange";
//     }
// }

// function pageLoaded() {
//     var i = document.getElementById('e');
//     var iopacity = parseFloat(i.style.opacity);
//     // i.style.opacity = iopacity + 0.1;
//     i.style.height = '300px';
//     i.style.opacity = '0.2';
// }
// function changeCss() {
//     var x = document.getElementById('a');
//     x.addEventListener('click', pageLoaded);
//     console.log(x);

// }

// // function myInterval(){
// //     console.log('myInterval Called');
// // }
// // setInterval(myInterval,7000);
// document.addEventListener('DOMContentLoaded', changeCss);



function pageLoaded() {
    
    var div5 = document.getElementById('e');
    div5.style.height = '300px';
    div5.style.backgroundColor = 'orange';
    div5.style.opacity = '0.5';
}

function changeOpacity() {
    
    var div2 = document.getElementById('b');
    var div3 = document.getElementById('c');
    var div5 = document.getElementById('e');

    div2.style.opacity = '0.3';
    div3.style.opacity = '0.3';
    div5.style.opacity = '0.3';
}

function changeCss() {
    var div1 = document.getElementById('a');
    var div2 = document.getElementById('b');
    div1.addEventListener('click', pageLoaded); 
    div2.addEventListener('click', changeOpacity);
}

function myInterval() {
    var div5 = document.getElementById('e');
    div5.style.backgroundColor =
        div5.style.backgroundColor === 'green' ? 'blue' : 'green';
}

// setInterval(myInterval, 1000);

document.addEventListener('DOMContentLoaded', changeCss,setInterval(myInterval, 1000));

