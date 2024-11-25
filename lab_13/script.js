let input_userName = document.getElementById("input_userName")
let input_password = document.getElementById("input_password")

let access_token=""


function show_menu(){
    let header = document.getElementById("header");
    let h1 = document.createElement('h1');
    let img = document.createElement('img');
    let div = document.createElement('div');


    img.id="menu_img";
    if(localStorage.getItem("img_src")){
        img.src=localStorage.getItem("img_src")
    }
    
    if(localStorage.getItem("img_display")=="block"){
        img.style.display="block"
    }
    else{
        img.style.display="none"
    }
    div.setAttribute('onclick', "to_account_page()")
    div.append(img);
    if(localStorage.getItem("menu_button")=="Logout"){
        h1.innerText="Logout";
        h1.setAttribute('onclick', "logout()")
    }
    else{
        h1.innerText="Login";
        h1.setAttribute('onclick', "to_login_page()");
    }

    header.append(h1);
    header.append(div)
}
setTimeout(() => {
    show_menu()
}, 260);


async function login_user(){
    let res = await fetch('https://dummyjson.com/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        
        username: input_userName.value,
        password: input_password.value,
        expiresInMins: 30, // optional, defaults to 60
        }),
    })
    let json = await res.json()
    
    access_token=json.accessToken
    console.log(access_token)
    localStorage.setItem("token",access_token)

    to_account_page()
  
}

async function show_users(){

    let container = document.getElementById("container")

    let response = await fetch('https://dummyjson.com/users')
    let json = await response.json()
    json.users.forEach(user => {
        let form = document.createElement('div')
        form.innerHTML=`
            <h1>${user.username}</h1>
            <img src="${user.image}" alt="">
            <div class="info">
                <p>First Name : ${user.firstName}</p>
                <p>Last Name : ${user.lastName}</p>
                <p>Gender : ${user.gender}</p>
                <p>Email : ${user.email}</p>
                <p>User Name : ${user.username}</p>
            </div>
        `
        form.classList.add("card")
        container.append(form)
    });
    
}

async function get_and_show_user(){
    
    let res = await fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
        'Authorization':localStorage.getItem("token"), // Pass JWT via Authorization header
    }, 
    //credentials: 'include' // Include cookies (e.g., accessToken) in the request
    })
    
    let user = await res.json();
    let account_settings = document.getElementById("account_settings")
    let menu_img = document.getElementById("menu_img")

    let div = document.createElement('div');
    
    div.classList.add("user-card");
    div.innerHTML=`
        
        <h1>Your info</h1>
        <img src="${user.image}" alt="">

        <div class="buttons">
            <h1 onclick="logout()">Sign out</h1>
        </div>

        <div class="acc-info">
            <h1>First Name: ${user.firstName}</h1>
            <h1>Last Name: ${user.lastName}</h1>
            <h1>Gender: ${user.gender}</h1>
            <h1>Email: ${user.email}</h1>
            <h1>User Name: ${user.username}</h1>
            <h1>User Id: ${user.id}</h1>
        </div>

    `
    account_settings.append(div)
    localStorage.setItem("img_src",user.image)
    localStorage.setItem("img_display","block")
    localStorage.setItem("menu_button","Logout")
}


if(window.location.pathname=="/lab_13/index.html"){
    show_users()
}
if(window.location.pathname=="/lab_13/account-index.html"){
    get_and_show_user()
}


function to_login_page(){
    window.open("login-index.html","_self")
}
function to_home_page(){
    window.open("index.html","_self")
}
function to_account_page(){
    window.open("account-index.html","_self")
}
function logout(){
    localStorage.clear();
    to_home_page()
}
