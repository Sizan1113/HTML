



function changePosition(event){
    var element = document.getElementById('a');
    var tp = element.offsetTop
    var lft = element.offsetLeft

    console.log(tp);
    console.log(lft);

    if (event.keyCode == 39){
        element.style.left = lft + 25+ 'px';
    }
    else if(event.keyCode == 37){
        element.style.left = lft - 25 + 'px';
    }
    else if(event.keyCode == 38){
        element.style.top = tp - 25 + 'px';
    }
    else if(event.keyCode == 40){
        element.style.top = tp + 25 + 'px';
    }


}

function pageLoaded(){
    
    document.addEventListener('keydown',changePosition);
}

document.addEventListener('DOMContentLoaded',pageLoaded)