let container = document.getElementById("container");
let data_arr={
    "tank1":{
        "name":"A-43"
        ,"hp":"200"
        ,"dmg":"300"
        ,"spd":"400"
        ,"vrng":"500"
    }
    ,"tank2":{
        "name":"2C-38"
        ,"hp":"300"
        ,"dmg":"400"
        ,"spd":"500"
        ,"vrng":"600"
    }
    ,"tank3":{
        "name":"sturmtiger"
        ,"hp":"400"
        ,"dmg":"500"
        ,"spd":"600"
        ,"vrng":"700"
    }
    ,"tank4":{
        "name":"M1-KVT"
        ,"hp":"500"
        ,"dmg":"600"
        ,"spd":"700"
        ,"vrng":"800"
    }
}

if(container!=null){
    for (let i = 1; i<Object.keys(data_arr).length+1 ; i++) {
        let elem = document.createElement("div");
        let img = document.createElement("img");
        let txt = document.createElement("h1");

        img.id=i;
        img.src="images/tank"+i+".jpg";
        txt.innerHTML=data_arr["tank"+i]["name"];

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
    let data_obj = data_arr["tank"+info_index];
    for (const key in data_obj){
        let p=document.createElement("p");
        p.innerText=key+":"+data_obj[key];
        txt.append(p)
    }
    
    elem.append(img);
    elem.append(txt);
    elem.classList.add("tank");

    info_container.append(elem);
}
