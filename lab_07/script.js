let balance=100;
while(confirm("Start new game?")){
    alert("your balance: "+balance);
    let randomNum=Math.floor(Math.random()*5)+1;
    if(!canPlay(balance)){
        alert("You dont have enough money to play(");
        break;
    }
    balance-=20;
    for(let i=0;i<3;i++){
        if(randomNum==prompt("Guese a number 20$")){
            alert("You win !!!");

            reward = rewardByI(i);
            balance+=reward;
            
            alert("You win + "+reward);
            break;
        }
        else{
            if(i==2){
                alert("You lose -20$")
                
            }
            else{alert("Try again")}
        }
    }
}

function canPlay(balance){
    return balance-20>=0;
}
function rewardByI(i){
    if(i==0){return 40}
    else if(i==1){return 20}
    else{return 10}
}