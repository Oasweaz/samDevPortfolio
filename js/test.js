// console.log('samdev');

// for(let i=1; i<=5; i++){
//     console.log('added ' + i);
// }

// for(let n=2; n=10; n++){
//     console.log('incr ' + n);
// }

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');

function swapDivs(){
    if(window.innerWidth <= 420){
        box1.style.order = '2';
        box2.style.order = '1';
    }else{
        box1.style.order = '1';
        box2.style.order = '2';
    }
}

window.addEventListener('resize', swapDivs);
window.addEventListener('load', swapDivs);