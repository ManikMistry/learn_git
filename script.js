const title=document.querySelector("title")
const body=document.querySelector(".body")

title.addEventListener("click",()=>{
    body.classList.toggle("show")
})