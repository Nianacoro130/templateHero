const menubtn = document.getElementById("menu-portable")

//function menubar 
menubtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let nav = document.querySelector("nav").classList.toggle("active")

    nav.valueOf() == true ?  document.getElementById('menu-portable').className = "fa-solid fa-xmark fa-xl" : 
    document.getElementById('menu-portable').className = "fa-sharp fa-solid fa-bars fa-xl"


})