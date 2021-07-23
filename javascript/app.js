/* pega a refêrencia dos elementos do html */
const form = document.querySelector('.quiz-form')
const scoreContainer = document.querySelector('.score-container')
/* cria uma div */
const div = document.createElement('div')

/* 2 arrays, 1 com o total de respostas certas, e o 2 com as referencias de cada input no form */
const correctAnswers = ['Right', 'Right', 'Right', 'Right', 'Right', 'Right']
const userAnswers = [
  form.Question1,
  form.Question2,
  form.Question3,
  form.Question4,
  form.Question5,
  form.Question6
]

/* Verifica se o score baixo ou alto e mostra uma mensagem referente */
const ScoreConcept = score => {
const concept =
score < 75
  ? 'Você não jogou muitos jogos na vida né?!'
  : 'Párabéns, Voce é um jogador nato!'

  return concept
}

/* insere na Div criada no topo do código 2 paragrafos com informações e
cria um button e tbm insere na div*/
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

/* evento de submit no form primeiro ele verifica se o valor do radio checado é 
igual a um dos itens do array se for coloca 25 na let score correctAnswers e 
depois chama a função que cria elementos html passando o score como argumento */

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

/* uma funçao para remover classe de um elemento */
const removeClass = () => scoreContainer.classList.remove('show')

/* faz verificaçoes para retirar a classe que mostra a tela de score
caso os elementos verificados forem clicados */
scoreContainer.addEventListener('click', event => {
  const elementClassName = event.target.className

  if (elementClassName === 'close-score') {
    removeClass()
  }

  if (elementClassName=== 'score-container show') {
    removeClass()
  }
})
