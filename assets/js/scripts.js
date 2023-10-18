const mode = document.querySelector('#mode_icon')
const form = document.getElementById('login_form')

mode.addEventListener('click', () => {
    if(mode.classList.contains('bi-moon-fill')){
        mode.classList.remove('bi-moon-fill')
        mode.classList.add('bi-brightness-high-fill')
        form.classList.add('dark')
        return
    }

        mode.classList.add('bi-moon-fill')
        mode.classList.remove('bi-brightness-high-fill')
        form.classList.remove('dark')
})