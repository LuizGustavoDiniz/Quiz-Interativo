const form = document.querySelector('.quiz-form')
const scoreContainer = document.querySelector('.score-container')
const div = document.createElement('div')

const correctAnswers = ['Right', 'Right', 'Right', 'Right', 'Right', 'Right']

const userAnswers = [
  form.Question1,
  form.Question2,
  form.Question3,
  form.Question4,
  form.Question5,
  form.Question6
]

const ScoreConcept = score => {
const concept =
score < 75
  ? 'Você não jogou muitos jogos na vida né?!'
  : 'Párabéns, Voce é um jogador nato!'

  return concept
}

const insertScoreDivIntoDom = score => {
  scoreContainer.classList.add('show')
  div.setAttribute('class', 'score')
  div.innerHTML = `
    <p class="score-info">Sua pontuação foi: 
    <span class="score-value">${score}</span></p>
    <p class="score-concept">${ScoreConcept(score)}</p>
  `
  
  const button = document.createElement('button')
  button.classList.add('close-score')
  button.textContent = 'X'

  div.prepend(button)
  scoreContainer.appendChild(div)
}



form.addEventListener('submit', event => {
  event.preventDefault()

  let score = 0

  userAnswers.forEach((answer, index) => {
    if (answer.value === correctAnswers[index]) {
      score += 25
    }
  })


  insertScoreDivIntoDom(score)
})

const removeClass = () => scoreContainer.classList.remove('show')

scoreContainer.addEventListener('click', event => {
  const elementClassName = event.target.className

  if (elementClassName === 'close-score') {
    removeClass()
  }

  if (elementClassName=== 'score-container show') {
    removeClass()
  }
})
