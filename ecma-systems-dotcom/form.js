const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')

const inputs = [name, email, message]


const form = document.getElementById('form')

let nameErr = document.getElementById('nameErr')
let emailErr = document.getElementById('emailErr')
let messageErr = document.getElementById('messageErr')

let errors = []

const submitBtn = document.getElementById('submitBtn')

submitBtn.onclick = (e) => {
    e.preventDefault()

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.borderWidth = '2px'
    }

    if (name.value === '') {
        nameErr.innerHTML = "Name Can't be left empty"
        errors.push('nameError')
    } else {
        nameErr.innerHTML = ''
        errors.splice('nameError')
    }


    if (email.value === '') {
        emailErr.innerHTML = "Email can't be left empty"
        errors.push('emailError') 
    } else {
        let emailArray = email.value.split('')
        if (!emailArray.includes('@' && '.')) {
            emailErr.innerHTML = "Please enter a valid email"
            errors.push('emailError')
        } else {
            emailErr.innerHTML = ''
            errors.splice('emailError')
        }
    }

    if (message.value === '') {
        messageErr.innerHTML = "Message can't be left empty"
        errors.push('messageError')

    } else {
        messageErr.innerHTML = ''
        errors.slice('messageError')
    }

    if (errors.length === 0) {
        form.setAttribute('action', 'https://docs.google.com/forms/d/e/1FAIpQLSe5tmlqymyoAhEX4FoOYoXWn7PCnn23uRRzdu9ypXTcjj3WuQ/formResponse')

        const spiner = document.getElementById('spiner')
        spiner.style.display = 'block'
        submitBtn.style.display = 'none'


        setInterval(() => {
            form.submit()
        }, 2000);
    } 
}

name.oninput = () => {
    nameErr.innerHTML = ""
}
email.oninput = () => {
    emailErr.innerHTML = ""
}
message.oninput = () => {
    messageErr.innerHTML = ""
}


name.onclick = () => {
    name.style.borderWidth = '5px'
    email.style.borderWidth = '2px'
    message.style.borderWidth = '2px'
}

email.onclick = () => {
    email.style.borderWidth = '5px'
    name.style.borderWidth = '2px'
    message.style.borderWidth = '2px'
}
message.onclick = () => {
    message.style.borderWidth = '5px'
    email.style.borderWidth = '2px'
    name.style.borderWidth = '2px'
}






