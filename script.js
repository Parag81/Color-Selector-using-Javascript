let colors = document.querySelectorAll('.colors')
document.addEventListener('click', e => {
    if (e.target.className === 'colors'){
        document.body.style.backgroundColor = e.target.innerHTML
    }
})
