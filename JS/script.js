const menu = document.querySelector('.menu');
const menuJs = document.querySelector('.menu-js')
menu.addEventListener('click',()=>{
    menu.classList.toggle("active");
    menuJs.classList.toggle("click");
})