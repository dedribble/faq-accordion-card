const arrow = document.querySelectorAll('.arrow');
const body = document.querySelectorAll('.body')
const header = document.querySelectorAll('.heading');

arrow.forEach(btn => {
    btn.addEventListener('click', ()=> {
        body.forEach(btn => btn.classList.toggle('active'));
    })
})