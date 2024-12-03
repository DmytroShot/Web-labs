import Message from "../components/Message"
function Info(){
    let id =parseInt(window.location.href.split("id=")[1])-1;
    let res=localStorage.getItem("pokemons")
    
    if(res!=null){
        let pet=JSON.parse(res)[id]["data"]
        let txt = {
            "weight":pet["weight"],
            "base_experience":pet["base_experience"]
        }
        return Message(pet["name"],pet["sprites"]["front_default"],txt,"")
    }
    return Message("404","","","");
}

export default Info