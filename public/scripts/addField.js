 //procurar o botao//
 document.querySelector("#add-time")
 /** quando clicar no botao execute a função cloneField*/
 .addEventListener('click', cloneField)
 // função //
 function cloneField(){
  //selecionar o campo do html e clona ele na mesma div(schedule-item)//
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
  //selecionar todos os inputs e colocaar dentro da variavel fields//
  const fields = newFieldContainer.querySelectorAll('input')
  
  //para cada campo limpe//
  fields.forEach(function(field){
    //pega o field do momento e limpa ele//
    field.value = ""
  })
  //adicionar o novo schedule-items novo schedule-items que foi criado ao clicar no botao//
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
