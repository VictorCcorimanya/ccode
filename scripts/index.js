const main = document.querySelector('.main')
const burgerButton = document.querySelector('.burger-button')

const ipad = window.matchMedia('screen and (max-width: 767px)')


const validation = (event) => {
    if(event.matches){
        burgerButton.addEventListener('click',showHide)
    }else {
        burgerButton.removeEventListener('click',showHide)
    }
}

ipad.addListener(validation)


const showHide = () => {
    if(main.classList.contains('is-active')){
        main.classList.remove('is-active')
    }else{

        main.classList.add('is-active')
    }
}


burgerButton.addEventListener('click', showHide)