
const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})

const button = document.querySelector("my-button");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});




let titulo = document.querySelector(".titulo")
        
titulo.addEventListener("click", () => {
  titulo.classList.toggle("cambiante")
})