const openbtn = document.querySelector('.toggle')
const closebtn = document.querySelector('.close')
const menu = document.querySelector('.menu')
const logo = document.querySelector('.logo')

openbtn.addEventListener('click', () => {
  menu.classList.add('active')
  openbtn.classList.add('active')
  logo.classList.add('active')
})

closebtn.addEventListener('click', () => {
  menu.classList.remove('active')
  openbtn.classList.remove('active')
  logo.classList.remove('active')
})