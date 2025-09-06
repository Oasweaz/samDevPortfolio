

const toggle = document.querySelectorAll('.hamburger');
toggle[0].onclick = function(){
    sideBar = document.querySelector('.navbar');
    sideBar.classList.toggle('active');
}

document.addEventListener('scroll', ()=>{
    bar = document.querySelector('header');

    if(window.scrollY > 0){
        bar.classList.add('scrolled');
    }else{
        bar.classList.remove('scrolled');
    }
});

const conA = document.getElementById('alta');
const conB = document.getElementById('altb');

function swapDivs(){   
    
    if(window.innerWidth <= 420){
        conA.style.order = '1';
        conB.style.order = '2';
    }else{
        conA.style.order = '2';
        conB.style.order = '1';
    }

    
}

window.addEventListener('resize', swapDivs);
window.addEventListener('load', swapDivs);