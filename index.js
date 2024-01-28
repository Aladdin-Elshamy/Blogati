import { data } from "./data.js"

const hamburger = document.querySelector(".icon")
const navbar = document.querySelector("ul");
const main = document.getElementById("main")
const viewButton = document.querySelector("button")
const copyRight = document.querySelector("footer span");
let clickTracker = 0;
const date = new Date()
copyRight.textContent = `Copyright ©${date.getFullYear()}`
hamburger.addEventListener("click",function(){
    navbar.classList.toggle("active")
})
function getBlogs(){
    return data.map((blog,index) => {
        const{src,title,paragraph,date} = blog
        if(index<3)
            return `<article>
            <img src=${src} alt="" srcset="">
            <h2>${title}</h2>
            <p>${paragraph}</p>
            <span>${date }</span>
            </article>`
        else{
            return `<article class="hidden">
            <img src=${src} alt="" srcset="">
            <h2>${title}</h2>
            <p>${paragraph}</p>
            <span>${date }</span>
            </article>`
        }
    }).join("")
}
function removeButton(){
    viewButton.style.display = 'none'
}
main.innerHTML = getBlogs()
if(data.length<4){
    removeButton()
}

viewButton.addEventListener("click",function(){
    clickTracker++;
    const start = clickTracker * 3;
    const end = start + 3;
    for(let i = start; i<end;i++){
        if(i>data.length -1 ){
            break
        }   
        else{
            main.children[i].classList.remove("hidden")
        }
    }
    checkVisibilty()
})
function checkVisibilty(){
    let hiddenNum = 0
    for(let i = 0 ; i< main.children.length ;i++){
        if(main.children[i].className == 'hidden')
            hiddenNum++;
    }
    if(hiddenNum==0)
        removeButton()
}