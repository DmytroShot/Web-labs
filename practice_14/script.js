let content = document.getElementById("content");

class map{
    cubes=[]
    constructor(size){
        this.size=size
        for (let i = 0; i < size; i++) {
            this.cubes.push([])
            for (let j = 0; j < size; j++) {
                this.cubes[i].push(0)
            }
        }
        console.log(this.cubes)
    }
    mark_point(i,j){
        this.cubes[i][j]=1
    }
    show_map(){
        content.innerHTML="";
        
        for (let i=0; i < this.cubes.length; i++) {
            let div_row = document.createElement("div")
            div_row.classList.add("row")
            for (let j=0; j < this.cubes.length; j++) {
                let div = document.createElement("div");
                
                if(this.cubes[i][j]==1){
                    div.classList.add("pointed")
                }
                div.classList.add("cube")
                div_row.append(div)
            }
            content.append(div_row)
        }
    }
    
    start(max_steps){
        let i = Math.floor(Math.random() * this.size);
        let j = Math.floor(Math.random() * this.size);
        
        let steps=0
        let interval = setInterval(() => {
            
            let randon_num=Math.floor(Math.random() * 4);
            console.log(randon_num)
            if(randon_num==0){
                if(i-1>-1&&my_map.cubes[i-1][j]!=1){
                    i--
                    my_map.mark_point(i,j);
                    steps++
                }
            }
            else if(randon_num==1){
                if(i+1<this.size&&my_map.cubes[i+1][j]!=1){
                    i++
                    my_map.mark_point(i,j);
                    steps++ 
                }
            }
            else if(randon_num==2){
                if(j-1>-1&&my_map.cubes[i][j-1]!=1){
                    j--
                    my_map.mark_point(i,j);
                    steps++
                }
            }
            else if(randon_num==3){
                if(j+1<this.size&&my_map.cubes[i][j+1]!=1){
                    j++
                    my_map.mark_point(i,j);
                    steps++ 
                }
            }
            console.log(i,j)
            if(steps==max_steps){
                clearInterval(interval)
                setTimeout(() => {
                    alert("done")
                }, 100);
            }
            my_map.show_map();
            
                
        }, 800);
            
        
    }
}

my_map=new map(8)
my_map.show_map()
let prompt_num=parseInt(prompt("How many times?"))
while(prompt_num <= 0){
    alert("must be more than 0");
    prompt_num=parseInt(prompt("How many times?"));
}

my_map.start(prompt_num)

