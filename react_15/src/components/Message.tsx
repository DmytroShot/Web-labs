
import React from "react"; 

function Message(name,url,txt,id){
    return (
        <div className="card" onClick={to_info_page}>
            <img src={url} alt="" />
            <h1>{name}</h1>
            <p>
                {
                    Object.keys(txt).map((key)=>
                        <div>{key+" : "+txt[key]}</div>
                    )
                }
            </p>
        </div>
    )
    function to_info_page(){
        if(id!=""){
            window.location.href="info?id="+id
        }
        
    }
}



export default Message