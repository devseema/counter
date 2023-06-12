console.log("JS FILE CONNECTED!!!!")

// const num1 = document.querySelector("#num1")
const value = document.querySelector("#value")
const btn = document.querySelector(".btn")
const decrease = document.querySelector(".decrease")
const reset = document.querySelector(".reset")
const increase = document.querySelector(".increase")
var count = 0
increase.addEventListener("click",function(){
    console.log("increase")
    count = count+1
    console.log(count)
    value.innerHTML=count
})

reset.addEventListener("click",function(){
    console.log("reset")
    count=0
    value.innerHTML=count
})

decrease.addEventListener("click",function(){
    console.log("decrease")
    count = count-1
    console.log(count)
    value.innerHTML=count

})