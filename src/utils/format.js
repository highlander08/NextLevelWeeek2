const subjects = [
  "Artes",
  "Biologia",
  "Ciência",
  "Educação fisica",
  "Física",
  "Geografia",
  "Historia",
  "Matematica",
  "Portugues",
  "Química",
]
const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sabado",
]
// funcionalidades
/*pega o numero da aula e retorna o nome da aula*/
function getSubject(subjectNumber){
  const position = +subjectNumber - 1
  return subjects[position]
}

function convertHoursToMinutes(time){
  const [hour, minutes] = time.split(":")
  return Number((hour * 60) + minutes)
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
}