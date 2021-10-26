
function playSound(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
   const sound = document.querySelector(`.sounds[data-key="${e.keyCode}"]`)
   if(!audio) return //Para de funcionar a função qdo a tecla não representar um audio.
   audio.currentTime = 0 //Volta para o inicio no tempo determinado
   audio.play()
   sound.classList.add('playing')
}

function removeTransition(e) {
   if(e.propertyName !== 'transform') return //Não acontecerá o transform
   this.classList.remove('playing')
}

const sounds = document.querySelectorAll('.sounds')
sounds.forEach(sound => sound.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)