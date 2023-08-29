const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);

function show(){
    mainMenu.style.display='flex';
    mainMenu.style.top='0';
} 

function hide(){
    mainMenu.style.top='-100%';
} 

const ButtonTop = document.querySelector('.ButtonTop');

ButtonTop.addEventListener('click', ()=>{
     window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
     })
})

