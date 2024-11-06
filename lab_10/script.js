let container = document.getElementById("container");
let data_arr={  "tank1":"a"
                ,"tank2":"b"
                ,"tank3":"c"
                ,"tank4":"d"}

if(container!=null){
    for (let i = 1; i<Object.keys(data_arr).length+1 ; i++) {
        let elem = document.createElement("div");
        let img = document.createElement("img");
        let txt = document.createElement("h1");

        img.id=i;
        img.src="images/tank"+i+".jpg";
        txt.innerHTML=data_arr["tank"+i];

        elem.append(img);
        elem.append(txt);
        elem.classList.add("tank");
        elem.onclick=()=>{
            window.location.href="index-info.html?id="+elem.children[0].id;
        }
        container.append(elem);
    }
}




let info_container = document.getElementById("info-container");

if(info_container!=null){
    let info_index = window.location.toString().split("id=")[1];
    let elem = document.createElement("div");
    let img = document.createElement("img");
    let txt = document.createElement("h1");
    
    img.src="images/tank"+info_index+".jpg";
    txt.innerHTML=data_arr["tank"+info_index];

    elem.append(img);
    elem.append(txt);
    elem.classList.add("tank");

    info_container.append(elem);
}
