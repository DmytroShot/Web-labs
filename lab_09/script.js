let container = document.getElementById("container")
while(true){
    conteiner_count = prompt("Count of containers");
    if(conteiner_count%2!=0){alert("num must be even !")}
    else{break}
}
let fruits = ["mango","mango","grape","grape","granate","granate"];

if(conteiner_count>fruits.length){
    let needed_count= conteiner_count-fruits.length;
    for(let i=0;i<needed_count;i++){
        fruits.push(fruits[i])
    }
}
fruits.sort ( ( ) => Math . random ( ) - 0.5 )
let open_count=0;
let first_el;
let second_el;
function reload_items(){
    window.location.reload();
}

for(let i=0;i<conteiner_count;i++){
    let elem = document.createElement("div");
    elem.className="card";
    
    elem.innerHTML="<img class='closed' src='images/"+fruits[i]+".png'>";
    
    elem.onclick=function(){
        setTimeout(() => {
            elem.children[0].classList.add("open");
        }, 100);
        
        setTimeout(() => {
            let elements=document.querySelectorAll('.open');
        
        if(elements.length==2){
            if(elements[0].getAttribute("src")==elements[1].getAttribute("src")){
                elements[0].classList.add("point");
                elements[0].classList.remove("open");
                elements[1].classList.add("point");
                elements[1].classList.remove("open");
            }
            else{
                elements[0].classList.remove("open");
                elements[1].classList.remove("open");
            }
            
        }
        if(document.querySelectorAll(".point").length==conteiner_count){
            alert("win")
            reload_items();
        }
        }, 1000);
        
    }
    container.append(elem);
}

function close_card(element,num){
    element.style.background="black";
    element.children[0].style.display="none";
}
function open_card(element){
    element.style.background="white";
    element.children[0].style.display="block";
}
