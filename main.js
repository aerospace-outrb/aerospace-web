//Change navbar style on scroll

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open')

        // toggling of icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-angle-right'){
            icon.className = "uil uil-angle-down"
        }else{
            icon.className = "uil uil-angle-right"
        }
    })
})


// show/hide navbar
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)