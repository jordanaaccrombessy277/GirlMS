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


    
    function reveal (){

        const revealFunction = (type) => {

            let revealsType = document.querySelectorAll(type);
            for(let i=0; i<revealsType.length; i++){
                let windowheight = window.innerHeight;
                let revealTop = revealsType[i].getBoundingClientRect().top;
                let revealpoint = 150;
                
                if(revealTop < windowheight - revealpoint ){
                    revealsType[i].classList.add('active');
                }else{
                    revealsType[i].classList.remove('active');
                }
            }
        }

        revealFunction('.revealTop');
        revealFunction('.revealLeft');
        revealFunction('.revealBottom');
        revealFunction('.revealRight');

       
    }
    window.addEventListener('scroll', reveal);


    const delay=50;
    let index = 0;   

    const compil = (textcompt) =>{

        function text_dacty(){
        let dacty = document.querySelector('.title-heros');
        if(index < textcompt.length){
            let com = dacty.textContent+=textcompt.charAt(index);
            index++;
            setTimeout(text_dacty, delay);
            console.log('Ajout de caractères '+ com);
            }        
        }

        text_dacty();

    };

    compil("Favoriser le développement émotionnel féminin");
