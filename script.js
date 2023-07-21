const students =[
{
  name: "João",
  noteOne: 80,
  notetwo: 90,
},
{
  name: "Ana Clara",
  noteOne: 50,
  notetwo: 40,
},
{
  name: "Renato",
  noteOne: 30,
  notetwo: 50,
},
{
  name: "Paula",
  noteOne: 70,
  notetwo: 80,
},

]

function media(noteOne, notetwo) {
  return((noteOne + notetwo)/2)
}

function printMedia(student) {
  
  if (media(student.noteOne,student.notetwo) >= 70) {
    return `A média do(a) aluno(a) ${student.name} é: ${media(student.noteOne,student.notetwo)}.\n 
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`
  } else{
    return `A média do(a) aluno(a) ${student.name} é: ${media(student.noteOne,student.notetwo)}.\n 
    Não foi desta vez, ${student.name}! Tente novamente no próximo ano!`
  }
}

for(let student of students) {
  let mediaMessage = printMedia(student)
  alert(mediaMessage)
}