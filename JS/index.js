// Js for hamburger menue

let toggle = false
// target element
const moboicon = document.querySelectorAll('.mobo-icon')
const mobomenu = document.querySelector('.mobo-menu')


// eventListener on hamburger menu

moboicon.forEach((elm) => {
    elm.addEventListener('click', (e) => {
        if (!toggle) {
            mobomenu.style.transform = "translateX(0)"
            toggle = true;
        } else {
            mobomenu.style.transform = "translateX(-400px)"
            toggle = false;
        }
    })
})




// js for drop-down-btn-1
let toggle2 = false
const dropbtn1 = document.querySelector('.drop-btn1')
const dropdown1 = document.querySelector('#dropdown1')
dropbtn1.addEventListener('click', (e) => {
    if (!toggle2) {
        dropdown1.style.display = 'block'
        toggle2 = true;
    }
    else {
        dropdown1.style.display = 'none'
        toggle2 = false;
    }
})
document.addEventListener('click',(e)=>{
    // const drpbtn1 = document.querySelectorAll('.drop-btn1')
    // const dropdown1 = document.querySelector('#dropdown1')
    if(e.target !== dropbtn1){
        dropdown1.style.display = 'none'
    }
})


//drop-btn-2
let toggle3 = false
const dropbtn2 = document.querySelector('.drop-btn2')
const dropdown2 = document.querySelector('#dropdown2')
dropbtn2.addEventListener('click', (e) => {
    if (!toggle3) {
        dropdown2.style.display = 'block'
        toggle3 = true;
    }
    else {
        dropdown2.style.display = 'none'
        toggle3 = false;
    }
})
document.addEventListener('click',(e)=>{
    // const drpbtn1 = document.querySelectorAll('.drop-btn1')
    // const dropdown1 = document.querySelector('#dropdown1')
    if(e.target !== dropbtn2){
        dropdown2.style.display = 'none'
    }
})