document.querySelector(".films-folder").addEventListener("click",function(){
    let ul = document.getElementById('first-ul');
    let img = document.getElementById('first-img');
    if(ul.style.display=='block'){
        img.style.visibility='visible';
        ul.style.display='none';
    }
    else{
        img.style.visibility='hidden';
        ul.style.display='block';
    }
})

document.querySelector(".doc-folder").addEventListener("click",function(){
    let ul = document.getElementById('second-ul');
    let img = document.getElementById('second-img');
    if(ul.style.display=='block'){
        img.style.visibility='visible';
        ul.style.display='none';
    }
    else{
        img.style.visibility='hidden';
        ul.style.display='block';
    }
})

document.querySelector(".detec-folder").addEventListener("click",function(){
    let ul = document.getElementById('third-ul');
    let img = document.getElementById('third-img');
    if(ul.style.display=='block'){
        img.style.visibility='visible';
        ul.style.display='none';
    }
    else{
        img.style.visibility='hidden';
        ul.style.display='block';
    }
})

document.querySelector(".roman-folder").addEventListener("click",function(){
    let ul = document.getElementById('forth-ul');
    let img = document.getElementById('forth-img');
    if(ul.style.display=='block'){
        img.style.visibility='visible';
        ul.style.display='none';
    }
    else{
        img.style.visibility='hidden';
        ul.style.display='block';
    }
})
