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


// buscar todos 
// los botones (button) 
// cuyo id empieza con ( [id^= ) 
// el string 'btn-'
const botones = document.querySelectorAll("button[id^='btn-']");
const colores = {
  'salmon': 'red',
  'red': 'green',
  'green': 'blue',
  'blue': 'cyan',
  'cyan': 'magenta',
  'magenta': 'yellow',
  'yellow': 'salmon'
}

// por cada uno de los botones encontrados
botones.forEach((b) => {
  // agregar una escucha de evento click
  b.addEventListener('click', (ev) => {
    // el boton es el destino (target) del click
    let btn = ev.target

    // tomamos el color actual
    let colorActual = btn.style.backgroundColor
    // obtenemos el nuevo color del array de colores segun el index
    let colorNuevo = colores[colorActual]
    // aplicamos color
    btn.style.backgroundColor = colorNuevo
    console.log(`${btn.id} ${colorActual} -> ${colorNuevo}`)

  })
})