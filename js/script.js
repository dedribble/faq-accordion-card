const arOne = document.getElementById('arOne');
const arTwo = document.getElementById('arTwo');
const arThree = document.getElementById('arThree');
const arFour = document.getElementById('arFour');
const arFive = document.getElementById('arFive');
const header = document.querySelectorAll('.heading');
const body1 = document.getElementById('body1')
const body2 = document.getElementById('body2')
const body3 = document.getElementById('body3')
const body4 = document.getElementById('body4')
const body5 = document.getElementById('body5')

arOne.addEventListener('click', ()=> {

    body1.classList.toggle('active')
})

arTwo.addEventListener('click', ()=> {
    body2.classList.toggle('active')
    
})

arThree.addEventListener('click', ()=> {
    body3.classList.toggle('active')
})

arFour.addEventListener('click', ()=> {
    body4.classList.toggle('active')
})

arFive.addEventListener('click', ()=> {
    arTwo.style.transform = "rotate(180deg)"
    body5.classList.toggle('active')
})