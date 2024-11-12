const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const navMenu = document.getElementById('navMenu')

openMenu.onclick = () => {
    navMenu.style.left = '50%'
    document.body.style.overflow = 'hidden'
    navMenu.onclick = () => {
        navMenu.style.left = '-50%'
        document.body.style.overflow = ''
    }
}

closeMenu.onclick = () => {
    navMenu.style.left = '-50%'
    document.body.style.overflow = ''
}

const showCaseText = document.getElementById('showCaseText')

document.body.onload = () => {
    // showCaseText.style.opacity = '1'
    showCaseText.style.cssText = `opacity: 1; scale: 1`
}