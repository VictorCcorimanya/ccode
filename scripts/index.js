const main = document.querySelector('.main')
const burgerButton = document.querySelector('.burger-button')

const ipad = window.matchMedia('screen and (max-width: 767px)')

const showHide = () => {
    if(main.classList.contains('is-active')){
        main.classList.remove('is-active')
    }else{

        main.classList.add('is-active')
    }
}

const validation = (event) => {
    if(event.matches){
        burgerButton.addEventListener('click',showHide)
    }else {
        burgerButton.removeEventListener('click',showHide)
    }
}

ipad.addListener(validation)
validation(ipad)

burgerButton.addEventListener('click', showHide)