window.addEventListener('scroll',()=>{
    if(scrollY > 10){
        document.querySelector('header').classList.add('active')
    }
    else{
        document.querySelector('header').classList.remove('active')
    }
})
const menuBar = document.querySelector('.bx-menu')
menuBar.addEventListener('click',()=>{
    document.querySelector('header nav').classList.toggle('active')
})