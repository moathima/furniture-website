
let list=document.getElementById("list");

let listitem=document.querySelector(".listitem")

let x=document.querySelector("#x");

listitem.style.display='none';

x.onclick=()=>{
    
    listitem.style.display='none';
    listitem.classList.add("hide");
    
    
}


list.onclick=()=>{
    listitem.style.display='block';
    listitem.classList.remove("hide");

}







