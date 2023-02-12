const header = document.querySelector(".header");
console.log(header)
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 30)
});


const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    navbar.classList.toggle('active');
    menu.classList.toggle('bx-x');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    menu.classList.remove('bx-x');
}


 scrollReveal({
    distance:'60px',
    duration:2500,
    reset:true
});

scrollReveal.reveal('.home', {delay:200, origin:'top'})