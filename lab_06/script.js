while(true){
    let first_num=prompt("first num:")*1;
    let operation=prompt("operation:");
    let second_num=-1
    while(true){
        second_num=prompt("second num:")*1;
        if(second_num==0 && operation=="/"){alert("cant divide by 0 !")}
        else{break}
    }
    

    if(operation=="+"){alert(first_num+second_num)}
    if(operation=="-"){alert(first_num-second_num)}
    if(operation=="*"){alert(first_num*second_num)}
    if(operation=="/"){alert(first_num/second_num)}
}
