const btnEle = document.querySelector(".search-btn")
const containerEle = document.querySelector(".search-container")


btnEle.addEventListener("click", ()=>{
    containerEle.classList.toggle("active")
})